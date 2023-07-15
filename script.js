const productList = [
  {
    id: 1,
    text: "молоко",
  },
  {
    id: 2,
    text: "хліб",
  },
  {
    id: 3,
    text: "кава",
  },
  {
    id: 4,
    text: "мед",
  },
  {
    id: 5,
    text: "виноград",
  },
];

// const renderList = (products) =>
//   products.map(({ id, text }) => `<li id=${id}>${text}</li>`).join("");

const renderList = (products) =>
  products.reduce((acc, { id, text }) => acc + `<li id=${id}>${text}</li>`, "");

const addListItems = (string) => {
  const ul = document.querySelector(".list");
  ul.insertAdjacentHTML("beforeend", string);
};
// addListItems(renderList(productList));
const result = renderList(productList);
addListItems(result);
