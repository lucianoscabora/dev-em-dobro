const screen = {
  userProfile: document.querySelector(".profile-data"),
  renderUser(user) {
    this.userProfile.innerHTML = `<div class="info">
            <img src="${user.avatarUrl}" alt ="foto de perfil do usuario" />
            <div class="data">
            <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
            <p>${user.bio ?? "Não possui bio cadastrada"}</p>
            <span>Seguidores: ${
              user.followers ?? "Não possui seguidores"
            }</span>
            <span>Seguindo: ${user.following ?? "Não segue ninguém"}</span>
            </div>
            </div>
            `;

    let repositoriesItems = "";
    user.repositories.forEach(
      (repo) =>
        (repositoriesItems += `
                <li> 
                    <a href="${repo.html_url}" target="_blank">
                    <span>${
                      repo.language ?? "N/A"
                    }<i class="fa-solid fa-laptop-code"></i></span>
                    <span>${
                      repo.stargazers_count
                    }<i class="fa-regular fa-star"></i></span>
                    <span>${
                      repo.forks_count
                    }<i class="fa-sharp fa-solid fa-code-fork"></i></span>
                    <span>${
                      repo.watchers
                    }<i class="fa-regular fa-eye"></i></span>${repo.name} </a>
                </li>
                `)
    );

    if (user.repositories.length > 0) {
      this.userProfile.innerHTML += `
                    <div class="repositories section">
                        <h2>Repositories</h2>
                        <ul>${repositoriesItems}</ul>
                    </div>
                    `;
    }


    let arr = []
    for (let i = 0; i<user.events.length; i++) {
      if (user.events[i].type === "PushEvent") {
      arr.push(user.events[i].payload?.commits?.[0].message)
      }
    }
    console.log(arr);

    let arr1 = []
    for (let i = 0; i<user.events.length; i++) {
      if (user.events[i].type === "PushEvent") {
      arr1.push(user.events?.[i].repo.name)
      }
    }
    console.log(arr1);

    let repoNames = "";
    arr.forEach(
      (evt, index) =>
        (repoNames += `
    <li>
    <span class="repo-names">
    ${evt}
    </span>
    </li>
    
      `)
    );

    let eventItems = "";
    arr1.forEach(
      (evt, index) =>
        (eventItems += `
      <li>
      <span class="repo-names">
      ${evt}
      </span>
      </li>
      
      `)
    );

    if (user.events.length > 0) {
      this.userProfile.innerHTML += `
      <h3 class="event-title">Lista de Eventos</h3>
      <div class="data-event">
      <ul>
      <div class="list-ev">${eventItems}</div>
      </ul>
      <ul>
      <div class="list-rep">${repoNames}<div>
      </ul>
      </div>
      `;
    }
  },

  renderNotFound() {
    this.userProfile.innerHTML = "<h3> Usuário não encontrado </h3>";
  },
};

export { screen };
