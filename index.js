const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");


// Обработка событий

btn.addEventListener("click", (e) => {
  const li = document.createElement("li")
  const p = document.createElement('p')
  const btnDelete = document.createElement("button");

  li.className = "li";
  p.textContent = input.value

  
  btnDelete.className = "btn"
  btnDelete.textContent = "delete"

  btnDelete.addEventListener('click', () => {
    li.remove()
  })

  li.prepend(p, btnDelete);
  result.prepend(li)
  input.value = ""
});



