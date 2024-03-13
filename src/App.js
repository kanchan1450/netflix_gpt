
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import Browser from './components/Browser';
import { Provider, useDispatch } from 'react-redux';
import appStore from './utils/appStore';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { addUser, removeUser } from './utils/userInfoSlice';


function App() {
  
  return (
    
      <Provider store={appStore}>
        <div><Body></Body></div>
        
      </Provider>
      
  );
}

export default App;
