import { newBook } from "./modules/add.js";
import { remove } from "./modules/remove.js";
import { show } from "./modules/show.js";
const add = document.getElementById("add");
add.addEventListener("click", () => {
  newBook();
});

show();

remove();
