
// let url = 'https://api.github.com/repos/Maurikzio/cursor-homework-mauricio/commits';
// const url = 'https://reqres.in/api/users/';

const url = 'https://reqres.in/api/users/?page=1&per_page=3';

//pure PROMISE syntax
const promise = fetch(url)
    .then(response => response.json())
    // .then(header => console.log(header.total_pages))
    // .then(users => users)

function getAllusers(page=1){
    const url = `https://reqres.in/api/users/?page=${page}&per_page=3`;
    return fetch(url)
        .then(response => response.json())
        // .then(users => users.data);
}

function createUserCard(data){
    const card = document.createElement('li');
    const image = document.createElement('img');
    const description = document.createElement('p');

    image.src = data.avatar;
    image.setAttribute('class', 'avatar');
    description.textContent = `${data.first_name} ${data.last_name}`;
    description.setAttribute('class', 'description');
    
    card.setAttribute('class', 'card');
    card.appendChild(image);
    card.appendChild(description);

    return card;
}

async function render(usersData){
    const userList = document.getElementById('users-list');
    const info = await usersData;
    total_pages = info.total_pages;
    userList.innerHTML = '';
    info.data.forEach(user => {
        userList.appendChild(createUserCard(user));
    })
}

render(getAllusers());



