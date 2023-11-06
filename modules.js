var dataJson;
fetch('./modules.json')
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
for (var name in data) {
  if(data.hasOwnProperty(name)) {
  var description = data[name];
  list.innerHTML += `<br/><li><a href="module.html?md=${name}">${name}</a>:<br/>${description}</li>`
  }
}
}
  