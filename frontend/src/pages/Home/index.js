import React, { useState } from 'react';
import BfhlForm from '@/components/BfhlForm';
import ResponseDisplay from '@/components/ResponseDisplay';
import Head from "next/head";
function Home() {
  const [response, setResponse] = useState(null);

  return (
    <><Head>
    <title>RA2111026030162</title> {/* You can also add this text in a meta tag */}
  </Head>
<div>
  <h1>BFHL Challenge</h1>
  <BfhlForm setResponse={setResponse} />
  {response && <ResponseDisplay response={response} />}
</div></>
    
  );
}

export default Home;
