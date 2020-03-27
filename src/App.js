import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from './virus.svg';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const ApiResult = [
  {
    category: "Dashboard",
    name: "dashboard",
    list: [
      {
        title: "COVID-19 Comparator",
        description: "Coronavirus cases comparator by countries, from chosen date and number of days (PWA)",
        country: "Global",
        countryCode: "it",
        link: "https://covid-comparator.netlify.com/",
        time: "27th March 2020"
      }
    ]
  },
  {
    category: "Data Sources",
    name: "data",
    list: [
      {
        title: "COVID-19 Comparator",
        description: "Coronavirus cases comparator by countries, from chosen date and number of days (PWA)",
        country: "Global",
        countryCode: "it",
        link: "https://covid-comparator.netlify.com/",
        time: "27th March 2020"
      }
    ]
  }
];

function App() {

  const printCategory = ApiResult.map(res => (
    <Category name={res.category} link={res.name} list={res.list} />
  ))

  const printFilter = ApiResult.map(res => (
    <li><a href={`#${res.name}`}>{res.category}</a></li>
  ))

  return (
    <div className="container my-3 App">
      <header>
        <img src={logo} className="AppLogo" />
        <h1 className="AppTitle">COVID-19 <small>Dashboard and Resources</small></h1>
      </header>
      <nav>
      <ul className="AppFilter list-unstyled">{printFilter}</ul>
      </nav>
      {printCategory}
      <footer>
        With <FontAwesomeIcon icon={faHeart} color="red" /> by <a href="https://biuni.it">Biuni</a> <br /> Virus icon by <a href="https://www.flaticon.com/">Flaticon</a>
      </footer>
    </div>
  );
}

export default App;
