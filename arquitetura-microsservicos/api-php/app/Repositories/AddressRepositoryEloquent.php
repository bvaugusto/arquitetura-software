<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\AddressRepositoryInterface;
use App\Address;

class AddressRepositoryEloquent implements AddressRepositoryInterface
{
    // Address property on class instances
    protected $address;

    // Constructor to bind Address to repo
    public function __construct(Address $address)
    {
        $this->address = $address;
    }

    // Get all instances of Address
    public function all()
    {
        return $this->address->all();
    }

    // create a new record in the database
    public function create(array $data)
    {
        return $this->address->create($data);
    }

    // update record in the database
    public function update(array $data, $id)
    {
        $record = $this->address->find($id);
        return $record->update($data);
    }

    // remove record from the database
    public function delete($id)
    {
        return $this->address->destroy($id);
    }

    // show the record with the given id
    public function show($id)
    {
        return $this->address->findOrFail($id);
    }

    // Get the associated Address
    public function getAddress()
    {
        return $this->address;
    }

    // Set the associated Address
    public function setAddress($address)
    {
        $this->address = $address;
        return $this;
    }

    // Eager load database relationships
    public function with($relations)
    {
        return $this->address->with($relations);
    }
}
