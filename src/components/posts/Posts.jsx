import React from 'react'
import './posts.scss'
import Post from '../post/Post';

export default function Posts() {
  const posts = [
    {
      id: 1,
      name: "Maliha Moon",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Having a good time",
      img: "https://img.freepik.com/free-photo/group-friends-taking-selfie-beach_329181-17992.jpg?w=996&t=st=1696697694~exp=1696698294~hmac=41e1faa4d03a76ad9568dd2c4b375a202c00957b97e025a43d24eba4b41e69ff",
    },
    {
      id: 2,
      name: "Raisa Islam",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Best day of my life",
    },
  ];
  return (
    <div className="posts">
        {posts.map((post)=>(
          <Post post={post} key={post.id} />
        ))}
    </div>
  )
}
