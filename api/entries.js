import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleEntry = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries`, {
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

const updateEntry = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${payload.id}`, {
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

const deleteEntry = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const getEntriesByLanguage = (languageId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/entries?Lnguage=${languageId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getEntries,
  getSingleEntry,
  createEntry,
  updateEntry,
  deleteEntry,
  getEntriesByLanguage,
};
