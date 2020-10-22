// // DATASTRUCTUUR
// {tasks: [
//     {id: "-LroB4tAZnuNhYcnyIYf", description: "Make todo app in JS", done: false},
//     {id: "-LroB4tAZnuNhYcnyUSJ", description: "Make pancakes", done: true },
//   ]
// }
const submitButton = document.querySelector("[type='submit']");
const listToDo = document.getElementById("listToDo");
submitButton.addEventListener('click', () => {
    const input = document.getElementById("todoTextField").value;
    postTodoData(input);
})
const fetchToDoData = async () => {
    const result = await getToDoData();
    return result;
};
const updateData = async () => {
    listToDo.innerHTML = "";
    fetchToDoData().then(data => {
        let tasks = Object.keys(data).map(key => ({
            id: data[key]._id,
            description: data[key].description,
            done: data[key].done
        }));

        tasks.forEach(task => {
            const deleteButton = document.createElement("i");
            deleteButton.classList.add(`fas`);
            deleteButton.classList.add(`fa-trash`);
            const listItemTodo = "ToDo: " + task.description + ", Done: " + task.done;
            const node = document.createElement("LI");
            const textnode = document.createTextNode(listItemTodo);
            node.appendChild(textnode);
            node.appendChild(deleteButton);
            listToDo.appendChild(node); 
            deleteButton.addEventListener ("click", function() {
                alert("deleting todo with id: " + task.id);
                deleteTodoData(task.id);
            });
        });
    });
};
updateData();