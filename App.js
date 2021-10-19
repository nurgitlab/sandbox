document.onmousemove = () => {
  document.getElementsByClassName('header')[0]
    .insertAdjacentHTML(
      "beforeEnd",
      '<div>' +
      '<img ' +
      'src="https://alterozoom.com/assets/unn_logo.png" ' +
      'id="nnsuLogo"' +
      'width="80px"'+
      '>' +
      '</div>',
    );

  let nnsuLogo = document.getElementById('nnsuLogo');
  nnsuLogo.style.position = 'fixed';

  document.onmousemove = (event) => {
    nnsuLogo.style.left = `${event.clientX}px`;
    nnsuLogo.style.top = `${event.clientY}px`;
  };
};