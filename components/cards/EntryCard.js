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
    <Card className="w-72 m-2">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{entryObj.ipa_text}</h2>
        <p className="text-sm mb-1"><strong>Meaning:</strong> {entryObj.meaning}</p>
        <p className="text-sm mb-1"><strong>Subject:</strong> {entryObj.subject.name}</p>
        <p className="text-sm mb-1"><strong>Date:</strong> {new Date(entryObj.date).toLocaleDateString()}</p>
        <p className="text-sm mb-1"><strong>Notes:</strong> {entryObj.notes}</p>
        <p className="text-sm mb-3"><strong>Tags:</strong> {entryObj.tag.map((t) => t.name).join(', ')}</p>
        <div className="flex justify-between">
          <Link href={`/entries/${entryObj.id}`} passHref>
            <Button variant="outline" className="mr-2">View</Button>
          </Link>
          <Link href={`/entries/edit/${entryObj.id}`} passHref>
            <Button variant="outline" className="mr-2">Edit</Button>
          </Link>
          <Button variant="destructive" onClick={deleteThisEntry}>
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
};

EntryCard.propTypes = {
  entryObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    subject: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    date: PropTypes.string.isRequired,
    ipa_text: PropTypes.string.isRequired,
    meaning: PropTypes.string.isRequired,
    notes: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default EntryCard;
