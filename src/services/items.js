class ItemsService {
  constructor() {}

  fetchItems() {
    const items = localStorage.getItem('items');
    return items ? JSON.parse(items) : [];
  }

  updateItems(newItems) {
    localStorage.setItem('items', JSON.stringify(newItems));
  }
}

export default ItemsService;
