<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\CompanyRepositoryInterface;
use App\Company;

class CompanyRepositoryEloquent implements CompanyRepositoryInterface
{
    // Company property on class instances
    protected $company;

    // Constructor to bind Company to repo
    public function __construct(Company $company)
    {
        $this->company = $company;
    }

    // Get all instances of Company
    public function all()
    {
        return $this->company->all();
    }

    // create a new record in the database
    public function create(array $data)
    {
        return $this->company->create($data);
    }

    // update record in the database
    public function update(array $data, $id)
    {
        $record = $this->company->find($id);
        return $record->update($data);
    }

    // remove record from the database
    public function delete($id)
    {
        return $this->company->destroy($id);
    }

    // show the record with the given id
    public function show($id)
    {
        return $this->company->findOrFail($id);
    }

    // Get the associated Company
    public function getCompany()
    {
        return $this->company;
    }

    // Set the associated Company
    public function setCompany($company)
    {
        $this->company = $company;
        return $this;
    }

    // Eager load database relationships
    public function with($relations)
    {
        return $this->company->with($relations);
    }
}
