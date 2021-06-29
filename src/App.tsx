import React from 'react';
import logo from './logo.svg';
import './App.css';
import NytFetch from './components/fetch'
// import DisplayResults from './components/display'
function App() {
  return (
    <div className="App">
      {/* <DisplayResults /> */}
     <NytFetch />
    </div>
  );
}

export default App;
