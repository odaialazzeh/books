const remove = () => {
  const idDiv = document.getElementsByTagName('button');
  const buttonPressed = (e) => {
    const Data = JSON.parse(localStorage.getItem('collection'));

    const elementId = e.target.id;
    document.getElementById(elementId).style.display = 'none';
    Data.splice(elementId, 1);
    localStorage.setItem('collection', JSON.stringify(Data));
  };

  for (const button of idDiv) {
    button.addEventListener('click', buttonPressed);
  }

  const hide = document.getElementById('list');

  hide.addEventListener('click', () => {
    document.getElementById('container-list').style.display = 'block';
    document.getElementById('container').style.display = 'block';
    document.getElementById('addbook').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
  });

  window.addEventListener('load', () => {
    document.getElementById('addbook').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
  });

  const hide1 = document.getElementById('new');
  hide1.addEventListener('click', () => {
    document.getElementById('addbook').style.display = 'flex';
    document.getElementById('container-list').style.display = 'none';
    document.getElementById('container').style.display = 'none';
    document.getElementById('contact-container').style.display = 'none';
  });

  const contact = document.getElementById('contact');
  contact.addEventListener('click', () => {
    document.getElementById('contact-container').style.display = 'block';
    document.getElementById('addbook').style.display = 'none';
    document.getElementById('container-list').style.display = 'none';
    document.getElementById('container').style.display = 'none';
  });
};
/* eslint-disable */
export { remove };
