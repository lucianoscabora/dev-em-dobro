const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {

        this.userProfile.innerHTML = `<div class="info">
        <img src="${user.avatarUrl}" alt ="foto de perfil do usuario" />
        <div class="data">
            <h1>${user.name ?? 'Não possui nome cadastrado' }</h1>
            <p>${user.bio ?? 'Não possui bio cadastrada' }</p>
            <span>Seguidores: ${user.followers ?? 'Não possui seguidores'}</span>
            <span>Seguindo: ${user.following ?? 'Não segue ninguém'}</span>
            </div>
            </div>
            `
            let repositoriesItems = ''
            user.repositories.forEach(repo => repositoriesItems +=  
                
                `
                <li> 
                    <a href="${repo.html_url}" target="_blank">
                    <span>${repo.language}</span>
                    <span>${repo.stargazers_count}</span>
                    <span>${repo.forks_count}</span>
                    <span>${repo.watchers}</span>${repo.name} </a>
                </li>
                `
                )
                if(user.repositories.length > 0) {
                    this.userProfile.innerHTML += 
                    `
                    <div class="repositories section">
                        <h2>Repositories</h2>
                        <ul>${repositoriesItems}</ul>
                    </div>
                    `
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado </h3>" 
    }
    
}

export { screen };