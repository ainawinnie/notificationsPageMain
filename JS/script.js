const counter = document.getElementById('counter');
const readAll = document.getElementById('read-all');
const notifications = document.querySelectorAll('.notification');
const unread = document.querySelectorAll('.new');

initApp();


function initApp() {
    counter.innerHTML = unread.length;
}

readAll.addEventListener('click', function() {
    notifications.forEach(element => {
        element.classList.remove('new');
        counter.innerHTML = '0'
    })
})

console.log(unread.length)




