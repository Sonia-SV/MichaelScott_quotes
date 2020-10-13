import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';

getDataFromApi();
const App = () => {
  const [quote, setQuote] = useState([]);
  
  const randomQuote = () => {
    getDataFromApi().then((data) => setQuote(data));
  }
  useEffect(() => {
    getDataFromApi().then((data) => setQuote(data));
  }, []);

  return (
    <main className='main'>
      <div className='main__container'>
        <div className='main__container__quote'>
          <span className='marks'>“</span>
          <p className='random'>{quote}</p>
          <p className='signature'>Michael Scott</p>
          </div>
        </div>
        <button className='main__button' onClick={randomQuote}>New quote</button></main>
  );
};

export default App;
