import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Default from './components/pages/Default';
import Loader from './components/Loader';
import Navbar from './components/navigation/Navbar';
import Home from './components/pages/Home';
import Production from './components/pages/Production';
import Products from './components/pages/Products';
import Contacts from './components/pages/Contacts';
       

const App:FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'> <Products /> </Route>
        {/* <Route path='/how-we-work'> <React.Suspense fallback={<Loader/>}> <HowWeWork /> </React.Suspense> </Route> */}
        <Route path='/about'> <React.Suspense fallback={<Loader/>}> <Home /> </React.Suspense> </Route>
        <Route path='/production'> <React.Suspense fallback={<Loader/>}> <Production /> </React.Suspense> </Route>
        <Route path='/contacts'> <React.Suspense fallback={<Loader/>}> <Contacts /> </React.Suspense> </Route>
        
        <Route> <Default /> </Route>
        {/* <Route path='/cart'> <React.Suspense fallback={<Loader/>}> <Cart/> </React.Suspense> </Route> */}
         
      </Switch>
      

    </>
  );
}

export default App;
