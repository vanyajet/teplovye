import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Loader from './components/Loader';
import Navbar from './components/navigation/Navbar';

const About = React.lazy(() => import('./components/pages/About'))
const Products = React.lazy(() => import('./components/pages/Products'))
const Production = React.lazy(() => import('./components/pages/Production'))
const Cart = React.lazy(() => import('./components/pages/Cart'))
const Default = React.lazy(() => import('./components/pages/Default'))
const Contacts = React.lazy(() => import('./components/pages/Contacts'))
       

const App:FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/'> <Products /> </Route>
        <Route path='/about'> <React.Suspense fallback={<Loader/>}> <About /> </React.Suspense> </Route>
        <Route path='/production'> <React.Suspense fallback={<Loader/>}> <Production /> </React.Suspense> </Route>
        <Route path='/contacts'> <React.Suspense fallback={<Loader/>}> <Contacts /> </React.Suspense> </Route>
        <Route path='/cart'> <React.Suspense fallback={<Loader/>}> <Cart/> </React.Suspense> </Route>
        <Route> <Default /> </Route>
        
      </Switch>
      

    </>
  );
}

export default App;
