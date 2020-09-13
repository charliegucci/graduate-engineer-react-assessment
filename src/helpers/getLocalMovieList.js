export default () => {
  return localStorage.getItem('MovieList')
    ? JSON.parse(localStorage.getItem('MovieList'))
    : [];
};
