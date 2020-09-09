const itemList = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((resp) => resp.json())
  .then((items) => {
    document.getElementById("items").innerHTML = items
      .map((item) => `<li>${item.title}</li>`)
      .join("")
    console.log(items)
    return items
  })
