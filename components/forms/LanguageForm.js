import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { createLanguage, updateLanguage } from '../../api/languages';

const initialState = {
  name: '',
  region: '',
  number_of_speakers: '',
  pronunciation: '',
  language_family: '',
  writing_system: '',
};

function LanguageForm({ obj }) {
  const [formInput, setFormInput] = useState(obj || initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateLanguage(formInput).then(() => router.push('/lnguage'));
    } else {
      createLanguage(formInput).then(() => router.push('/lnguage'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="mt-5 mb-3">{obj.id ? 'Update' : 'Create'} Language</h2>

      <Form.Group className="mb-3" controlId="formLanguageName">
        <Form.Label>Language Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter language name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLanguageRegion">
        <Form.Label>Region</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter region"
          name="region"
          value={formInput.region}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formNumberOfSpeakers">
        <Form.Label>Number of Speakers</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter number of speakers"
          name="number_of_speakers"
          value={formInput.number_of_speakers}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPronunciation">
        <Form.Label>Pronunciation</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter pronunciation"
          name="pronunciation"
          value={formInput.pronunciation}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formLanguageFamily">
        <Form.Label>Language Family</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter language family"
          name="language_family"
          value={formInput.language_family}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formWritingSystem">
        <Form.Label>Writing System</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter writing system"
          name="writing_system"
          value={formInput.writing_system}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit">{obj.id ? 'Update' : 'Create'} Language</Button>
    </Form>
  );
}

LanguageForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    region: PropTypes.string,
    number_of_speakers: PropTypes.number,
    pronunciation: PropTypes.string,
    language_family: PropTypes.string,
    writing_system: PropTypes.string,
  }),
};

LanguageForm.defaultProps = {
  obj: initialState,
};

export default LanguageForm;
