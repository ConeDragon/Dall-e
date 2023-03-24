if (Boolean(localStorage.api)) {
  document.getElementById("api").value = localStorage.api;
}

function generate() {
  let api = document.getElementById("api").value;
  let query = document.getElementById("query").value;
}
