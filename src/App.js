import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchInfo from './components/SearchInfo';

function App() {
  return (
    <div className="App">
      <Header title="Search for Movies"></Header>
      <SearchInfo></SearchInfo>
      <Footer title="2021"></Footer>
    </div>
  );
}

export default App;