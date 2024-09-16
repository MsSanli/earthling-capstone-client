// // // import React from 'react';
// // // import PropTypes from 'prop-types';
// // // import Link from 'next/link';
// // // import Button from 'react-bootstrap/Button';
// // // import Card from 'react-bootstrap/Card';
// // // import { deleteLanguage } from '../../api/languages';

// // // const LanguageCard = ({ languageObj, onUpdate }) => {
// // //   const deleteThisLanguage = () => {
// // //     if (window.confirm(`Delete ${languageObj.languagename}?`)) {
// // //       deleteLanguage(languageObj.id).then(() => onUpdate());
// // //     }
// // //   };

// // //   return (
// // //     <Card className="w-72 m-2">
// // //       <div className="p-4">
// // //         <h2 className="text-2xl font-bold mb-2">{languageObj.name || languageObj.languagename || 'No name available'}</h2>
// // //         <p className="text-sm mb-1"><strong>Region:</strong> {languageObj.region}</p>
// // //         <p className="text-sm mb-1"><strong>Speakers:</strong> {languageObj.number_of_speakers}</p>
// // //         <p className="text-sm mb-1"><strong>Family:</strong> {languageObj.language_family}</p>
// // //         <p className="text-sm mb-3"><strong>Writing System:</strong> {languageObj.writing_system}</p>
// // //         <div className="flex justify-between">
// // //           <Link href={`/lnguage/${languageObj.id}`} passHref>
// // //             <Button variant="outline" className="mr-2">View</Button>
// // //           </Link>
// // //           <Link href={`/lnguage/edit/${languageObj.id}`} passHref>
// // //             <Button variant="outline" className="mr-2">Edit</Button>
// // //           </Link>
// // //           <Button variant="destructive" onClick={deleteThisLanguage}>
// // //             Delete
// // //           </Button>
// // //         </div>
// // //       </div>
// // //     </Card>
// // //   );
// // // };

// // // LanguageCard.propTypes = {
// // //   languageObj: PropTypes.shape({
// // //     id: PropTypes.number.isRequired,
// // //     name: PropTypes.string,
// // //     languagename: PropTypes.string.isRequired,
// // //     region: PropTypes.string.isRequired,
// // //     number_of_speakers: PropTypes.number.isRequired,
// // //     language_family: PropTypes.string.isRequired,
// // //     writing_system: PropTypes.string.isRequired,
// // //   }).isRequired,
// // //   onUpdate: PropTypes.func.isRequired,
// // // };

// // // export default LanguageCard;

// // import React from 'react';
// // import PropTypes from 'prop-types';
// // import Link from 'next/link';
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import { deleteLanguage } from '../../api/languages';

// // const LanguageCard = ({ languageObj, onUpdate }) => {
// //   const deleteThisLanguage = () => {
// //     if (window.confirm(`Delete ${languageObj.name}?`)) {
// //       deleteLanguage(languageObj.id).then(() => onUpdate());
// //     }
// //   };

// //   return (
// //     <Card className="w-72 m-2">
// //       <div className="p-4">
// //         <h2 className="text-2xl font-bold mb-2">{languageObj.name}</h2>
// //         <p className="text-sm mb-1"><strong>Region:</strong> {languageObj.region}</p>
// //         <p className="text-sm mb-1"><strong>Speakers:</strong> {languageObj.number_of_speakers}</p>
// //         <p className="text-sm mb-1"><strong>Family:</strong> {languageObj.language_family}</p>
// //         <p className="text-sm mb-3"><strong>Writing System:</strong> {languageObj.writing_system}</p>
// //         <div className="flex justify-between">
// //           <Link href={`/lnguage/${languageObj.id}`} passHref>
// //             <Button variant="outline" className="mr-2">View</Button>
// //           </Link>
// //           <Link href={`/lnguage/edit/${languageObj.id}`} passHref>
// //             <Button variant="outline" className="mr-2">Edit</Button>
// //           </Link>
// //           <Link href={`/entries/Lnguage/${languageObj.id}`} passHref>
// //             <Button variant="outline" className="mr-2">View Entries</Button>
// //           </Link>
// //           <Button variant="destructive" onClick={deleteThisLanguage}>
// //             Delete
// //           </Button>
// //         </div>
// //       </div>
// //     </Card>
// //   );
// // };

