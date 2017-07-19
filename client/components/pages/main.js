import React, { Component } from 'react'
import Menu from '../Navigation/navigation'

import { Grid, Row, Col,Thumbnail, Button, Media} from 'react-bootstrap'


class Main extends Component{
  render(){
    return(
      <div>
        <Menu />
        {this.props.children}
      </div>
    )
  }
}
export default Main
