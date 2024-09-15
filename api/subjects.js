import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET all subjects
const getSubjects = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subjects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// GET a single subject
const getSingleSubject = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subjects/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE a new subject
const createSubject = (subject) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subjects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subject),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE a subject
const updateSubject = (subject) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subjects/${subject.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(subject),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE a subject
const deleteSubject = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/subjects/${id}`, {
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
  getSubjects,
  getSingleSubject,
  createSubject,
  updateSubject,
  deleteSubject,
};