// // LanguageCard.propTypes = {
// //   languageObj: PropTypes.shape({
// //     id: PropTypes.number.isRequired,
// //     name: PropTypes.string.isRequired,
// //     region: PropTypes.string.isRequired,
// //     number_of_speakers: PropTypes.number.isRequired,
// //     language_family: PropTypes.string.isRequired,
// //     writing_system: PropTypes.string.isRequired,
// //   }).isRequired,
// //   onUpdate: PropTypes.func.isRequired,
// // };

// // export default LanguageCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Link from 'next/link';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { deleteLanguage } from '../../api/languages';

// const LanguageCard = ({ languageObj, onUpdate }) => {
//   const deleteThisLanguage = () => {
//     if (window.confirm(`Delete ${languageObj.name}?`)) {
//       deleteLanguage(languageObj.id).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card className="w-72 m-2">
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-2">{languageObj.name}</h2>
//         <p className="text-sm mb-1"><strong>Region:</strong> {languageObj.region}</p>
//         <p className="text-sm mb-1"><strong>Speakers:</strong> {languageObj.number_of_speakers}</p>
//         <p className="text-sm mb-1"><strong>Family:</strong> {languageObj.language_family}</p>
//         <p className="text-sm mb-3"><strong>Writing System:</strong> {languageObj.writing_system}</p>
//         <div className="flex flex-wrap justify-between">
//           <Link href={`/lnguage/${languageObj.id}`} passHref>
//             <Button variant="outline" className="mr-2 mb-2">View</Button>
//           </Link>
//           <Link href={`/lnguage/edit/${languageObj.id}`} passHref>
//             <Button variant="outline" className="mr-2 mb-2">Edit</Button>
//           </Link>
//           <Link href={`/entries/Lnguage/${languageObj.id}`} passHref>
//             <Button variant="outline" className="mr-2 mb-2">View Entries</Button>
//           </Link>
//           <Link href={`/entries/new?languageId=${languageObj.id}`} passHref>
//             <Button variant="outline" className="mr-2 mb-2">Add Entry</Button>
//           </Link>
//           <Button variant="destructive" onClick={deleteThisLanguage} className="mb-2">
//             Delete
//           </Button>
//         </div>
//       </div>
//     </Card>
//   );
// };

// LanguageCard.propTypes = {
//   languageObj: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
//     number_of_speakers: PropTypes.number.isRequired,
//     language_family: PropTypes.string.isRequired,
//     writing_system: PropTypes.string.isRequired,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default LanguageCard;

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteLanguage } from '../../api/languages';

const LanguageCard = ({ languageObj, onUpdate }) => {
  const deleteThisLanguage = () => {
    if (window.confirm(`Delete ${languageObj.name}?`)) {
      deleteLanguage(languageObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="custom-card w-72 m-2">
      <Card.Body className="p-4">
        <Card.Title className="custom-card-title text-2xl mb-2">{languageObj.name}</Card.Title>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Region:</strong> {languageObj.region}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Speakers:</strong> {languageObj.number_of_speakers}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-1"><strong>Family:</strong> {languageObj.language_family}</Card.Text>
        <Card.Text className="custom-card-text text-sm mb-3"><strong>Writing System:</strong> {languageObj.writing_system}</Card.Text>
        <div className="flex flex-wrap justify-between">
          <Link href={`/lnguage/${languageObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">View</Button>
          </Link>
          <Link href={`/lnguage/edit/${languageObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">Edit</Button>
          </Link>
          <Link href={`/entries/Lnguage/${languageObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">View Entries</Button>
          </Link>
          <Link href={`/entries/new?languageId=${languageObj.id}`} passHref>
            <Button className="custom-button mr-2 mb-2">Add Entry</Button>
          </Link>
          <Button className="delete-button mb-2" onClick={deleteThisLanguage}>
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

LanguageCard.propTypes = {
  languageObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    number_of_speakers: PropTypes.number.isRequired,
    language_family: PropTypes.string.isRequired,
    writing_system: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default LanguageCard;
