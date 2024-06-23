export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const GET_MOVIE_LIST_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const randomIntFromInterval = (min, max) =>{ // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWJkZGNmOTg4NThiOTVjMmM0YTAzY2U2MjAzOWI5MSIsIm5iZiI6MTcxOTE0MzcwMC41NzEyNzIsInN1YiI6IjY2NzgwYzQyZGIyZDgyMDE5NGYyNGY2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9qXIwlrlo3XP_VlS5Bs4vKKr3Kvz_hy_YsoP59wvb2Q'
    }
  };