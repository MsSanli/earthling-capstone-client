import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET all tags
const getTags = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET a single tag
const getSingleTag = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tags/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE a new tag
const createTag = (tag) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tag),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE a tag
const updateTag = (tag) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tags/${tag.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tag),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE a tag
const deleteTag = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tags/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag,
};
