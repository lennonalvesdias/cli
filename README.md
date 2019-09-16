# Introdução

Este projeto tem como intuíto disponibilizar uma CLI para projetos em ES6 utilizando WebPack e Babel.
Foi utilizado sass no projeto, para testes unitários Jasmine + Karma.
Para a documentação foi utilizado o docjs com template do docdash.

OBS:
Tem muito o que melhorar no projeto, principalmente as buscas de arquivos etc, não está feito de uma forma correta nem seguindo padrões, porém a estrutura que ele gera sim.
Pretendo descrever de uma forma melhor cada passo, como gerar a documentação etc.
Fico a disposição.

# Utilização 

1. Clone o repositório
2. Execute o seguinte comando na raiz do projeto:
    ```npm install```
3. Após finalizado a instalação de todas as dependências rode o seguinte comando:
    ```npm link```
4. Agora o CLI está pronto para gerar projetos e componentes.

# Exemplo de geração de projeto e componente
```
    # criando um projeto
    cs new myproject --author "your name" --description "Your description here"
    # criando um componente
    cs generate component header
```

# Executando o projeto criado
```
    # executando em dev
    npm run local
    # build para deploy
    npm run build
```

# Gerando a documentação da sua aplicação
```
    npm run docs
```

# Executando os testes unitários da sua aplicação
```
    npm run test
```
