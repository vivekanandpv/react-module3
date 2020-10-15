import React from 'react';
import AppLayout from './layout/AppLayout';
import PrimaryRoutes from './routes/PrimaryRoutes';

function App() {
  return (
    <React.Fragment>
      <AppLayout>
        <PrimaryRoutes />
      </AppLayout>
    </React.Fragment>
  );
}

export default App;
