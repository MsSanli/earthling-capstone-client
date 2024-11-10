// import React from 'react';
// import Image from 'next/image';
// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

// function Home() {
//   // eslint-disable-next-line no-unused-vars
//   const { user } = useAuth();

//   return (
//     <div
//       className="text-center d-flex flex-column justify-content-center align-content-center"
//       style={{
//         height: '90vh',
//         padding: '30px',
//         maxWidth: '400px',
//         margin: '0 auto',
//       }}
//     >
//       <div
//         className="logo-container mb-4"
//         style={{
//           width: '200px', height: '250px', margin: '0 auto', position: 'relative',
//         }}
//       >
//         <Image
//           src="/img/movingearth.gif"
//           alt="Earthling Animated Logo"
//           width={400}
//           height={500}
//           objectFit="contain"
//           priority
//         />
//       </div>
//       <p>Click the button below to logout!</p>
//       <Button variant="danger" type="button" size="md" className="copy-btn" onClick={signOut}>
//         Sign Out
//       </Button>
//     </div>
//   );
// }

// export default Home;

import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const { user } = useAuth();

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '100vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <div
        className="logo-container mb-4"
        style={{
          width: '400px',
          height: '500px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <Image
          src="/img/movingearth.gif"
          alt="Earthling Animated Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="sm" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Home;
