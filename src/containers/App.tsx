import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRouter from './pages/AppRouter';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline/>
      <AppRouter/>
    </Router>
  );
};

export default App;
