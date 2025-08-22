import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import YesButton from '../components/Buttons/YesButton';
import NoButton from '../components/Buttons/NoButton';

export default function Page1() {
  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6 text-center max-w-3xl mx-auto">
        Breaking news: A cutie steals my heart - should I call her my girlfriend?😍
      </h1>
      <img src="/page1.gif" alt="Cute animation" className="w-48 h-48 rounded-xl mx-auto mb-6" />
      <div className="flex gap-4 justify-center">
        <Link to="/final">
          <YesButton>Yes😏</YesButton>
        </Link>
        <Link to="/page2">
          <NoButton>No😳</NoButton>
        </Link>
      </div>
    </PageWrapper>
  );
}
