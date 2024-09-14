import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../utils/context/authContext';
import { getLanguages } from '../../api/languages';
import LanguageCard from '../../components/cards/LanguageCard';

export default function LanguagesPage() {
  const [languages, setLanguages] = useState([]);
  const router = useRouter();
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();

  const getAllLanguages = () => {
    getLanguages().then(setLanguages);
  };

  useEffect(() => {
    getAllLanguages();
  }, []);

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex flex-col gap-4 mb-8">
        <Button
          onClick={() => { router.push('/lnguage/new'); }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add A Language
        </Button>
      </div>
      <div className="flex flex-wrap justify-center">
        {languages.map((language) => (
          <LanguageCard key={language.id} languageObj={language} onUpdate={getAllLanguages} />
        ))}
      </div>
    </div>
  );
}
