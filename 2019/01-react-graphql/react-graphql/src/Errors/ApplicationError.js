import React from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import BounceLoader from 'react-spinners/BounceLoader';

import * as styles from './styles'

const ERROR_403 = gql`
  {
    error403
  }
`;

const ApplicationError = () => (
  <div>
    <div>
      <Query query={ERROR_403} errorPolicy="all">
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

          if (!error) return <h1>Some protected page</h1>;
        }}
      </Query>
    </div>
  </div>
);

export default ApplicationError
