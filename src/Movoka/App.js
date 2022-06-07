import UrlPathMap from './common/UrlPathMap';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from './routes/NavigationBar';
import Content from './routes/Content';
import Footer from './routes/Footer';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Content/>
      <Footer/>
    </BrowserRouter>
);
}

export default App;