import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleEntry } from '../../../api/entries';
import EntryForm from '../../../components/forms/EntryForm';

export default function EditEntry() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { idKey } = router.query;

  useEffect(() => {
    if (idKey) {
      getSingleEntry(idKey).then(setEditItem);
    }
  }, [idKey]);

  return (
    <div className="container">
      <h1>Edit Entry</h1>
      {editItem.id && <EntryForm obj={editItem} />}
    </div>
  );
}
