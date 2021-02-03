//document.getElementById()
document.getElementById('task-title').style.background = '#333'
document.getElementById('task-title').style.color = '#fff'
// document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';

console.log('hello');

document.querySelector('li').style.color = 'red'

let items = document.getElementsByClassName('collection-item');
console.log(items)
items[3].style.color = 'blue'