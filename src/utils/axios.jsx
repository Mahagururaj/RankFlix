import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YWQ3ZGU3NzQ1YzVmYjI3OWQzOWMxZjE2NjMwYmQ4NiIsIm5iZiI6MTcyNTMyNzY3NC4yMjAxOTksInN1YiI6IjY2ZDY2MTRiZWE1MzkwM2ViZDAyMmMwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MX0Fzteu6xbqw9y1uf8aXzBQpsKehPMou66dtM7akfg",
  },
});

export default instance;
