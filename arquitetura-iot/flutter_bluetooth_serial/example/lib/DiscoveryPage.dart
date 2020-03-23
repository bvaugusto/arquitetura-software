import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_bluetooth_serial/flutter_bluetooth_serial.dart';

import './BluetoothDeviceListEntry.dart';
import 'package:http/http.dart' as http;

import 'dart:convert';

class DiscoveryPage extends StatefulWidget {
  /// If true, discovery starts on page start, otherwise user must press action button.
  final bool start;

  const DiscoveryPage({this.start = true});

  @override
  _DiscoveryPage createState() => new _DiscoveryPage();
}

class _DiscoveryPage extends State<DiscoveryPage> {
  StreamSubscription<BluetoothDiscoveryResult> _streamSubscription;
  List<BluetoothDiscoveryResult> results = List<BluetoothDiscoveryResult>();
  bool isDiscovering;

  _DiscoveryPage();

  @override
  void initState() {
    super.initState();

    isDiscovering = widget.start;
    if (isDiscovering) {
      _startDiscovery();
    }
  }

  void _restartDiscovery() {
    setState(() {
      results.clear();
      isDiscovering = true;
    });

    _startDiscovery();
  }

  void _startDiscovery() {
    int limit = -60;
    _streamSubscription =
        FlutterBluetoothSerial.instance.startDiscovery().listen((r) {
      setState(() {
        if (limit > r.rssi) {
          return;
        }
        results.add(r);
      });
    });

    _streamSubscription.onDone(() {
      setState(() {
        isDiscovering = false;
      });
    });
  }

  // @TODO . One day there should be `_pairDevice` on long tap on something... ;)

  @override
  void dispose() {
    // Avoid memory leak (`setState` after dispose) and cancel discovery
    _streamSubscription?.cancel();

    super.dispose();
  }

  void _sendDataApi(result) async {
    //  {bondState: 10, rssi: -67, address: B4:EF:39:F7:83:C8, name: Bruno Augusto, isConnected: false, type: 1}

    var data = json.encode({
      'rssi': result.rssi,
      'address': result.device.address,
      'name': result.device.name
    });
    print(data);

    var client = http.Client();
    var url = 'https://jsonplaceholder.typicode.com/posts';
    // var url = Uri.encodeFull('https://example.com/whatsit/create');

    // try {
    //   var uriResponse = await client.post(url, body: data);
    //   print(uriResponse);
    //   // print(await client.get(uriResponse));
    //   // print(await client.get(uriResponse.bodyFields['uri']));
    // } finally {
    //   client.close();
    // }

    try {
      var response = await http.post(url, body: data);
      print('>>>>>>>>>>>> Response http client <<<<<<<<<<<<');
      print(response);
      print('Response status: ${response.statusCode}');
      // print('Response body: ${response.body}');

      // print( await http.read('https://example.com/foobar.txt'));

    } catch (e) {
      print('>>>>>>>>> e <<<<<<<<<');
      print(e);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // Top
      appBar: AppBar(
        title: isDiscovering
            ? Text('Discovering devices')
            : Text('Discovered devices'),
        actions: <Widget>[
          isDiscovering
              ? FittedBox(
                  child: Container(
                    margin: new EdgeInsets.all(16.0),
                    child: CircularProgressIndicator(
                      valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                    ),
                  ),
                )
              : IconButton(
                  icon: Icon(Icons.replay),
                  onPressed: _restartDiscovery,
                )
        ],
      ),

      body: ListView.builder(
        itemCount: results.length,
        itemBuilder: (BuildContext context, index) {
          BluetoothDiscoveryResult result = results[index];
          // _sendDataApi(result);
          return BluetoothDeviceListEntry(
              device: result.device, rssi: result.rssi);
        },
      ),
    );
  }
}
