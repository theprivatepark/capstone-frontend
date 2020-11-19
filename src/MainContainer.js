import React from 'react';
import HomePage from './HomePage';
import Container from '@material-ui/core/Container';

export default function MainContainer() {
  return (
    <div>
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </div>
  );
}
