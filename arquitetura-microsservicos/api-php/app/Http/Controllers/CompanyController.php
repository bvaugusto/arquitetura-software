<?php

namespace App\Http\Controllers;

use App\Company;
use App\Segment;
use App\Address;
use App\Repositories\CompanyRepositoryEloquent;
use App\Repositories\SegmentRepositoryEloquent;
use App\Repositories\AddressRepositoryEloquent;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class CompanyController extends Controller
{

    // space that we can use the repository from
    protected $company;
    protected $segment;
    protected $address;

    public function __construct(Company $company, Segment $segment, Address $address)
    {
        // set the model
        $this->company = new CompanyRepositoryEloquent($company);
        $this->segment = new SegmentRepositoryEloquent($segment);
        $this->address = new AddressRepositoryEloquent($address);
    }

    /**
     * Display a listing of the resource.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = array();
        foreach ($this->company->all() as $key => $value) {
            $data['data'][] = $value;
        }
        return json_encode($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return response()->json($this->segment->all());
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {

            $validator = Validator::make(
                array(
                    'cnpj' => $request->cnpj,
                    'segmento' => $request->id_segment,
                    'social_name' => $request->social_name,
                    'municipal_registration' => $request->municipal_registration,
                    'state_registration' => $request->state_registration,
                    'mail' => $request->mail
                ),
                array(
                    'cnpj' => 'required',
                    'segmento' => 'required',
                    'social_name' => 'required',
                    'municipal_registration' => 'required',
                    'state_registration' => 'required',
                    'mail' => 'required'
                ),
                array(
                    'cnpj' => 'Favor informar o CPF!',
                    'id_segment' => 'Favor informar o Segmento!',
                    'segmento' => 'Favor informar a Razão Social!',
                    'municipal_registration' => 'Favor informar a Inscrição Municipal!',
                    'state_registration' => 'Favor informar a Inscrição Estadual!',
                    'mail' => 'Favor informar o E-mail!'
                )
            );

            if($validator->fails()){
                $msg = $validator->messages()->getMessages();
                return response()->json(['success' => false, 'message' => $msg]);
            }

            $dataCompany = array();
            $dataCompany['cnpj'] = clearMask($request->cnpj);
            $dataCompany['id_segment'] = $request->id_segment;
            $dataCompany['social_name'] = $request->social_name;
            $dataCompany['fantasy_name'] = $request->fantasy_name;
            $dataCompany['municipal_registration'] = $request->municipal_registration;
            $dataCompany['state_registration'] = $request->state_registration;
            $dataCompany['mail'] = $request->mail;

            $dataAddress = array();
            $dataAddress['cep'] = clearMask($request->cep);
            $dataAddress['public_place'] = $request->public_place;
            $dataAddress['number'] = $request->number;
            $dataAddress['telephone'] = clearMask($request->telephone);
            $dataAddress['complement'] = $request->complement;
            $dataAddress['neightborhood'] = $request->neightborhood;
            $dataAddress['city'] = $request->city;
            $dataAddress['state'] = $request->state;

            if ($returnCompany = $this->company->create($dataCompany))
            {
                $dataAddress['id_company'] = $returnCompany->id;
                if ($returnAddress = $this->address->create($dataAddress)) {
                    
                    try {
                        $dataCompany['id_address'] = $returnAddress->id;
                        $this->company->update($dataCompany, $returnCompany->id);
                        return response()->json(['success' => true, 'message' => "Cadastro realizado com sucesso!"]);
                    } catch (\Exception $e) {
                        return response()->json(['success' => false, 'message' => $e->getMessage()]);
                    }
                }
            }

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json($this->company->show($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $returnData = array();
        $returnData['company'] = $this->company->show($id);
        $returnData['address'] = $this->address->show($returnData['company']['id_address']);
        return response()->json($returnData);
    }

    /**
     * Update the specified resource in storage.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {

            $validator = Validator::make(
                array(
                    'cnpj' => $request->cnpj,
                    'id_segment' => $request->id_segment,
                    'social_name' => $request->social_name,
                    'municipal_registration' => $request->municipal_registration,
                    'state_registration' => $request->state_registration,
                    'mail' => $request->mail
                ),
                array(
                    'cnpj' => 'required',
                    'id_segment' => 'required',
                    'social_name' => 'required',
                    'municipal_registration' => 'required',
                    'state_registration' => 'required',
                    'mail' => 'required'
                ),
                array(
                    'cnpj' => 'Favor informar o CPF!',
                    'id_segment' => 'Favor informar o Segmento!',
                    'social_name' => 'Favor informar a Razão Social!',
                    'municipal_registration' => 'Favor informar a Inscrição Municipal!',
                    'state_registration' => 'Favor informar a Inscrição Estadual!',
                    'mail' => 'Favor informar o E-mail!'
                )
            );

            if($validator->fails()){
                $msg = $validator->messages()->getMessages();
                return response()->json(['success' => false, 'message' => $msg]);
            }

            $dataCompany = array();
            $dataCompany['cnpj'] = clearMask($request->cnpj);
            $dataCompany['id_segment'] = $request->id_segment;
            $dataCompany['social_name'] = $request->social_name;
            $dataCompany['municipal_registration'] = $request->municipal_registration;
            $dataCompany['state_registration'] = $request->state_registration;
            $dataCompany['mail'] = $request->mail;

            $dataAddress = array();
            $dataAddress['cep'] = clearMask($request->cep);
            $dataAddress['public_place'] = $request->public_place;
            $dataAddress['number'] = $request->number;
            $dataAddress['telephone'] = clearMask($request->telephone);
            $dataAddress['complement'] = $request->complement;
            $dataAddress['neightborhood'] = $request->neightborhood;
            $dataAddress['city'] = $request->city;
            $dataAddress['state'] = $request->state;

            if ($this->company->update($dataCompany, $id))
            {
                try {

                    $company = $this->company->show($id);
                    $dataAddress['id_company'] = $company['id'];

                    $this->address->update($dataAddress, $company['id_address']);
                    return response()->json(['success' => true, 'message' => "Cadastro atualizado com sucesso!"]);
                } catch (\Exception $e) {
                    return response()->json(['success' => false, 'message' => $e->getMessage()]);
                }
            }

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $this->company->delete($id);
            return response()->json(['success' => true, 'message' => "Cadastro removido com sucesso!"]);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'message' => $e->getMessage()]);
        }
    }
}
