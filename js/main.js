// no ato de carregar a pág, passo a queryString como parametro na requisição ajax
window.onload = function(e) {
        if (window.location.pathname == "/index.html") {
            var queryString = window.location.search;
            var busca = getParameterByName("title");
            var chave = '884b737f';
            var request = "http://www.omdbapi.com/?apikey=" + chave + "&t=" + busca + "&plot=full"; // minha chave da API
            $.ajax({
                method: 'GET',
                url: request,
                success: function(data) {
                    var card = $("#card");
                    $("#imdb2").html("");
                    $("#metacritic").html("");
                    $("#rotten").html("");
                    if (data.Response == "False") {
                        alert("erro 404, filme não encontrado");
                        if (card.is('.ativo')) {
                            card.removeClass('ativo');
                            card.addClass('hidden');
                        }
                    } else {
                        //console.log(data);
                        if (card.is('.hidden')) {
                            card.removeClass('hidden');
                            card.addClass('ativo');
                        }

                        //atribuindo o resultado na aplicação
                        $("#poster").attr('src', data.Poster);
                        $("#titulo").text(data.Title);
                        $("#estreia").text(data.Year);
                        $("#duracao").text(data.Runtime);
                        $("#imdb").text(data.imdbRating);
                        $("#diretor").text(data.Director);
                        $("#genero").text(data.Genre);
                        $("#PG").text(data.Rated);
                        $("#sinopse").text(data.Plot);
                        $("#roteiro").text(data.Writer);
                        $("#elenco").text(data.Actors);

                        //criei um condicional para os icones do rotten
                        //existe o certified fresh para filmes com aceitação por 75% da crítica
                        //fresh para 60% das críticas favoráveis
                        //splat para filmes menores que 60%
                        //also, criei uma segunda consição para evitar erros caso não exista registro do rotten no result da API
                        if (parseInt(data.Ratings[1].Value) > 75 && data.Ratings[1].Source == "Rotten Tomatoes") {
                            $("#rotten").append(
                                "<img src='./img/rating-icons/certified-fresh-rotten.png' alt='Imdb rating'>&nbsp;&nbsp;" + data.Ratings[1].Value
                            );
                        } else if (parseInt(data.Ratings[1].Value) > 60 && data.Ratings[1].Source == "Rotten Tomatoes") {
                            $("#rotten").append(
                                "<img src='./img/rating-icons/fresh-rotten.png' alt='Imdb rating'>&nbsp;&nbsp;" + data.Ratings[1].Value
                            );
                        } else if (data.Ratings[1].Source == "Rotten Tomatoes") {
                            $("#rotten").append(
                                "<img src='./img/rating-icons/splat-rotten.png' alt='Imdb rating'>&nbsp;&nbsp;" + data.Ratings[1].Value
                            );
                        }
                        $("#imdb2").append(
                            "<img src='./img/rating-icons/IMDb-icon.png' alt='Imdb rating'>&nbsp;&nbsp;" + data.imdbRating + "/10"
                        );
                        $("#metacritic").append(
                            "<img src='./img/rating-icons/Metacritic-icon.png' alt='metacritic rating'>&nbsp;&nbsp;" + data.Metascore + "/100"
                        );
                        $("#bilheteria").text(data.BoxOffice);
                        $("#premios").text(data.Awards);
                        $("#paises").text(data.Country);
                        $("#idiomas").text(data.Language);
                        $("#producao").text(data.Production);
                    }
                },
                // em caso de erro na requisição, um alerta é exibido (será melhorado)
                error: function(data) {
                    alert("Ops, Ocorreu um erro com a requisição, Tente novamente");
                }
            })
        }

    }
    //jQuery
$(document).ready(function() {

    // no ato de submit do form, uma requisição ajax é feita para a API
    $('#buscaForm').submit(function(event) {
        event.preventDefault();

        var busca = $('#name').val();
        //console.log(busca);
        var chave = '884b737f';
        var request = "http://www.omdbapi.com/?apikey=" + chave + "&t=" + busca + "&plot=full"; // minha chave da API
        $.ajax({
            method: 'GET',
            url: request,
            success: function(data) {
                var card = $("#card");
                if (data.Response == "False") {
                    alert("erro 404, filme não encontrado");
                    if (card.is('.ativo')) {
                        card.removeClass('ativo');
                        card.addClass('hidden');
                    }
                } else {
                    //console.log(data);
                    if (card.is('.hidden')) {
                        card.removeClass('hidden');
                        card.addClass('ativo');
                    }
                    $("#poster").attr('src', data.Poster);
                    $("#titulo").text(data.Title);
                    $("#estreia").text(data.Year);
                    $("#duracao").text(data.Runtime);
                    $("#imdb").text(data.imdbRating);
                    $("#diretor").text(data.Director);
                }
            },
            error: function(data) {
                alert("Ops, Ocorreu um erro com a requisição, Tente novamente");
            }
        })
    })

})

//função pra construir query string
function getUrl() {
    var queryFilme = document.getElementById("name").value;
    var queryString = "./filme.html?title=" + queryFilme;
    window.location.href = queryString;
}

//função regex que retorna somente o paramentro da queryString
//disponível em https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}