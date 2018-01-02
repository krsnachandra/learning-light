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
import axios from 'axios';

function AppPresenter(props){
  return (
    <div>
        <Navbar />
        <div className="App container">
          <Switch>
            <Route exact path='/' render={() => (
              <Home test={props.content} />
            )}/>
            <Route path="/profile" exact component={Profile} />
            <Route path="/progress" exact component={Progress} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/review" component={Review} />
            <Route path="/comp" component={CourseCompleted} />
            <Route path="/:coursename" render={({match:{params:{coursename}}}) => (
              <Course coursename={coursename}/>
            )} />
          </Switch>
        </div>
        {/* {<Footer />} */}
    </div>);
}

class AppContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      test : 'Hello this is great content',
      content: ''
    }
  }

  componentDidMount() {
    axios.get('/courses/3/sections/3', {
      // params: {
      //   ID: 3
      // }
    })
    .then( (response) => {
      // console.log(response.data.content);
      this.setState({
        content: response.data.content
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return <AppPresenter content={this.state.content}/>;
  }
}
export default AppContainer;
