const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const text = prompt('Type the text of the task')
  if (!text) return
  
  const check = document.createElement('input')
  const li = document.createElement('li')
  const span = document.createElement('span')
  const del = document.createElement('button')
  const id = 'id' + count()
  
  li.id = 'item' + id
  check.id = 'check' + id
  span.id = 'span' + id

  del.innerHTML = '-'
  
  check.type = 'checkbox'
  check.classList.add('todo-checkbox')

  check.addEventListener('change',function(){changeUnchekedCountSpan(this,document.getElementById('span' + id))})
  del.addEventListener('click',()=>{
    decCount()
    if (!document.getElementById('check' + id).checked)  decUnchecedCount()
    list.removeChild(document.getElementById('item' + id))
  })

  span.appendChild(document.createTextNode(text))  
  li.appendChild(check)
  li.appendChild(span)
  li.appendChild(del)
  list.appendChild(li)

  incCount()
  incUnchecedCount()
}

function incCount(){
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) + 1
}

function incUnchecedCount() {
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) + 1
}

function decCount(){
  itemCountSpan.innerHTML = Number(itemCountSpan.innerHTML) - 1
}

function decUnchecedCount() {
  uncheckedCountSpan.innerHTML = Number(uncheckedCountSpan.innerHTML) - 1
}

function changeUnchekedCountSpan(chk, lbl) {
  if (chk.checked === true) {
    lbl.style.textDecoration = 'line-through'
    decUnchecedCount()
  } else {
    lbl.style.textDecoration = 'none'
    incUnchecedCount()
  }
}

const count = (function() {
  var count = 0;

  return ()=>{
    return count += 1;
  }
})()