import { IRepo } from "./modules/githubResponse";
import { getRepos } from "./services/reposervice";

let repos: IRepo[] = [];

let reposButton = document.getElementById("toRepositoriesClick") as HTMLButtonElement;

const repoDiv = document.createElement("div") as HTMLDivElement;

export const clickPortfolio = async ()=>{
    reposButton.addEventListener("click", ()=>{ 
    try{
    repos = await getRepos(reposButton);
        if (repos.length > 0){
        createHtml(repos, repoDiv);

    } else{
        displayNoResult(repoDiv);
    }
    } catch{
        displayNoResult(repoDiv);        
    }
 }
};

const nameOnRepo = document.createElement("h3") as HTMLHeadingElement;
const pageUrl = document.createElement("img") as HTMLImageElement;

      export const createHtml = (repos: IRepo[], repoDiv: HTMLDivElement) => {
        for (let i = 0; i < repos.length; i++)
      
        repoDiv.classList.add("repoDivStyling");
        nameOnRepo.innerHTML = repos[i].name;
        pageUrl.innerHTML = repos[i].html_url;
      
        repoDiv.appendChild(nameOnRepo);
        repoDiv.appendChild(pageUrl);
      
        document.appendChild(repoDiv);
      };
      
export function displayNoResult (repoDiv: HTMLDivElement){
    let noMessage = document.createElement("p");
    noMessage.innerHTML = "Ett fel uppstod!";
    repoDiv.appendChild(noMessage);
}