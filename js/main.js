function consultaCep() {
    var cep = document.getElementById("cep").Value;
    var url = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(url);
    $.ajax((
        url = url,
        type = 'GET',
        sucess = function (response) {
            console.log(response);
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("uf").html(response.uf);
            $("#consulta_cep").html("cep" + response.cep);
        }
    ))

}
