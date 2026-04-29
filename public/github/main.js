github.getGithubData("Cimew08").then((data) => {
  document.getElementById("avatar").src = data.avatar;
  document.getElementById("under_content").innerHTML = data.bio;
  const box = document.getElementById("projectBox");
  document.getElementById("under_text").innerHTML =
    `<h1>Hi! I'm ${data.user.name}</h1>`;

  data.repo.forEach((repo) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div>${repo.name}
      <a href="${repo.html_url}" target="_blank" style="color:white;">View Repo</a></div>
      <i class="fa-solid fa-computer"></i>
    `;

    box.appendChild(card);
  });

  if (!data.repo || data.repo.length === 0) {
    box.innerHTML += `
    <div style="
      grid-column: span 4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 150px;
      font-size: 18px;
      font-weight: 600;
    ">
    Repo is not found
    <i class="fa-solid fa-circle-exclamation"></i>
    </div>
  `;
    return;
  }
});
