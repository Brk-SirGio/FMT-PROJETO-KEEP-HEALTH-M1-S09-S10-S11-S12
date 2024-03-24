function adicionarTarefa() {
    // Pega o texto do input
    const textoTarefa = document.getElementById("input").value;
  
    // Cria um objeto para a tarefa
    const tarefa = {
      texto: textoTarefa,
      completada: false,
    };
  
    // Salva a tarefa no localStorage
    salvarTarefas([tarefa]);
  
    // Renderiza a nova tarefa na tela
    renderizarTarefa(tarefa);
  
    // Limpa o campo de input
    document.getElementById("input").value = "";
  }

  
  function renderizarTarefa(tarefa) {
    // Cria um elemento li para a tarefa
    const li = document.createElement("li");
  
    // Cria um checkbox para a tarefa
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", function () {
      tarefa.completada = !tarefa.completada;
      salvarTarefas();
    });
  
    // Cria um botão para excluir a tarefa
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.addEventListener("click", function () {
      excluirTarefa(tarefa);
    });
  
    // Adiciona o texto da tarefa ao li
    li.textContent = tarefa.texto;
  
    // Adiciona o checkbox e o botão de excluir ao li
    li.appendChild(checkbox);
    li.appendChild(botaoExcluir);
  
    // Se a tarefa estiver completada, marca o checkbox
    if (tarefa.completada) {
      checkbox.checked = true;
    }
  
    // Adiciona o li à lista de tarefas
    document.getElementById("lista-de-tarefas").appendChild(li);
  }

  function salvarTarefas(tarefas) {
    // Converte as tarefas para JSON
    const tarefasJSON = JSON.stringify(tarefas);
  
    // Salva as tarefas no localStorage
    localStorage.setItem("tarefas", tarefasJSON);
  }

  function carregarTarefas() {
    // Pega as tarefas do localStorage
    const tarefasJSON = localStorage.getItem("tarefas");
  
    // Se as tarefas não existirem, cria um array vazio
    if (!tarefasJSON) {
      return [];
    }
  
    // Converte as tarefas de JSON para objetos
    const tarefas = JSON.parse(tarefasJSON);
  
    // Renderiza as tarefas na tela
    tarefas.forEach(renderizarTarefa);
  }

  function excluirTarefa(tarefa) {
    // Pega todas as tarefas do localStorage
    const tarefas = carregarTarefas();
  
    // Filtra as tarefas para remover a tarefa que queremos excluir
    const tarefasFiltradas = tarefas.filter((t) => t !== tarefa);
  
    // Salva as tarefas filtradas no localStorage
    salvarTarefas(tarefasFiltradas);
  
    // Remove a tarefa da tela
    const li = document.querySelector(`li[textContent="${tarefa.texto}"]`);
    li.parentNode.removeChild(li);
  }
  