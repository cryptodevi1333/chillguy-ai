import React from 'react';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Chill Guy AI</title>
        <meta name="description" content="A chill AI chatbot experience" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Chill Guy AI</h1>
      </main>
    </div>
  );
};

export default Home;

