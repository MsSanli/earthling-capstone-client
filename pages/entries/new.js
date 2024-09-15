import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import EntryForm from '../../components/forms/EntryForm';
import { getSingleLanguage } from '../../api/languages';

export default function NewEntry() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const router = useRouter();
  const { languageId } = router.query;

  useEffect(() => {
    if (languageId) {
      getSingleLanguage(languageId).then(setSelectedLanguage);
    }
  }, [languageId]);

  return (
    <div className="container">
      <h1 className="mt-5 mb-3">Create New Entry</h1>
      {selectedLanguage && (
        <p>Creating entry for language: {selectedLanguage.name}</p>
      )}
      <EntryForm
        obj={{
          language_id: selectedLanguage ? selectedLanguage.id : '',
        }}
      />
    </div>
  );
}
