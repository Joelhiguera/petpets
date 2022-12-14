import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Victoria from './pages/Victoria';
import Ollie from './pages/Ollie';
import Petrie from './pages/Petrie';


// import Nav from './components/Nav';
import Footer from './components/Footer'
import Header from './components/Header';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
            
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route 
                path="/Victoria" 
                element={<Victoria />} 
              />
              <Route 
                path="/ollie" 
                element={<Ollie />} 
              />
              <Route 
                path="/petrie" 
                element={<Petrie />} 
              />
              
              
            </Routes>
            
            
            <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
