var btnConsultar = document.getElementById("btnConsultar");
var resultado = document.querySelectorAll(".resultado");


btnConsultar.addEventListener("click", function () {
    var CEP = document.getElementById("txtCEP").value;

    if (CEP.length != 8) {
        alert("CEP inválido !!!");
        return;
    }
    var url = `https://viacep.com.br/ws/${CEP}/json/`;

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            mostrarEndereço(data);
        });
    })
});

mostrarEndereço = function (dados) {

    for (var i = 0; i < resultado.length; i++) {
        if (dados.erro) {
            resultado[0].innerHTML = "Cep não encontrado :(";
            resultado[1].innerHTML = "";
            resultado[2].innerHTML = "";
            resultado[3].innerHTML = "";
            resultado[4].innerHTML = "";
            resultado[5].innerHTML = "";
            return;
        }
        resultado[0].innerHTML = "CEP: " + dados.cep;
        resultado[1].innerHTML = "Logradouro: " + dados.logradouro;
        resultado[2].innerHTML = "Complemento: " + dados.complemento;
        resultado[3].innerHTML = "Bairro: " + dados.bairro;
        resultado[4].innerHTML = "Cidade: " + dados.localidade;
        resultado[5].innerHTML = "UF: " + dados.uf;

    }
}


