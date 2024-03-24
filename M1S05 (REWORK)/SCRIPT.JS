
  // Selecionar elementos
  let input = document.querySelector("#nova-tarefa");
  let button = document.querySelector("#add-tarefa");
  let ul = document.querySelector("#afazeres");
  let contador = document.querySelector("#contador");

  // Função para adicionar tarefa
  function adicionarTarefa(event) {
    // Prevenir comportamento padrão
    event.preventDefault();

    // Obter valor da nova tarefa
    const valor = input.value;

    // Criar elementos
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const button = document.createElement("button");
    const span = document.createElement("span");

    // Setar classes e atributos
    li.classList.add("item-lista");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-tarefa");
    label.textContent = valor;

    button.setAttribute("class", "remover-item-lista");
    span.setAttribute("class", "material-symbols-outlined");
    span.textContent = "delete_forever";

    // Gerar ID único
    const id = "item" + (ul.children.length + 1);
    checkbox.id = id;
    label.setAttribute("for", id);
    label.classList.add("to-do-texto");

    // Adicionar elementos ao li
    button.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(button);

    // Adicionar li à lista
    ul.appendChild(li);

    // Limpar campo de nova tarefa
    input.value = "";

    // Atualizar contador
    atualizarContador();

    // Adicionar eventos
    button.addEventListener("click", function() {
      if (window.confirm("Tem certeza que deseja excluir?")) {
        removerTarefa(li);
      }
    });

    // Salvar tarefas
    salvarTarefas();

    // Adicionar eventListener no checkbox
    checkbox.addEventListener("change", function() {
      salvarTarefas();
    });
  }

  // Função para remover tarefa
  function removerTarefa(li) {
    // Remover evento de click antes de remover o elemento
    button.removeEventListener("click", function() {
      removerTarefa(li);
    });

    // Remover elemento da lista
    ul.removeChild(li);

    salvarTarefas();

    // Atualizar contador
    atualizarContador();
  }

  // Função para atualizar contador
  function atualizarContador() {
    // Obter o número de elementos li
    var numero = ul.querySelectorAll(".item-lista").length;

    // Atualizar o texto do contador
    contador.textContent = `Você possui ${numero} tarefas`;
  }

  // Função para salvar tarefas
  function salvarTarefas() {
    // Obter todos os elementos li
    let tarefas = ul.querySelectorAll(".item-lista");

    // Criar array para armazenar as tarefas
    let tarefasArray = [];

    // Percorrer cada elemento li
    for (let tarefa of tarefas) {
      // Obter o texto da tarefa
      let textoTarefa = tarefa.querySelector(".to-do-texto").textContent;

      // Obter o estado da checkbox
      let checkboxTarefa = tarefa.querySelector(".check-tarefa");
      let estaFeita = checkboxTarefa ? checkboxTarefa.checked : false;

      // Criar objeto para armazenar a tarefa
      let tarefaObj = {
        texto: textoTarefa,
        feita: estaFeita,
      };

      // Adicionar o objeto ao array
      tarefasArray.push(tarefaObj);
    }

    // Converter o array para JSON
    let tarefasJSON = JSON.stringify(tarefasArray);

    // Salvar o JSON no Local Storage
    localStorage.setItem("tarefas", tarefasJSON);
  }

  // Renderizar tarefas
  function renderizarTarefas() {
    // Obter as tarefas do Local Storage
    let tarefasJSON = localStorage.getItem("tarefas");
  
    // Se não houver tarefas, retornar
    if (!tarefasJSON) return;
  
    // Converter o JSON para array
    let tarefasArray = JSON.parse(tarefasJSON);
  
    // Limpar a lista de tarefas
    ul.innerHTML = "";
  
    // Percorrer cada tarefa no array
    tarefasArray.forEach(tarefaObj => {
      // Criar elementos li, checkbox, label e button
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      const label = document.createElement("label");
      const button = document.createElement("button");
      const span = document.createElement("span");
  
      // Configurar classes e atributos
      li.classList.add("item-lista");
      checkbox.type = "checkbox";
      checkbox.classList.add("check-tarefa");
      label.textContent = tarefaObj.texto;
  
      if (tarefaObj.feita) {
        checkbox.checked = true;
        li.classList.add("tarefa-feita");
      }
  
      button.setAttribute("class", "remover-item-lista");
      span.setAttribute("class", "material-symbols-outlined");
      span.textContent = "delete_forever";
  
      // Gerar ID único
      const id = "item" + (ul.children.length + 1);
      checkbox.id = id;
      label.setAttribute("for", id);
      label.classList.add("to-do-texto");
  
      // Adicionar elementos ao li
      button.appendChild(span);
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(button);
  
      // Adicionar evento de click ao botão de excluir
      button.addEventListener("click", function() {
        if (window.confirm("Tem certeza que deseja excluir?")) {
          removerTarefa(li);
        }
      });
  
      // Adicionar li à lista
      ul.appendChild(li);
  
      // Adicionar event listener no checkbox
      checkbox.addEventListener("change", function() {
        salvarTarefas();
      });
    });
  
    // Atualizar contador
    atualizarContador();
  }
  
  // Adicionar eventos de click
  button.addEventListener("click", adicionarTarefa);
  
  // Renderizar tarefas
  renderizarTarefas();
  