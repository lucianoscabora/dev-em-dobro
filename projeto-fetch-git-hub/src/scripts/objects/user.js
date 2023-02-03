const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    watchers: '',
    language: '',
    stargazers_count: '',
    forks_count: '',
    setInfo(gitHubUser) {
        this.avatarUrl = gitHubUser.avatar_url,
        this.name = gitHubUser.name,
        this.bio = gitHubUser.bio,
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories) {
        this.repositories = repositories;
        this.language = repositories;
        this.watchers = repositories;
        this.forks_count = repositories;
        this.stargazers_count = repositories;

    }
}

export { user }

/* console.log(eventResponse[0].repo.name);
console.log(eventResponse[0].payload.commits[0].message) */