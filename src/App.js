import React from 'react'
import { Link,Route } from 'wouter'
import './App.css';
import ListOfGifs from './components/ListOfGifs';


function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h2>App de GIFs</h2>        
        
        <Link to="/gif/panda">Pandas</Link>
        <Link to="/gif/cars">Cars</Link>
        <Link to="/gif/love">Love</Link>

        <Route component = {ListOfGifs} path='/gif/:keyword'/>
      </section>
    </div>
  );
}

export default App;
