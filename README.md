# Serverless JOI

Implementação simples da framework JOI com a framework Serverless para a validação de entrada de dados em lambdas node.js

## Entrada:

A lambda recebe um payload (objeto) de entrada com o seguinte esquema que será validado pelo JOI

```
{
    "nome": "João",
    "cpf": "11111111131",
    "conta": "1313",
    "valor": 1000,
    "beneficiario": "Pedro",
    "cpf_beneficiario": "22222222231"
}
```

 
Para executar a lambda, utilize o seguinte comando no terminal.

serverless invoke local --function hello --path ./payload.json

hello é o nome da função dentro do arquivo serverless.yml e o ./payload.json o caminho para o arquivo payload onde contem o objeto de entrada da lambda


## Saida

Caso algum campo esteja vazio ou não atenda a outras regras espostas na classe Validator, será retornado o seguinte codigo e messagem:

```
{
codigo: 422,
message: <campo com o erro>
}
```

Caso sucesso sem erros:

```
{
codigo: 200,
message: "Sucesso"
}
```
