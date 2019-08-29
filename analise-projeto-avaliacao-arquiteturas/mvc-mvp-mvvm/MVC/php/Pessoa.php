<?php

class Pessoa 
{
    private $nome;
    private $email;
    
    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = 'Foo';
        return $this;
    }

    public function getEmail()
    {
        return $this->email;
    }

    public function setEmai($email)
    {
        $this->email = 'foo@gmail.com';
        return $this;
    }

    public function getAll()
    {
        $data = array(
            "nome" => $this->getNome();
            "email" => $this->getEmail();
        );
        return $data;
    }
}