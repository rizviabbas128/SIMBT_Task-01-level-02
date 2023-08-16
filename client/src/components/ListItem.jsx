import './listitem.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const ListItem = ({index,name,poster,description,year}) => {
  const [isHovered ,setIsHovered] = useState(false);
  const trailer = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761';
  return (
    <div className='listItem' style={{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img src={poster} alt={name} />
        {isHovered && (
          <>
          <video src={trailer} autoPlay={true} loop />
        <div className="itemInfo">
            <div className="icons">
                <PlayArrowIcon className='icon'/>
                <AddIcon className='icon'/>
                <ThumbUpOutlinedIcon className='icon'/>
                <ThumbDownAltOutlinedIcon className='icon'/>
            </div>
            <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className='limit'>+16</span>
                <span>{year}</span>
            </div>
            <div className="description">
          {description}
            </div>
            <div className="genre">Action</div>
        </div>
          </>
        )}
    </div>
  )
}

export default ListItem
