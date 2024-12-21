let valor = document.getElementById("txt");
let res = document.getElementById("resultado");

function clicou() {
  res.innerHTML = "";

  if (valor.value == 0) {
    alert("Digite um número");
  } else {
    let indice = 1;
    let valorf = Number(valor.value);

    while (indice <= 10) {
      let option = document.createElement("option");
      option.text = `${valorf} x ${indice} = ${indice * valorf}`;
      option.value = `res ${indice}`;
      res.appendChild(option);
      indice++;
    }
  }
}
