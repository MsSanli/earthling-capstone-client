import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { getEntriesByLanguage } from '../../../api/entries';
import EntryCard from '../../../components/cards/EntryCard';

export default function LnguageEntriesPage() {
  const [entries, setEntries] = useState([]);
  const [languageName, setLanguageName] = useState('');
  const router = useRouter();
  const { idKey } = router.query;

  const getLnguageEntries = () => {
    if (idKey) {
      getEntriesByLanguage(idKey).then((data) => {
        setEntries(data.entries);
        setLanguageName(data.languageName);
      });
    }
  };

  useEffect(() => {
    getEntriesByLanguage();
  }, [idKey]);

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl mb-4">Entries for {languageName}</h1>
      <div className="flex flex-col gap-4 mb-8">
        <Button
          onClick={() => { router.push(`/entries/new?languageId=${idKey}`); }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Entry
        </Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {entries.map((entry) => (
          <EntryCard key={entry.id} entryObj={entry} onUpdate={getLnguageEntries} />
        ))}
      </div>
      <Button
        variant="secondary"
        onClick={() => router.push('/lnguage')}
        className="mt-4"
      >
        Back to Languages
      </Button>
    </div>
  );
}
