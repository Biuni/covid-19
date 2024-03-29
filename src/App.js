import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Loader from './components/Loader';
import FilterCountry from './components/FilterCountry';
import PlaceHolderFilter from './components/PlaceHolderFilter';
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
    fetchData();
  }, []);

  const fetchData = async (cc) => {
    setIsLoading(true);
    const result = await axios(
      `https://api.covid-19-coronavirus.tools/get/?country=${(cc === undefined) ? '' : cc}`,
    );
    setData(result.data);
    setIsLoading(false);
  };

  const FilterByCountry = (cc) => {
    fetchData(cc);
  };

  return (
    <div className="container my-3 App">
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
      <>
        <Navigation category={data.hits} />
        <FilterCountry filter={FilterByCountry} />
        {(data.hits.length === 0) ? (
          <PlaceHolderFilter clear={FilterByCountry} />
        ) : ''}
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
