import React, { Component } from 'react';
import Create from './create';
import Landing from './Landing';
import Event from './event';
import { Routes, Route } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    );
  }
}

export default Main;
