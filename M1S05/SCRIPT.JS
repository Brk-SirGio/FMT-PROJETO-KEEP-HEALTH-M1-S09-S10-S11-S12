// [M1S06] Ex. 2 - Estilizando a lista (to-do list project)
// [M1S06] Ex. 3 - Estilizando demais elementos (to-do list project)
// [M1S06] Ex. 4 - Adicionando itens na lista (to-do list project)

// Seleciona o input, o botão e a UL do HTML
let input = document.querySelector("#novaTarefa");
let button = document.querySelector("#addTarefa");
let ul = document.querySelector(".lista");


const contadorElemento = document.getElementById('contador');


// Seleciona todos os itens da lista
let itens = document.querySelectorAll(".itemList");

// Percorre cada item da lista
for (let item of itens) {
  // Seleciona o checkbox e o botão do item
  let checkbox = item.querySelector(".checkbox");

  // Adiciona um evento de change no checkbox para mudar o estilo do item
  checkbox.addEventListener("change", function() {
    // Verifica se o checkbox está marcado ou não
    var checked = this.checked;

    // Se estiver marcado, troca a classe itemList por itemListConcluído
    if (checked) {
      item.className = "itemListConcluído";
    }
    // Se não estiver marcado, troca a classe itemListConcluído por itemList
    else {
      item.className = "itemList";
    }
  });
  let button = item.querySelector(".remover-item-lista");
  // Adiciona um evento de clique no botão para remover o item
  button.addEventListener("click", function() {
    // Remove o item da UL
    window.confirm("Tem certeza que deseja excluir?")
    ul.removeChild(item);
  });
}

// Cria uma função para adicionar um item na UL
function adicionarItem() {
  // Pega o valor do input
  const valor = input.value;
  // Verifica se o valor não está vazio
  if (valor) {
    // Cria um novo elemento li com a classe itemList
    const li = document.createElement("li");
    li.classList.add("itemList");
    // Cria um novo elemento input do tipo checkbox com a classe checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    // Cria um novo elemento label com o valor do input
    const label = document.createElement("label");
    label.textContent = valor;
    // Cria um novo elemento button com a mesma classe e texto dos existentes
    const button = document.createElement("button");
    button.classList.add("remover-item-lista");
    button.textContent = "❌";
    // Define um id único para o li
    const id = "item" + (ul.children.length + 1);
    li.id = id;
    // Define o atributo for do label como o id do li
    label.setAttribute("for", id);
    // Insere o checkbox, o label e o button no li
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);
    // Insere o li na UL
    ul.appendChild(li);
    // Atualiza o contador
    atualizarContador();
    // Limpa o valor do input
    input.value = "";
    // Adiciona um evento de change no checkbox para mudar o estilo do li
    checkbox.addEventListener("change", function() {
      // Verifica se o checkbox está marcado ou não
      var checked = this.checked;

      // Se estiver marcado, troca a classe itemList por itemListConcluído
      if (checked) {
        li.className = "itemListConcluído";
      }
      // Se não estiver marcado, troca a classe itemListConcluído por itemList
      else {
        li.className = "itemList";
      }
    });
    // Adiciona um evento de clique no button para remover o li
    button.addEventListener("click", function() {
      // Remove o li da UL
      window.confirm("Tem certeza que deseja excluir?")
      ul.removeChild(li);
      atualizarContador();
    });
  }
}

// Adiciona um evento de clique no botão para chamar a função
button.addEventListener("click", adicionarItem);



//contador


function atualizarContador() {
  let numeroItens = ul.children.length;
  contadorElemento.textContent = numeroItens;
}