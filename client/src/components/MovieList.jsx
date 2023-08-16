import './movielist.scss';

import React, { useEffect, useRef, useState } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ListItem from './ListItem';

const MovieList = () => {
  const [data, setData] = useState([])
  const [isMoved, setIsMoved] = useState(false);
  const [sliderNumber ,setSlideNumber] = useState(0);
  const listRef = useRef();

  const getData = async () => {
    setData(null)
    fetch("https://www.omdbapi.com/?apiKey=53c800d&s=Harry&type=movie").then((res) => res.json()).
    then((response) => setData(response.Search));
  }

  useEffect(() => {
    getData()
  },[])

  const handleClick = (direction) => {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === 'left' && sliderNumber > 0) {
      setSlideNumber(sliderNumber - 1)
      listRef.current.style.transform = `translateX(${230 + distance}px)`
    }
    if(direction === 'right' && sliderNumber < 5) {
      setSlideNumber(sliderNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`
    }
  }

  if(data === null) {
    return <h1>loading...</h1>
  }
  return (
    <div className='list'>
      <span className="listTitle">Popular Movies</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon className='sliderArrow left' onClick={() => handleClick("left")} style={{display: !isMoved && "none"}}/>
        <div className="container" ref={listRef}>
          {
            data && data.map((item, index) => {
              return (
                <ListItem name={item?.Title} poster={item?.Poster} description={item?.Type} year={item?.Year} index={index} />
              )
            })
          }
        </div>
        <ArrowForwardIosOutlinedIcon className='sliderArrow right' onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}

export default MovieList;
