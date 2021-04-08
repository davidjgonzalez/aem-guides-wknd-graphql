import React from 'react';

import Adventures from './Adventures';
import AEMPage from './AEMPage';

/***
 * Displays a grid of current adventures
 */
function Home() {
  return (
    <div className="Home">
      <AEMPage
        pagePath='/content/wknd-spa/home' />
      <Adventures />
    </div>
  );
}

export default Home;
