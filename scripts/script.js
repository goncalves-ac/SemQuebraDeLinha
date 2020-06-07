function quebraLinha(){
  let textarea = document.getElementById("texto");
  let edit = document.getElementById("change");

  edit.addEventListener("click", () => {
    let texto = textarea.value;
    let resultado = "";

    for (i = 0; i < texto.length; i++) {
      texto.charCodeAt(i) == 10 ?
      resultado += " " :
      resultado += texto[i];
    }

    console.log(resultado)
    textarea.value = resultado;
  })  
}

function fazerCopia() {
  let range = document.createRange();
  range.selectNode(document.getElementById("textoFinal"));
  window.getSelection().removeAllRanges(); // limpa seleção atual
  window.getSelection().addRange(range); // seleciona o texto
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// limpa seleção
}

function limparTela(){
  document.getElementById("texto").value='';
  textoFinal.innerHTML = '';
}

function fazerSelecao(){
  var novoTexto = [];

  var textoPego = document.getElementById('texto').value;
  var arrayTexto = textoPego.split(' ');
  
  if(document.getElementById('palavra').value == "") {
    var palavraAselecionar = document.querySelector('.garantia:checked').value;
  } else {
    var palavraAselecionar = document.getElementById('palavra').value;
  }
  

  for (let i = 0; i < arrayTexto.length; i++) {
    if (arrayTexto[i].toLowerCase() === palavraAselecionar.toLowerCase()){
      var versaoNova = arrayTexto[i].toUpperCase().bold();
      novoTexto.push(versaoNova);
    } else {
      novoTexto.push(arrayTexto[i]);
   } 
  }
  
  var novoTextoFinal = novoTexto.toString().replace(/,/gi, " ");
  textoFinal.innerHTML = novoTextoFinal;
}
