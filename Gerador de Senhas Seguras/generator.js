function gerarSenha() {
  const tamanho = parseInt(document.getElementById("tamanho").value) || 12;
  const incluirNumeros = document.getElementById("numeros").checked;
  const incluirSimbolos = document.getElementById("simbolos").checked;

  let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  if (incluirNumeros) caracteres += numeros;
  if (incluirSimbolos) caracteres += simbolos;

  let senhaGerada = "";
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senhaGerada += caracteres.charAt(indiceAleatorio);
  }

  document.getElementById("senhaExibida").value = senhaGerada;
}

function copiarSenha() {
  const campoSenha = document.getElementById("senhaExibida");
  campoSenha.select();
  navigator.clipboard.writeText(campoSenha.value);
  alert("Senha copiada para a área de transferência!");
}
