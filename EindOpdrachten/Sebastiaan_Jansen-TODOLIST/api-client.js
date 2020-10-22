const apiUrl = `https://jsonbox.io/box_e0a06470d8000c0b4625`;
async function getToDoData() {
    try {
        const res = await fetch(apiUrl);
        return res.json();
    } catch (error) {
        console.log(`Something went wrong: ${error}`);
    }
}
async function postTodoData(input) {
    const data = {description: input, done: true};
    await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
          "Content-Type": "application/json",
      },
    });
    return updateData();
}
async function deleteTodoData(id) {
    const deleteUrl = apiUrl + "/" + id;
    await fetch(deleteUrl, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
    });
    return updateData();
}