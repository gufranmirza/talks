import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'antd/lib/icon'

import * as styles from './styles'

const Home = () => (
  <styles.Root>
    <styles.Card>
      <Link
        to='/protected-page'
      >
        <div><Icon type="close-circle" /></div>
        Show an Application Level Error Handling
      </Link>
    </styles.Card>

    <styles.Card>
      <Link
        to='/query-level-error'
      >
        <div><Icon type="issues-close" /></div>
        Show an Query Level Error Handling
      </Link>
    </styles.Card>
    
    <styles.Card>
      <Link
        to='/all-categories'
      >
        <div><Icon type="check" /></div>
        Show all Ingredient Categories
      </Link>
    </styles.Card>
  </styles.Root>
)

export default Home
