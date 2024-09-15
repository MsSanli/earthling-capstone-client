import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { getSingleLanguage } from '../../api/languages';

export default function ViewLanguage() {
  const [languageDetails, setLanguageDetails] = useState({});
  const router = useRouter();

  const { idKey } = router.query;

  useEffect(() => {
    if (idKey) {
      getSingleLanguage(idKey).then(setLanguageDetails);
    }
  }, [idKey]);

  if (!languageDetails.id) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h4>{languageDetails.name}</h4>
        <p>Region: {languageDetails.region}</p>
        <p>Number of Speakers: {languageDetails.number_of_speakers}</p>
        <p>Pronunciation: {languageDetails.pronunciation}</p>
        <p>Language Family: {languageDetails.language_family}</p>
        <p>Writing System: {languageDetails.writing_system}</p>
        <p>
          <Link href={`/lnguage/edit/${languageDetails.id}`} passHref>
            <Button variant="info">Edit Language</Button>
          </Link>
        </p>
        <Button variant="secondary" onClick={() => router.push('/lnguage')}>
          Back to Languages
        </Button>
      </div>
    </div>
  );
}
