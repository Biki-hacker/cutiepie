import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import ShuffleCups from '../components/ShuffleCups';

export default function Page3() {
  const navigate = useNavigate();

  const handleResult = (result) => {
    if (result === 'Yes') {
      navigate('/final');
    } else if (result === 'No') {
      navigate('/page4');
    }
  };

  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-8 text-center">
        If love is a game, let's see if you can win 🎲💘
      </h1>
      
      {/* Shuffle Cups Game */}
      <div className="w-full max-w-md mx-auto">
        <ShuffleCups onResult={handleResult} />
      </div>
    </PageWrapper>
  );
}
