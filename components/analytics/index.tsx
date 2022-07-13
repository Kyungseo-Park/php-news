import React from 'react';
import Umami from './Umami';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  if (isProduction) {
    return <Umami />;
  }
  return <></>;
};

export default Analytics;
