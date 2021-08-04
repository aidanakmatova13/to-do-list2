// localStorage.setItem('name','Aidana')
// JSON.srtingify() - берет массив как она есть и превращает в строку, обьязательно в строку преобразовать
// JSON.parse() - из строки делает массив

// let names = ['Misha', "Dasha", 'Eva']
//
// let array = JSON.parse(localStorage.getItem('name')) // name - название ключа
// console.log(array)


const textInput = document.querySelector('.text-input')
const addBtn = document.querySelector('.add-btn')
const list = document.querySelector('.list')
const clearBtn = document.querySelector('.clear-btn')


function view() {
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    let allList = ''
    todos.forEach((todo)=>{
        allList += `<li class="${todo.isDone && 'line-through'}">
                    <input type="checkbox">
                    ${todo.title}
                    <button class="del-btn">Delete</button>
                    </li>`
    })
    list.innerHTML = allList
    document.querySelectorAll('.del-btn').forEach((btn, idx) =>{
        btn.addEventListener('click', () =>{
            let todos = JSON.parse(localStorage.getItem('todos')) || []
            todos = todos.filter((el, indexLi) => indexLi !== idx) //оставляет те что подходят по условию
            localStorage.setItem('todos', JSON.stringify(todos))
            view()
        })
    })
}
view()

addBtn.addEventListener('click',()=>{
    if (textInput.value.trim()){
    let todos = JSON.parse(localStorage.getItem('todos')) || []
    todos = [...todos, {title: textInput.value, isDone:false}]
    localStorage.setItem('todos', JSON.stringify(todos))
    textInput.value = ""
    view()
    }
})

clearBtn.addEventListener('click',()=>{
    localStorage.clear()
    textInput.value = ""
    view()
})