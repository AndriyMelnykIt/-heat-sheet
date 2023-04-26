import React from 'react';
import { Container } from '@mui/system';

import AppRoutes from './routes/AppRoutes';

const App = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <main>
        <AppRoutes />
      </main>
      {/* <Footer /> */}
    </Container>
  );
};

export default App;
