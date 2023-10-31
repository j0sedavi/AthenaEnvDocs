var dataJson;
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
function load(data) {
  var list = document.getElementById('listUl')
  list.innerHTML = ""
for (var functionName in data) {
  if(data.hasOwnProperty(functionName)) {
  var description = data[functionName].description;
  list.innerHTML += `<li><a href="Function.html?aula=${functionName}">${functionName}</a> ${description != undefined ? `- ${description}`: ""}</li>`
  }
}
}
  