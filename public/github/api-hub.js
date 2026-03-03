class Github {
  constructor() {
    this.url = "https://api.github.com/users/";
  }
  async getGithubData(username) {
    // Fetch user information (avatar, name, bio.)
    const response = await fetch(this.url + username);
    // Fetch user's repositories

    const repoRes = await fetch(this.url + username + "/repos");

    // Convert responses to JSON

    const userData = await response.json();
    const repoData = await repoRes.json();

    // Return the required data
    return {
      avatar: userData.avatar_url,
      repo: repoData,
      user: userData,
      bio: userData.bio,
    };
  }
}
const github = new Github();
