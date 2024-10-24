let adiciona = () => {
  console.log("estou adicionando 1");
  let contador = document.getElementById("contador");
  contador.innerHTML = parseInt(contador.innerHTML) + 1;
};

let remove = () => {
  console.log("estou removendo 1");
  let contador = document.getElementById("contador");
  if (contador.innerHTML > 0) {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;
  }
};
