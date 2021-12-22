import React from 'react'
import Icon from 'antd/lib/icon'
import Button from 'antd/lib/button';
import { Link } from 'react-router-dom'

import * as styles from './styles'

const LogIN = () => (
  <div>
    <styles.Table >  
      <Link to="/" >
        <Button  >
          <Icon type="left" /> Home
        </Button>
      </Link><br /><br />

      <styles.Card>
        <div>
          <div> <Icon type="unlock" /> </div> <br />
          <div>login to account your account first</div>
        </div>
      </styles.Card>
    </styles.Table>
  </div>
)

export default LogIN
