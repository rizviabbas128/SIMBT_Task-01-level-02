import React from 'react'
import './home.scss';
import Navbar from './Navbar';
import Feature from './Feature';
import List from './List';
import MovieList from './MovieList';
import AnimationList from './AnimatedList';
import Horror from './Horror';

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Feature/>
      <List/>
      <MovieList/>
      <AnimationList/>
      <Horror/>
    </div>
  )
}

export default Home
