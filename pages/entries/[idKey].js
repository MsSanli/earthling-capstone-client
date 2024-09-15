import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { getSingleEntry } from '../../api/entries';

export default function ViewEntry() {
  const [entryDetails, setEntryDetails] = useState({});
  const router = useRouter();

  const { idKey } = router.query;

  useEffect(() => {
    if (idKey) {
      getSingleEntry(idKey).then(setEntryDetails);
    }
  }, [idKey]);

  if (!entryDetails.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h4>{entryDetails.ipa_text}</h4>
        <p>Meaning: {entryDetails.meaning}</p>
        <p>Subject: {entryDetails.subject?.name}</p>
        <p>Date: {new Date(entryDetails.date).toLocaleString()}</p>
        <p>Notes: {entryDetails.notes}</p>
        <p>Tags: {entryDetails.tag?.map((tag) => tag.name).join(', ')}</p>
        <p>
          <Link href={`/entries/edit/${entryDetails.id}`} passHref>
            <Button variant="info">Edit Entry</Button>
          </Link>
        </p>
        <Button variant="secondary" onClick={() => router.push('/entries')}>
          Back to Entries
        </Button>
      </div>
    </div>
  );
}
