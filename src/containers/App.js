import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import {setAuthorizationToken, setCurrentUser} from '../store/actions/auth';
import configureStore from '../store';
import Main from './Main';


const store = configureStore();


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  // prevent someone from manually tampering with the key of jwtToken in localStorage
  try {
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (e) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = props => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Main/>
        </div>
      </Router>
    </Provider>
  );
}



export default App;
