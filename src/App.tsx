import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/test'}>Test page</Link>
    </div>
  );
};

export default App;
