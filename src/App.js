import { useEffect } from 'react';

import {getCountries} from './actions';
import { useDispatch } from 'react-redux';

import {Header} from './Components/Header/header';
import { Countries } from './Components/countriesCard/countries';

function App() {

  const dispatch = useDispatch();
  useEffect( async () => {
    await dispatch(getCountries());
  },[]);
  
  return (
    <div>
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
