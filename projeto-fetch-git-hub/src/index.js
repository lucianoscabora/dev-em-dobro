document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName);
})

async function fetchUser(userName) {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json();
}

function getUserProfile(userName) {
    fetchUser(userName).then(userData => {
        // avatar_url
        // name
        // bio
        let userInfo = `<img src="${userData.avatar_url}" alt ="foto de perfil do usuario" />
        <div class="data">
            <h1>${userData.name ?? 'Não possui nome cadastrado' }</h1>
            <p>${userData.bio ?? 'Não possui bio cadastrada' }</p>
            </div>`

            document.querySelector('.profile-data').innerHTML = userInfo
    })
}

