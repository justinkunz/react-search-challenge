import React from 'react';
import Helmet from 'react-helmet';

export default function Title({ title = 'Match | Meet Someone New' }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
