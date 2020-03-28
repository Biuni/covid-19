import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import Category from './components/Category';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

ReactGA.initialize('UA-58722026-9');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {

  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        'https://www.biuni.it/api/',
      );
      setData(result.data);
      await new Promise(r => setTimeout(r, 1000));
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="container my-3 App">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
      <>
        <Navigation category={data.hits} />
        {data.hits.map((res, index) => (
          <Category name={res.category} link={res.name} list={res.list} key={index} />
        ))}
      </>
      )}
      <Footer />
    </div>
  );
}

export default App;
