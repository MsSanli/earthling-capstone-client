import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteEntry } from '../../api/entries';

const EntryCard = ({ entryObj, onUpdate }) => {
  const deleteThisEntry = () => {
    if (window.confirm('Delete this entry?')) {
      deleteEntry(entryObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="custom-card w-72 m-2">
      <Card.Body className="p-4">
        <Card.Title className="custom-card-title text-2xl mb-2">{entryObj.ipa_text}</Card.Title>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Meaning:</strong> {entryObj.meaning}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Subject:</strong> {entryObj.subject?.name}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Date:</strong> {new Date(entryObj.date).toLocaleDateString()}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-3"><strong>Notes:</strong> {entryObj.notes}</Card.Text>
        <div className="flex flex-wrap justify-between">
          <Link href={`/entries/${entryObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">View</Button>
          </Link>
          <Link href={`/entries/edit/${entryObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">Edit</Button>
          </Link>
          <Button className="delete-button mb-2" onClick={deleteThisEntry}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

EntryCard.propTypes = {
  entryObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    ipa_text: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
    subject: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    date: PropTypes.string.isRequired,
    notes: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EntryCard;
