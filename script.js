class Library {
  add() {
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
  }

  show() {
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
  }

  remove() {
    const Data = JSON.parse(localStorage.getItem('collection'));
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
  }
}

const add = document.getElementById('add');

const book = new Library();

add.addEventListener('click', () => {
  book.add();
});

book.show();
book.remove();
