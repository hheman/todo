class Api {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return response.json();
  }

  handleError(error) {
    console.error('API call failed. ', error);
    throw error;
  }

  async get(url, params = {}) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `${this.baseURL}${url}${queryString && '?'}${queryString}`,
        {
          method: 'GET',
          headers: this.defaultHeaders,
        }
      );
      return await this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async post(url, data) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'POST',
        headers: this.defaultHeaders,
        body: JSON.stringify(data),
      });
      return await this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async put(url, data) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'PUT',
        headers: this.defaultHeaders,
        body: JSON.stringify(data),
      });
      return await this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }

  async del(url) {
    try {
      const response = await fetch(`${this.baseURL}${url}`, {
        method: 'DELETE',
        headers: this.defaultHeaders,
      });
      return await this.handleResponse(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}

export default Api;
