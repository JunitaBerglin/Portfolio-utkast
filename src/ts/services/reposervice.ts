import axios from "axios";
import { IRepo } from "../modules/githubResponse";

export function getRepos(reposButton:HTMLButtonElement): Promise<IRepo[]> () => {
  return axios
    .get<IRepo>("http://api.github.com/users/junitaberglin/repos")
    .then((response) => {
      console.log(response.data);
    });
};
