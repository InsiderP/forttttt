import React, { useState } from 'react';
import BfhlForm from '@/components/BfhlForm';
import ResponseDisplay from '@/components/ResponseDisplay';

function Home() {
  const [response, setResponse] = useState(null);

  return (
    <div>
      <h1>BFHL Challenge</h1>
      <BfhlForm setResponse={setResponse} />
      {response && <ResponseDisplay response={response} />}
    </div>
  );
}

export default Home;
