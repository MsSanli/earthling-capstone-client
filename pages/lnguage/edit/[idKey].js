import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import LanguageForm from '../../../components/forms/LanguageForm';
import { getSingleLanguage } from '../../../api/languages';

export default function EditLanguage() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { idKey } = router.query;

  useEffect(() => {
    getSingleLanguage(idKey).then(setEditItem);
  }, [idKey]);

  // TODO: pass object to form
  return (<LanguageForm obj={editItem} />);
}
