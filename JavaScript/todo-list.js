/* <li>
<span>t will be on the page? |</span>
<span>01/05/2024</span>
<span>low</span>
<button class="done">Done</button>
</li>
*/
const inputTitle = document.getElementById('title');
const inputDate = document.getElementById('date');
const inputPriority = document.getElementById('priority');
const add = document.getElementById('add');

const updateApp = () => {
    const list = JSON.parse(localStorage.getItem('list')) || [];

    list.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${item.title}</span>
        <span>${item.date}</span>
        <span>${item.priority}</span>
        <button class="done">Done</button>
        `;
        // console.log(li);
        const ul = document.getElementById('list');
        ul.appendChild(li);
        const itens = document.querySelectorAll('.done')
        itens.forEach(item => {
            item.addEventListener('click', () => removeItem());
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
}

add.addEventListener('click', addItem);
window.addEventListener('load', updateApp());

//Ps i need to passe the index of eacth element to the onclick callback function to be able to delete the corresponding element so think about it.