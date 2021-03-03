let timer = () => {
  let now = new Date();
  document.getElementById('timer').innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};