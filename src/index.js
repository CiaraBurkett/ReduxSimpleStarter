import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBFkQyFi8AXm_16j1S0ZE6XDSWIzcsJXP4';

// Create a new component that should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component's generated HTML and put in in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
