import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import YesButton from '../components/Buttons/YesButton';
import NoButton from '../components/Buttons/NoButton';

export default function Page2() {
  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-2">
        Plzzz Senorita....! 🥺
      </h1>
      <p className="text-black mb-6 text-center">As a developer, I guess I've already developed feelings for you… maybe you can install them in your heart? 💕</p>
      <img src="/page2.gif" alt="Cute animation" className="w-48 h-48 rounded-xl mx-auto mb-6" />
      <div className="flex gap-4 justify-center">
        <Link to="/final">
          <YesButton>Okay..</YesButton>
        </Link>
        <Link to="/page3">
          <NoButton>No!</NoButton>
        </Link>
      </div>
    </PageWrapper>
  );
}
