import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getLanguages = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleLanguage = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateLanguage = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteLanguage = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/languages/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getLanguages,
  getSingleLanguage,
  createLanguage,
  updateLanguage,
  deleteLanguage,
};
