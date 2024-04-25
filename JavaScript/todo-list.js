const inputTitle = document.getElementById('title');
const inputDate = document.getElementById('date');
const inputPriority = document.getElementById('priority');
const add = document.getElementById('add');
const theme = document.getElementById('theme');

const updateApp = () => {
    const list = JSON.parse(localStorage.getItem('list')) || [];

    list.forEach(item => {
        const {title, date, priority, index} = item;
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${title}</span>
        <span>${date}</span>
        <span>${priority}</span>
        <button id="${index}" class="done">Done</button>
        `;
        const ul = document.getElementById('list');
        ul.appendChild(li);
        const itens = document.querySelectorAll('.done')
        itens.forEach(item => {
            item.addEventListener('click', () => removeItem(item.id));
        })
    }); 
}

const addItem = () => {
    const list = JSON.parse(localStorage.getItem('list')) || [];
    let index = list.length;
    let item = {
        title: inputTitle.value,
        date: inputDate.value,
        priority: inputPriority.value,
        index: index,
    };
    list.push(item);
    localStorage.setItem('list', JSON.stringify(list));
    updateApp();
    refreshPage();
};

const refreshPage = () => {
    location.reload()
}

const removeItem = (index) => {
    console.log(`Aqui esta o index desse item ${index}`)
    const list = JSON.parse(localStorage.getItem('list')) || [];
    const newList = list.filter(item => item.index != index);
    localStorage.setItem('list', JSON.stringify(newList));
    updateApp();
    refreshPage();
}

const handleTheme = () => {
    const body = document.querySelector('body');
    const wrapper = document.querySelectorAll('.wrapper');
    if (theme.innerText === 'Light Mode') {
        theme.innerText = 'Dark Mode';
        body.style.backgroundColor = 'rgba(255, 255, 255, 0.747)';
        body.style.color = 'rgba(11, 0, 61, 0.774)';
        wrapper.forEach(item => {
            item.style.backgroundColor = 'rgba(0, 65, 185, 0.555)';
        });
    } else {
        theme.innerText = 'Light Mode';
        body.style.backgroundColor = 'rgb(87, 87, 87)';
        body.style.color = 'white';
        wrapper.forEach(item => {
            item.style.backgroundColor = 'grey';
        });
    }

}

add.addEventListener('click', () => addItem());
window.addEventListener('load', () => updateApp());
theme.addEventListener('click', () => handleTheme());