var generating = false;

window.onload = () => {
  if (Boolean(localStorage.api)) {
    document.getElementById("api").value =
      localStorage.api;
  }
}

function generate() {
  if (generating)
    return alert("Please wait for the current generation to finish.");
  generating = true
  let api = document.getElementById("api").value;
  let query = document.getElementById("query").value;
  let url = 'https://api.openai.com/v1/images/generations';
  let data = {"size": "256x256"};
  data.prompt = query;
  let token = 'Bearer ' + api;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => finalize(data.data[0].url, api))
    .catch(error => alert(error));
}

function finalize(url, api) {
  generating = false;
  document.getElementById("generated").innerHTML =
    `<img src="${url}"></img>`;
  localStorage.api = api;
}
