import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import BounceLoader from 'react-spinners/BounceLoader';
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom'

import * as styles from './styles'

const ERROR_400 = gql`
  {
    error400
  }
`;

const QueryError = () => (
  <div>
    <Query query={ERROR_400} errorPolicy="all">
      {({ loading, error, data }) => {
        if (loading) return (
          <styles.Loader>
            <BounceLoader
              sizeUnit={"px"}
              size={150}
              color={'#006d75'}
              loading
            />
          </styles.Loader>
        );

        console.log(error);

        if (error) return (
          <styles.Root>
            <Link to="/" >
              <Button  >
                <Icon type="left" /> Home
              </Button>
            </Link>
            <br /><br />

            {error.graphQLErrors[0].code === 400 && (
              <styles.Card>
                <div><Icon type="fire" /></div>
                <div>Coul'd not get data at this time, try again...</div><br />
                <Button>Retry...</Button>
              </styles.Card>
            )}
            

            <br /><br />
            <b>Query Level Error handler invoked </b><br /><hr /><br />
            <pre>{JSON.stringify(error, null, 2) }</pre>
          </styles.Root>
        ) ;

        return <h1>Some Query result data to be displayed</h1>;
      }}
    </Query>
  </div>
);

export default QueryError
