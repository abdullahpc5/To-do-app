document.addEventListener("DOMContentLoaded", function () {
    let inputElem = document.getElementById("inputdata");
    let clickBtn = document.querySelector(".btn");
    let todoList = document.querySelector(".todolistelement");

    const addTodo = () => {
        let pElem = document.createElement('p');
        let radioInput = document.createElement('input');
        radioInput.type = 'radio';

        let taskText = document.createElement('span');
        taskText.textContent = inputElem.value;

        pElem.appendChild(radioInput);
        pElem.appendChild(taskText);

        todoList.appendChild(pElem);
        inputElem.value = "";
    }

    clickBtn.addEventListener('click', () => {
        addTodo();
    });

    todoList.addEventListener("click", (event) => {
        let currElem = event.target;

        if (currElem.tagName === 'INPUT' && currElem.type === 'radio') {
            let taskText = currElem.nextElementSibling;

            if (currElem.checked) {
                taskText.classList.add('crossed');
            } else {
                taskText.classList.remove('crossed');
            }
        }
    });
});
