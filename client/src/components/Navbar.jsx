import React, { useState,useEffect } from 'react'
import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from './List';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState('');
  const [check, setCheck] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (!token) {
      navigate("/")
    }
  }, [])

  const handleAdd = () => {
    navigate("/createfood")
  }

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null);
    }
    
  return (
    <div className={isScrolled ? 'navbar scrolled': 'navbar'}>
      <div className="container">
        <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="netflix" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
          {!check ? (
             <SearchIcon className='icon' onClick={() => setCheck(true)}/>
          ) : (
            <input type="text" onMouseLeave={() => setCheck(false)} value={query} onChange={(e) =>  setQuery(e.target.value)} placeholder='Search movie, Tv Shows' />
          )}
            <span>KID</span>
            <NotificationsIcon className='icon'/>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="profile" />
            <div className='profile'>
            <ArrowDropDownIcon className='icon'/>
            <div className="options">
                <span onClick={() => {
          sessionStorage.removeItem("token")
          navigate("/")
        }}>Logout</span>
            </div>
            </div>
        </div>
      </div>
      <div style={{display:'none'}}>
      <List query={query}/>
      </div>
    </div>
  )
}

export default Navbar
