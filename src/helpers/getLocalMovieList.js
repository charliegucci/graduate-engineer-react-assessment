// returns localstorage value if any or returns empty array if doesnt

export default () => {
  return localStorage.getItem('MovieList')
    ? JSON.parse(localStorage.getItem('MovieList'))
    : [];
};
