# BURH: Teste prático para Frontend

Este será o teste usado para avaliar os candidatos a vaga de estágio para frontend da [Burh](http://burh.com.br). Se você estiver participando de um processo seletivo para nossa equipe, certamente em algum momento receberá este link, mas caso você tenha chego aqui "por acaso", sinta-se convidado a desenvolver nosso teste e enviar uma mensagem para nós no e-mail `jorge@burh.com.br`. 

## Instruções

Você deverá criar um `fork` deste projeto, e desenvolver em cima do seu fork. Use o *README* principal do seu repositório para nos contar como foi resolver seu teste, as decisões tomadas, como você organizou e separou seu código, e <b>principalmente</b> as instruções de como rodar seu projeto e o <b>seu link do perfil do Burh</b>, sem ele não conseguiremos te encontrar para passar o feedback.

Lembre-se que este é um teste técnico e não um concurso público, portanto, não existe apenas uma resposta correta. Mostre que você é bom e nos impressione, mas não esqueça do objetivo do projeto. 

O desafio deverá ser concluído até o dia 11/01/2021 ao meio dia, só serão contabilizados commits até essa data.

## O desafio

Você irá construir a nossa próxima aplicação de busca de filmes usando as [APIs do OMDb](http://www.omdbapi.com/) . Será uma aplicação simples, onde iremos buscar por nomes de filmes e obter maiores detalhes sobre cada um desses filmes, através de um click sobre o card de cada um.

Nossa ideia de interface, é uma tela com apenas um campo de busca no centro da tela, que ao ser acionado com o nome do filme, irá submeter esta pesquisa para a OMBd API e mostrar os resultados na tela, lembrando que o campo de busca não deve ser escondido, mas sim colocado na parte superior de tela.

<b>Lembrando que é apenas uma sugestão de layout, seja criativo!</b>
 
Para cada um dos filmes, devem ser mostrados dados básicos nessa lista, como nome, poster e ano de lançamento. Após o click em um determinado filme, deverá ser redirecionado para a página desse filme, contendo todas as informações que a API retornar.

### O que nós esperamos do seu teste

* Ver na solução a utilização de um framework da sua escolha, mas por aqui utilizamos o VueJS.
* Tambér ver a utilização de dependency managers (npm, webpack)
* Um HTML escrito da maneira mais semântica possível (HTML5/5.1)
* CSS3/4 - Com um pré processador de CSS (a escolha fica a seu critério, mas por aqui utilizamos SASS)
* Mobile first e layout responsivo

### O que nós ficaríamos felizes de ver em seu teste

* Uso do framework VueJS
* Tratamentos caso não encontre nenhum filme na API

### O que nos impressionaria

* [BEM naming convention](http://getbem.com/naming/)
* Aplicação de animações em css quando possível e tome cuidado com a performance da sua animação :)
* Ver o código rodando live (Bucket estático S3, Heroku, Firebase Hosting ou qualquer outro host)
* Possibilidade para adicionar filme aos favoritos

### O que nós não gostaríamos

* Descobrir que não foi você quem fez seu teste
* Ver commits grandes, sem muita explicação nas mensagens em seu repositório 
* Encontrar um commit com as dependências de NPM

## O que avaliaremos em seu teste

* Histórico de commits do git
* As instruções de como rodar o projeto
* Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código
* Alcance dos objetivos propostos
* Adaptação mobile (layout responsivo)
* Componentização e extensibilidade dos componentes

Boa sorte!
