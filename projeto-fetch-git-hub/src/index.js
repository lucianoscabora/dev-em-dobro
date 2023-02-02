import { fetchUser } from "./scripts/services/user.js";
import { fetchRepos } from "./scripts/services/repositories.js";

import { user } from "./scripts/objects/user.js";
import { screen } from "./scripts/objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    if (validateEmptyInput(userName)) return;
    getUserData(userName);
})

function validateEmptyInput(userName) {
    if (userName.length === 0) {
        alert('Preencha o campo de busca com o nome do usuário do github');
        return true;
    }
}

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        if (validateEmptyInput(userName)) return;
        getUserData(userName);
    }
})


async function getUserData(userName) {

    const userResponse = await fetchUser(userName)
    console.log(userResponse);

    if(userResponse.message === 'Not Found') {
        screen.renderNotFound()
        return;
    }

    const repositoriesResponse = await fetchRepos(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)

    screen.renderUser(user)
}


