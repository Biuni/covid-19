import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Category from './components/Category';
import Footer from './components/Footer';
import Header from './components/Header';
import Loader from './components/Loader';
import Filter from './components/Filter';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const [data, setData] = useState({ hits: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        'https://gist.githubusercontent.com/Biuni/d4be934f7e09037764411b2a6b4d85d3/raw/e250718fc74ea1ff953f7045328cb8748cbeb5d2/COVID-19.json',
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
        <Filter category={data.hits} />
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
