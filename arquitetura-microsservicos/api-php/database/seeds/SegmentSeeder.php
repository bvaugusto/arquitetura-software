<?php

use Illuminate\Database\Seeder;

class SegmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return void
     */
    public function run()
    {
        DB::table('segments')->delete();

        $segments = [
            ['id'=> 1, 'dsc_segment' => 'Produto'],
            ['id'=> 2, 'dsc_segment' => 'Serviço'],
            ['id'=> 3, 'dsc_segment' => 'Produto e Serviço']
        ];

        \App\Segment::insert($segments);
    }
}
