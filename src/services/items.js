import Api from './api';

class ItemsService {
  constructor() {
    const baseURL = 'http://localhost:3000';
    this.api = new Api(baseURL);
  }

  async fetchItems(params = {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' },
            { id: 3, name: 'Item 3' },
            { id: 4, name: 'Item 4' },
            { id: 5, name: 'Item 5' },
            { id: 6, name: 'Item 6' },
            { id: 7, name: 'Item 7' },
            { id: 8, name: 'Item 8' },
            { id: 9, name: 'Item 9' },
            { id: 10, name: 'Item 10' },
          ].slice(0, params.count || 10)
        );
      }, 500);
    });
    // return await this.api.get('/items', params);
  }

  async fetchItemById(id) {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id, name: `Item ${id}` });
      }, 500);
    });
    // return await this.api.get(`/items/${id}`);
  }

  async createItem(data) {
    return await this.api.post('/items', data);
  }

  async updateItem(id, data) {
    return await this.api.put(`/items/${id}`, data);
  }

  async deleteItem(id) {
    return await this.api.del(`/items/${id}`);
  }
}

export default ItemsService;
