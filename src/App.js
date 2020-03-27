import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import logo from './virus.svg';
import Category from './components/Category';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// TEST ---------------------------
import ApiResult from './List.test'
// --------------------------------

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
        <img src={logo} alt="COVID-19" className="AppLogo" />
        <h1 className="AppTitle">COVID-19 <small>Dashboard and Resources</small></h1>
      </header>

      <nav>
        <ul className="AppFilter list-unstyled">
          {printFilter}
        </ul>
      </nav>

      {printCategory}

      <footer>
        Created with <FontAwesomeIcon icon={faHeart} color="#eb5569" /> by <a href="https://biuni.it">Biuni</a><br/>
        <small>Virus icon by <a href="https://www.flaticon.com/">Flaticon</a></small>
      </footer>
    </div>
  );
}

export default App;
