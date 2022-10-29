const list_items = document.querySelectorAll("li");

list_items.forEach((list_item) => {
  list_item.addEventListener("click", () => {
    if (list_item.classList.contains("list-item-non-selected")) {
      list_items.forEach((item) => {
        item.classList.remove("list-item-selected");
        item.classList.add("list-item-non-selected");
      });
      list_item.classList.remove("list-item-non-selected");
      list_item.classList.add("list-item-selected");
    } else {
      list_item.classList.remove("list-item-selected");
      list_item.classList.add("list-item-non-selected");
    }
  });
});
