<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Company extends Model
{
    use SoftDeletes;

    public $table = "company";
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @var array
     */
    protected $fillable = [
        'id_company', 'id_address', 'id_segment',
        'cnpj', 'social_name', 'fantasy_name',
        'municipal_registration', 'state_registration', 'mail'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @var array
     */
    protected $hidden = [
        'deleted_at', 'created_at', 'updated_at'
    ];

    /**
     * Opcional, informar a coluna deleted_at como um Mutator de data
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @var array
     */
    protected $dates = ['deleted_at'];

    /**
     * 
     * 
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @return class
     */
    public function addresse()
    {
        return $this->belongsToMany(Address::class);
    }

    //cnpj

    /**
     * Make sure that social name is always capitalized when retrieved from the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function getSocialNameAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Make sure that social name is capitalized BEFORE saving it to the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function setSocialNameAttribute($value)
    {
        $this->attributes['social_name'] = ucwords($value);
    }

    /**
     * Make sure that fantasy name is always capitalized when retrieved from the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function getFantasyNameAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Make sure that fantasy name is capitalized BEFORE saving it to the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function setFantasyNameAttribute($value)
    {
        $this->attributes['fantasy_name'] = ucwords($value);
    }

    /**
     * Make sure that municipal registration is always capitalized when retrieved from the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function getMunicipalRegistrationAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Make sure that municipal registration is capitalized BEFORE saving it to the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function setMunicipalRegistrationAttribute($value)
    {
        $this->attributes['municipal_registration'] = ucwords($value);
    }

    /**
     * Make sure that state registration is always capitalized when retrieved from the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function getStateRegistrationAttribute($value)
    {
        return ucwords($value);
    }

    /**
     * Make sure that state registration is capitalized BEFORE saving it to the database
     *
     * @author Bruno Vasconcellos Augusto <bvaugusto@gmail.com>
     * @version 1.0
     * @param $value
     * @return string
     */
    public function setStateRegistrationAttribute($value)
    {
        $this->attributes['state_registration'] = ucwords($value);
    }
}
