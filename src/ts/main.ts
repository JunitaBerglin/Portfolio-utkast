import axios from "axios";
import { IRepo } from "./modules/githubResponse";

let repoContainer: HTMLDivElement = document.getElementById(
  "repo-container"
) as HTMLDivElement;
repoContainer.innerHTML = "";

let repoButton = document.getElementById(
  "toRepositioriesClick"
) as HTMLButtonElement;
repoButton.addEventListener("click", () => {
  axios
    .get<IRepo>("http://api.github.com/users/junitaberglin/repos")
    .then((response) => {
      console.log(response.data);
    });

  createHtml( ? , repoContainer);
});

export const createHtml = (
  repo: IRepo,
  repoContainer: HTMLDivElement
) => {
  let repoDiv = document.createElement("div");
  let nameOnRepo = document.createElement("h3");
  let pageUrl = document.createElement("img");

  repoDiv.classList.add("repoDivStyling");
  nameOnRepo.innerHTML = repo.name;
  pageUrl.innerHTML = repo.html_url;

  repoDiv.appendChild(nameOnRepo);
  repoDiv.appendChild(pageUrl);

  repoContainer.appendChild(repoDiv);
};
