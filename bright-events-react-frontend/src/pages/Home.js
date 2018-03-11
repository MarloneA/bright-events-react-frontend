import React, {Component} from 'react';

import Sidebar from '../components/Sidebar';
import Head from '../components/Head';
import Events from '../components/Content';

export default class Home extends Component {


  render(){
    return (
      <div className="outline">
        <Sidebar/>
        <Head/>
        <Events/>
    	</div>

    )
  }
}