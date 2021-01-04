//jQuery
$(document).ready(function() {
    $('#buscaForm').submit(function(event) {
        event.preventDefault();

        var busca = $('#name').val();
        //console.log(busca);
        var chave = '884b737f';
        var request = "http://www.omdbapi.com/?apikey=" + chave + "&t=" + busca; // minha chave da API
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