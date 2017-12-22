import React, { Component } from 'react';
import axios from 'axios';

class Smrt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: ''
    }

    axios.get('/courses/3/sections/3', {
      // params: {
      //   ID: 3
      // }
    })
    .then(function (response) {
      console.log(response);
      console.log(response.data.content);
      // console.log(response);
      // const content = response.content;
      // this.setState({section: content});

    })
    .catch(function (error) {
      console.log(error);
    });
    // this.setState({section});

  }

  componentDidMount() {
    axios.get('/courses/3/sections/3', {
      // params: {
      //   ID: 3
      // }
    })
    .then(function (response) {
      console.log(response);
      console.log(response.data.content);
      // console.log(response);
      // const content = response.content;
      // this.setState({section: content});

    })
    .catch(function (error) {
      console.log(error);
    });
    // this.setState({section});

  }

  render() {
    
    return (
        <div>
          <h1>Hello to Smart React Component</h1>
        </div>
    );
  }
}

export default Smrt;