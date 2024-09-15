// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { createEntry, updateEntry } from '../../api/entries';
// import { getSubjects } from '../../api/subjects';
// import { getTags } from '../../api/tags';

// const initialState = {
//   subject_id: '',
//   date: '',
//   ipa_text: '',
//   meaning: '',
//   notes: '',
//   tag_ids: [],
// };

// function EntryForm({ obj, user }) {
//   const [formInput, setFormInput] = useState(initialState);
//   const [subjects, setSubjects] = useState([]);
//   const [tags, setTags] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     getSubjects().then(setSubjects);
//     getTags().then(setTags);
//     if (obj.id) setFormInput(obj);
//   }, [obj]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormInput((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleTagChange = (e) => {
//     const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
//     setFormInput((prevState) => ({
//       ...prevState,
//       tag_ids: selectedTags,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = { ...formInput, user_id: user.id };
//     if (obj.id) {
//       updateEntry(payload).then(() => router.push('/entries'));
//     } else {
//       createEntry(payload).then(() => router.push('/entries'));
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <h2 className="mt-5 mb-3">{obj.id ? 'Update' : 'Create'} Entry</h2>
//       <Form.Group className="mb-3">
//         <Form.Label>Subject</Form.Label>
//         <Form.Select
//           name="subject_id"
//           onChange={handleChange}
//           value={formInput.subject_id}
//           required
//         >
//           <option value="">Select a subject</option>
//           {subjects.map((subject) => (
//             <option key={subject.id} value={subject.id}>
//               {subject.name}
//             </option>
//           ))}
//         </Form.Select>
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Date</Form.Label>
//         <Form.Control
//           type="datetime-local"
//           name="date"
//           value={formInput.date}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>IPA Text</Form.Label>
//         <Form.Control
//           type="text"
//           name="ipa_text"
//           value={formInput.ipa_text}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Meaning</Form.Label>
//         <Form.Control
//           type="text"
//           name="meaning"
//           value={formInput.meaning}
//           onChange={handleChange}
//           required
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Notes</Form.Label>
//         <Form.Control
//           as="textarea"
//           name="notes"
//           value={formInput.notes}
//           onChange={handleChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-3">
//         <Form.Label>Tags</Form.Label>
//         <Form.Select
//           multiple
//           name="tag_ids"
//           onChange={handleTagChange}
//           value={formInput.tag_ids}
//         >
//           {tags.map((tag) => (
//             <option key={tag.id} value={tag.id}>
//               {tag.name}
//             </option>
//           ))}
//         </Form.Select>
//       </Form.Group>
//       <Button type="submit">{obj.id ? 'Update' : 'Create'} Entry</Button>
//     </Form>
//   );
// }

// EntryForm.propTypes = {
//   obj: PropTypes.shape({
//     id: PropTypes.number,
//     subject_id: PropTypes.number,
//     date: PropTypes.string,
//     ipa_text: PropTypes.string,
//     meaning: PropTypes.string,
//     notes: PropTypes.string,
//     tag_ids: PropTypes.arrayOf(PropTypes.number),
//   }),
//   user: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }).isRequired,
// };

// EntryForm.defaultProps = {
//   obj: initialState,
// };

// export default EntryForm;

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { createEntry, updateEntry } from '../../api/entries';
import { getSubjects } from '../../api/subjects';
import { getTags } from '../../api/tags';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  subject_id: '',
  date: '',
  ipa_text: '',
  meaning: '',
  notes: '',
  tag_ids: [],
};

function EntryForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [subjects, setSubjects] = useState([]);
  const [tags, setTags] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getSubjects().then(setSubjects).catch(console.error);
    getTags().then(setTags).catch(console.error);
    if (obj.id) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTagChange = (e) => {
    const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormInput((prevState) => ({
      ...prevState,
      tag_ids: selectedTags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      console.error('User not authenticated');
      return;
    }
    const payload = { ...formInput, user_id: user.id };
    if (obj.id) {
      updateEntry(payload).then(() => router.push('/entries'));
    } else {
      createEntry(payload).then(() => router.push('/entries'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mt-5 mb-3">{obj.id ? 'Update' : 'Create'} Entry</h2>
      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Select
          name="subject_id"
          onChange={handleChange}
          value={formInput.subject_id}
          required
        >
          <option value="">Select a subject</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="datetime-local"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>IPA Text</Form.Label>
        <Form.Control
          type="text"
          name="ipa_text"
          value={formInput.ipa_text}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Meaning</Form.Label>
        <Form.Control
          type="text"
          name="meaning"
          value={formInput.meaning}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Notes</Form.Label>
        <Form.Control
          as="textarea"
          name="notes"
          value={formInput.notes}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Tags</Form.Label>
        <Form.Select
          multiple
          name="tag_ids"
          onChange={handleTagChange}
          value={formInput.tag_ids}
        >
          {tags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit">{obj.id ? 'Update' : 'Create'} Entry</Button>
    </Form>
  );
}

EntryForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    subject_id: PropTypes.number,
    date: PropTypes.string,
    ipa_text: PropTypes.string,
    meaning: PropTypes.string,
    notes: PropTypes.string,
    tag_ids: PropTypes.arrayOf(PropTypes.number),
  }),
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

EntryForm.defaultProps = {
  obj: initialState,
};

export default EntryForm;
