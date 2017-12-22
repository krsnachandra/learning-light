import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Home from './Home';
import Progress from './Progress';
import Course from './Course';
import Navbar from './Navbar';
import Login from './Login';
import Register from './Register';
import Review from './Review';
// import Footer from './Footer';
import CourseCompleted from './CourseCompleted';
import Smrt from './Smrt';
import axios from 'axios';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      test : 'Hello this is a great content',
      content: ''
    }
  }

  componentWillMount() {
    axios.get('/courses/3/sections/3', {
      // params: {
      //   ID: 3
      // }
    })
    .then(function (response) {
      this.setState({
        content: response.data.content
      })
      //console.log(response.data.content);
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
        {/* <Smrt> */}
          <Navbar />
          <div className="App container">
            <Switch>
              {/* <Route path="/" exact component={()=><Home test={this.state.test}/>} /> */}
              <Route exact path='/' render={(props) => (
                <Home test={this.state.test} />
              )}/>

              <Route path="/profile" exact component={Profile} />
              <Route path="/progress" exact component={Progress} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/review" component={Review} />
              <Route path="/comp" component={CourseCompleted} />
              <Route path="/:coursename" component={Course} />
            </Switch>
          </div>
          {/* {<Footer />} */}
        {/* </Smrt> */}
      </div>);
  }
}

export default App;
