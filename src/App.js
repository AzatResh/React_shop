import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { event } from 'jquery';

import './App.css';

import {Header} from './layout/Header';
import {Shop} from './components/Shop';

function App() {
  return (
    <>
      <Header/>
      <Shop/>
    </>
  );
}

export default App;
