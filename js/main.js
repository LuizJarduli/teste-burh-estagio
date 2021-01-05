//jQuery
$(document).ready(function() {
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
                }
            },
            error: function(data) {
                alert("Ops, Ocorreu um erro com a requisição, Tente novamente");
            }
        })
    })
})