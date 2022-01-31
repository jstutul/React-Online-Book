// use local storage as your db for now
const addToDb = (id) => {
  const db = getDb();
  let book_shop = {};
  if (!db) {
    book_shop[id] = 1;
  } else {
    book_shop = JSON.parse(db);
    if (book_shop[id]) {
      const newCount = book_shop[id] + 1;
      book_shop[id] = newCount;
    } else {
      book_shop[id] = 1;
    }
  }
  updateDb(book_shop);
  console.log(book_shop);
};
const updateDb = (cart) => {
  localStorage.setItem("book_shop", JSON.stringify(cart));
};
const removeFromDb = (id) => {
  const db = getDb();
  if (!db) {
    console.log("Do Nothing");
  } else {
    const book_shop = JSON.parse(db);
    delete book_shop[id];
    updateDb(book_shop);
  }
};
const getDb = () => localStorage.getItem("book_shop");

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};

const clearTheCart = () => {
  localStorage.removeItem("book_shop");
};

export { addToDb, updateDb, getDb, getStoredCart, clearTheCart, removeFromDb };
