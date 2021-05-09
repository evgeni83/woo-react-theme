import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';


const client = new ApolloClient( {
    // uri: 'http://buddypetfoods.loc/se/graphql',
    uri: 'https://danevgen.ru/graphql',
    cache: new InMemoryCache()
} )

ReactDOM.render(
    <ApolloProvider client={ client }>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ApolloProvider>,
    document.getElementById( 'root' )
);

