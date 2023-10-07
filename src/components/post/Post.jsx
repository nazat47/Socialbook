import React, { useState } from 'react'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from '../comments/Comments';
export default function Post({post}) {
    const [commentOpen,setCommnetOpen]=useState(false)
    const like=false
  return (
    <div className="post">
        <div className="container">
   
        <div className="user">
           <div className="userInfo">
           <img src={post.profilePic} alt=''/>
           <div className="details">
            <Link to={`/profile/${post.userId}`} style={{textDecoration:'none', color:'inherit'}}>
                <span  className='name'>{post.name}</span>
            </Link>
            <span className='date'>15 minutes ago</span>
           </div>
           </div>
           <MoreHorizIcon />
        </div>
        <div className="content">
             <p>{post.desc}</p>
            <img src={post.img} alt='' />
        </div>    
        <div className="info">
            <div className="items">
                {like ? <FavoriteOutlinedIcon />:<FavoriteBorderOutlinedIcon />}
                64 likes
            </div>
            <div className="items" onClick={()=>setCommnetOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                4 comments
            </div>
            <div className="items">
                <ShareOutlinedIcon />
                64 likes
            </div>
        </div>
        {commentOpen && <Comments />}
        </div>
    </div>
  )
}
