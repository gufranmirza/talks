import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import BounceLoader from 'react-spinners/BounceLoader';
import { Link } from 'react-router-dom'
import Button from 'antd/lib/button'
import Icon from 'antd/lib/icon'

import * as styles  from './styles'

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Category Name',
    dataIndex: 'name',
    key: 'name',
  }
];

class ListPage extends React.Component {

  render() {  
    if (this.props.AllCategories.loading) {
      return (
        <styles.Root>
          <BounceLoader
            sizeUnit={"px"}
            size={150}
            color={'#006d75'}
            loading
          />
        </styles.Root>
      )
    }


    return (
      <styles.Table>
        <Link to="/" >
          <Button  >
            <Icon type="left" /> Home
          </Button>
        </Link>
        <br /><br />
        <styles.Tab background="#383838">
          <styles.ID>ID</styles.ID>
          <styles.Label>Category Name</styles.Label>
        </styles.Tab>
        {this.props.AllCategories.allCategories && this.props.AllCategories.allCategories.map(post => (
          <styles.Tab key={post.id} background="#006d75">
            <styles.ID>{post.id}</styles.ID>
            <styles.Label>{post.name}</styles.Label>
          </styles.Tab>
        ))}
      </styles.Table>

    )
  }
}

const ALL_CATEGORIES_QUERY = gql`
  query AllCategories {
    allCategories {
      id
      name
    }
  }
`

const ListPageWithQuery = graphql(ALL_CATEGORIES_QUERY, {
  name: 'AllCategories',
  options: {
    fetchPolicy: 'network-only',
  },
})(ListPage)

export default ListPageWithQuery
