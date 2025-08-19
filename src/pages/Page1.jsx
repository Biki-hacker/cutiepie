import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/Layout/PageWrapper';
import YesButton from '../components/Buttons/YesButton';
import NoButton from '../components/Buttons/NoButton';

export default function Page1() {
  return (
    <PageWrapper>
      <h1 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
        Will you be my girlfriend? 💕
      </h1>
      <div className="w-48 h-48 bg-gray-200 rounded-xl mx-auto mb-6" />
      <div className="flex gap-4 justify-center">
        <Link to="/final">
          <YesButton>Yes</YesButton>
        </Link>
        <Link to="/page2">
          <NoButton>No</NoButton>
        </Link>
      </div>
    </PageWrapper>
  );
}
