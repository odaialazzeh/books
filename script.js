const collection = [];

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

  window.location.reload();
});

const Data = JSON.parse(localStorage.getItem('collection'));
if (Data) {
  for (let i = 0; i < Data.length; i += 1) {
    const div = document.createElement('div');
    div.className = 'book';
    div.id = i;

    const h2 = document.createElement('h2');
    h2.textContent = Data[i].title;
    div.appendChild(h2);

    const h3 = document.createElement('h3');
    h3.textContent = Data[i].author;
    div.appendChild(h3);

    const remove = document.createElement('button');
    remove.id = i;

    remove.innerHTML = 'Remove';
    div.appendChild(remove);

    const list = document.querySelector('.addBook');
    list.before(div);
  }
}

const idDiv = document.getElementsByTagName('button');
const buttonPressed = (e) => {
  const elementId = e.target.id;
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
  window.location.reload();
};

for (const button of idDiv) {
  button.addEventListener('click', (buttonPressed));
}
