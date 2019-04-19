<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use App\Repositories\Contracts\SegmentRepositoryInterface;
use App\Segment;

class SegmentRepositoryEloquent implements SegmentRepositoryInterface
{
    // segment property on class instances
    protected $segment;

    // Constructor to bind segment to repo
    public function __construct(Segment $segment)
    {
        $this->segment = $segment;
    }

    // Get all instances of segment
    public function all()
    {
        return $this->segment->all();
    }

    // create a new record in the database
    public function create(array $data)
    {
        return $this->segment->create($data);
    }

    // update record in the database
    public function update(array $data, $id)
    {
        $record = $this->segment->find($id);
        return $record->update($data);
    }

    // remove record from the database
    public function delete($id)
    {
        return $this->segment->destroy($id);
    }

    // show the record with the given id
    public function show($id)
    {
        return $this->segment->findOrFail($id);
    }

    // Get the associated segment
    public function getsegment()
    {
        return $this->segment;
    }

    // Set the associated segment
    public function setsegment($segment)
    {
        $this->segment = $segment;
        return $this;
    }

    // Eager load database relationships
    public function with($relations)
    {
        return $this->segment->with($relations);
    }
}
