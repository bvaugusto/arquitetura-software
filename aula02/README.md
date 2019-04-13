## Estilo Arquitetural de APIs 

## Estudo Dirigido

* O seu objetivo é implementar uma API para a gestão de uma livraria virtual. Uma livraria vir-tual deve ter pelo menos funcionalidades para:


•	Postar comentários para livros. (resenhadas)

•	Pesquisa de livros por critérios diversos.

•	Manipular um carrinho de compras

•	Realizar pedidos

•	Acompanhamento o status das entregas realizadas.

•	Cadastrar livros 

## Swagger
* https://localhost:5001/swagger/index.html


## Book

* GET /api/Book

* POST /api/Book

* GET /api/Book/{id}

* PUT /api/Book/{id}

* DELETE /api/Book/{id}

## Car

* GET /api/Car

* POST /api/Car

* GET /api/Car/{id}

* PUT /api/Car/{id}

* DELETE /api/Car/{id}

## Order

* GET /api/Order

* POST /api/Order

* GET /api/Order/{id}

* PUT /api/Order/{id}

* DELETE /api/Order/{id}

## Request

* GET /api/Request

* POST /api/Request

* GET /api/Request/{id}

* PUT /api/Request/{id}

* DELETE /api/Request/{id}

## Review

* GET /api/Review

* POST /api/Review

* GET /api/Review/{id}

* PUT /api/Review/{id}

* DELETE /api/Review/{id}

## Search

* GET /api/Search

## User

* GET /api/User

* POST /api/User

* GET /api/User/{id}

* PUT /api/User/{id}

* DELETE /api/User/{id}

## Models

```
Book{
    id	integer($int32)
    title	string
    author	string
    year	integer($int32)
    isbn	string
    price	number($double)
}
```

```
Car{
    id	integer($int32)
    idBook	integer($int32)
    idSession	integer($int32)
}
```

```
Order{}
```

```
Request{
    idCodRequest	integer($int64)
    idStatusRequest	integer($int32)
    codProduct	integer($int32)
    priceProduct	number($double)
    dateRequest	integer($int32)
}
```

```
Review{
    idReview	integer($int32)
    idBook	integer($int32)
    idUser	integer($int32)
    title	string
    description	string
    rating	integer($int32)
    year	string($date-time)
}
```

```
Search{
    codigo	integer($int32)
    nome	string
}
```

```
User{
    id	integer($int32)
    fullname	string
    email	string
    cpf	integer($int32)
}
```

