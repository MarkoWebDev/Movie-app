const API_KEY = process.env.REACT_APP_API_KEY;


export const movieURLAddress: any = {
  AnimationMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
  TopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1=region=HR`,
 
};
