const form = document.getElementById("form");
const taskInput = document.getElementById("task");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", addTask);
todoList.addEventListener("click", handleClick);



function addTask(e) {
  e.preventDefault();
    const task = taskInput.value;
    if (task == '') {
      alert('Tiene que ingresar un valor');
    } else {
      const rating = parseInt(prompt("Cual es la prioridad de la tarea? (1-5):"));
      let checkRating = rating;
      console.log(checkRating);
      
      if (checkRating > 5 || checkRating < 1) {
        console.log('check success')
        alert('Tiene que ingresar una entrada valida.');
      } else {
        console.log('check failed')
        const li = document.createElement("li");
  
        li.innerHTML = `
        ${task}



        <a class="edit-btn"><i class='bx bx-edit-alt'></i></a>
        <a class="remove-btn"><i class='bx bx-trash' ></i></a>

        `;
        li.dataset.rating = rating;
        todoList.appendChild(li);
        sortTodoList();
        taskInput.value = "";
      }
      
    }

}

function handleClick(e) {
  const target = e.target;
  const parent = target.parentElement;
  if (target.classList.contains("remove-btn")) {
    parent.remove();
  }
  if (target.classList.contains("edit-btn")) {
    const task = prompt("Ingresa una nueva tarea:", parent.textContent);
    const rating = parseInt(prompt("Coloca una nueva prioridad (1-5):"));
    parent.innerHTML = `
      ${task}

        <a class="edit-btn"><i class='bx bx-edit-alt'></i></a>
        <a class="remove-btn"><i class='bx bx-trash' ></i></a>

    `;
    parent.dataset.rating = rating;
    sortTodoList();
  }
}


function sortTodoList() {
  const items = [...todoList.children];
  console.log(items);
  items.sort((a, b) => Number(b.dataset.rating) - Number(a.dataset.rating));
  items.forEach(item => todoList.appendChild(item));
}

