<?php

require_once('Pessoa.php');

$pessoa = new Pessoa();

return json_encode($pessoa->getAll());