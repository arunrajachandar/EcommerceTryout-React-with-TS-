import React from 'react';
import {Container} from 'react-bootstrap';

import './App.scss';
import Grids from './components/Grids';
import CategoryDropdown from './components/CategoryDropdown';

const App: React.FC = () => {

  return (
    <div className="App">
          <Container>

      <CategoryDropdown />
      <Grids />
      </Container>
    </div>
  );
}

export default App;
