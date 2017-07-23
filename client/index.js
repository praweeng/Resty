import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import PortfolioCreate from './components/PortfolioCreate';
import App from './components/App';
import Portfolios from './components/Portfolios';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={Portfolios} />
          <Route path="portfolio/new" component={PortfolioCreate} />
        </Route>  
         </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
