/* add new book */

const add = document.getElementById('add');
add.addEventListener('click', () => {
  let existingEntries = JSON.parse(localStorage.getItem('collection'));
  if (existingEntries == null) existingEntries = [];
  const entryTitle = document.getElementById('title').value;
  const entryOwner = document.getElementById('author').value;
  const book = {
    title: entryTitle,
    author: entryOwner,
  };
  localStorage.setItem('book', JSON.stringify(book));
  existingEntries.push(book);
  localStorage.setItem('collection', JSON.stringify(existingEntries));
  document.getElementById('form').reset();
  window.location.reload();
});

/* show books */

const Data = JSON.parse(localStorage.getItem('collection'));
if (Data) {
  const container = document.getElementById('container');
  for (let i = 0; i < Data.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'book';
    div.id = i;
    container.appendChild(div);

    const div1 = document.createElement('div');
    div.appendChild(div1);
    div1.className = 'div1';

    const h2 = document.createElement('h3');
    h2.textContent = `"${Data[i].title}" by`;
    div1.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.textContent = Data[i].author;
    div1.appendChild(h3);

    const div2 = document.createElement('div');
    div.appendChild(div2);
    div2.className = 'div2';

    const remove = document.createElement('button');
    remove.id = i;
    remove.innerHTML = 'Remove';
    div2.appendChild(remove);

    const list = document.querySelector('.addBook');
    list.before(container);
  }
}

/* remove books */

const idDiv = document.getElementsByTagName('button');
const buttonPressed = (e) => {
  const elementId = e.target.id;
  document.getElementById(elementId).style.display = 'none';
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
};

for (const button of idDiv) {
  button.addEventListener('click', (buttonPressed));
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
