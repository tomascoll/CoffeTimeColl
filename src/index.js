import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar />
    <ItemDetailContainer/>
  </>
);

//<ItemListContainer/>
//<ItemCount stock={5} initial={1}/>
