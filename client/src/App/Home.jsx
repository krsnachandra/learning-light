import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

function Home() {
    return <Redirect to="/progress" />;
  }

  export default Home;