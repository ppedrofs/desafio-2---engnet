const selectUF = document.getElementById("uf")
const cidadesList = document.getElementById("cidades-lista")


window.addEventListener("load", carregaUF)
selectUF.addEventListener("change", carregaMunicipios)

async function carregaUF(){
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

    let request = await fetch(url)
    let response = await request.json()

    let options = "<option></option>"
    response.forEach(function(uf,i){
        options += "<option value ='"+uf.sigla+"'>"+uf.nome+"</option>"
    })
    document.getElementById("uf").innerHTML = options
}

async function carregaMunicipios() {
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + selectUF.value + "/municipios/";

    let request = await fetch(url);
    let response = await request.json();

    let cidades = "<div id='cidade-container'>";

    response.forEach(function (municipio, i) {
        cidades += "<p class='cidade-item'>" + municipio.nome + "</p>";
    });

    cidades += "</div>";
    cidadesList.innerHTML = cidades;
}

