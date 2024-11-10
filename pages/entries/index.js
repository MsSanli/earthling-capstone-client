import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../utils/context/authContext';
import { getEntries } from '../../api/entries';
import EntryCard from '../../components/cards/EntryCard';

export default function EntriesPage() {
  const [entries, setEntries] = useState([]);
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();

  const getAllEntries = () => {
    getEntries().then(setEntries);
  };

  useEffect(() => {
    getAllEntries();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col gap-4 mb-8">
        <Button
          onClick={() => { router.push('/entries/new'); }}
          className="delete-button font-bold py-2 px-4 rounded"
        >
          Add An Entry
        </Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entryObj={entry} onUpdate={getAllEntries} />
        ))}
      </div>
    </div>
  );
}
