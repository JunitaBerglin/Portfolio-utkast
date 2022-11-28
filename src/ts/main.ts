import axios from "axios";

axios
  .get("http//api.github.com/users/junitaberglin/repos")
  .then((response) => {
    console.log(response.data);
  });
