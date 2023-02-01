import { fetchUser } from "./scripts/services/user.js";
import { fetchRepos } from "./scripts/services/repositories.js";

import { user } from "./scripts/objects/user.js";
import { screen } from "./scripts/objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.which || e.keyCode;
    const isEnterKeyPressed = key === 13;

    if (isEnterKeyPressed) {
        getUserData(userName);
    }
})


async function getUserData(userName) {

    const userResponse = await fetchUser(userName)
    const repositoriesResponse = await fetchRepos(userName)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    console.log(user);
    screen.renderUser(user);
}


/* function getUserRepositories(userName) {
    fetchRepos(userName).then(reposData => {
        let repositoriesItems = ""
        reposData.forEach(repo => {
            repositoriesItems += `<li> <a href="${repo.html_url}" target="_blank"> ${repo.name} </a></li>`
        });

        document.querySelector('.profile-data').innerHTML += 
        `
        <div class="repositories section">
        <h2>Repositories</h2>
        <ul> ${repositoriesItems} </ul>
        </div>
        `
    })
} */

