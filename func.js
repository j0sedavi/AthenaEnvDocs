const { search } = window.location
const params = new URLSearchParams(search);
var aula = params.get("aula")
var title = document.getElementById('title')
title.textContent = aula;
if(aula === null || aula === " " || aula === "") {
  window.location.href = "index.html"
}
console.log("iniciado")
fetch('./data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    load(data)
  })
  .catch(error => {
    console.error('Erro:', error);
  });
function load(dataJson) {
  var data = dataJson[aula]
  var desc = document.querySelector("#desc");
  var Param = document.querySelector("#Parameters");
  var prop_List = document.querySelector("#prop-List");
  var Methods_List = document.querySelector("#Methods-List");
  var Parameters = document.querySelector("#Parameters-List")
  var r_values = document.querySelector("#r-values")
  var code = document.querySelector("#coded")
  if(!data.return) {
    let element = document.getElementById('Return_v');
    element.style.display = "none"
  }else{
    var return_list = data.return.split(";")
    for(var i in return_list) {
      r_values.innerHTML += `<li>${return_list[i]}</li>`
    }
  }
  if(!data.parameters) {
    let element = document.getElementById('text_P');
    let div = document.querySelector(".params")
    element.style.display = "none"
    div.style.display = "none"
    Parameters.style.display = "none"
  }else{
  var content = "";
  var limit = data.parameters.length - 1;
  for(var dt in data.parameters) {
    if(data.parameters.hasOwnProperty(dt)) {
    if(parseInt(dt) >= limit) {
    content += `${data.parameters[dt].type}:${data.parameters[dt].name}`
    }else{
    content += `${data.parameters[dt].type}:${data.parameters[dt].name}, `
    }
  }
  }
  Param.textContent = `(${content})`
  for(var dt in data.parameters) {
  Parameters.innerHTML += `
      <tr>
        <td>${data.parameters[dt].name}</td>
        <td>${data.parameters[dt].description}</td>
    </tr>
  `
  }
  }
  if(!data.properties) {
    let element = document.getElementById('Properties');
    element.style.display = "none"
    prop_List.style.display = "none"
  }else{
    for(var property in data.properties) {
        prop_List.innerHTML += `
      <tr>
        <td>${data.properties[property].name}</td>
        <td>${data.properties[property].description}</td>
    </tr>
  `
    }
  }
  if(!data.methods) {
    let element = document.getElementById('Methods');
    element.style.display = "none"
    Methods_List.style.display = "none"
  }else{
    for(var method in data.methods) {
        Methods_List.innerHTML += `
      <tr>
        <td>${data.methods[method].name}</td>
        <td>${data.methods[method].description}</td>
    </tr>
  `
    }
  }
  if(!data.example) {
    var element = document.getElementById('pr')
    var element2 = document.getElementById('text_E')
    element.style.display = "none"
    element2.style.display = "none"
  }else{
  code.textContent = data.example;
  }
  if(!data.description) {
    let text_D = document.getElementById('text_D')
    desc.style.display = "none";
    text_D.style.display = "none";
  }else{
  desc.textContent = data.description
  }
  reload()
}
function reload() {
    var linkElement = document.createElement('link');
  var scriptElement = document.createElement('script');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'prism.css';
  linkElement.type = 'text/css';
  linkElement.media = 'all';
  scriptElement.src = "prism.js";
  scriptElement.type = "text/javascript";
  scriptElement.charset = "utf-8";
  document.head.appendChild(linkElement);
  document.body.appendChild(scriptElement);
  var conteud = document.getElementById('conteudo')
}
