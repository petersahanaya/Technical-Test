const lines = document.querySelector(".lines")
const sidelines = document.querySelector(".side-lines")
const sidebar =  document.querySelector(".sidebar");

lines.addEventListener("click", e => {
    e.target.classList.toggle('active-toggle')
    lines.classList.add('active-toggle')
    sidebar.classList.toggle('fade-in')
})

sidelines.addEventListener("click", e => {
    e.target.classList.remove('active-toggle')
    lines.classList.remove('active-toggle')
    sidebar.classList.remove('fade-in')
})


