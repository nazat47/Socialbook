import React, { useContext } from 'react'
import './comments.scss'
import { AuthContext } from '../../context/authContext';
export default function Comments() {
    const {currUser}=useContext(AuthContext)
    const comments = [
        {
          id: 1,
          desc: "Best ever",
          name: "Asif Iqbal",
          userId: 1,
          profilePicture:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          desc: "Thanks!",
          name: "Maliha Moon",
          userId: 2,
          profilePicture:
            "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ];
  return (
    <div className="comments">
        <div className="write">
            <img src={currUser.pic} alt='' />
            <input type='text' placeholder='write a comment' />
            <button>Send</button>
        </div>
        {comments.map((cmnt)=>(
            <div className="comment">
                <img src={cmnt.profilePicture} alt=''/>
                <div className="info">
                <p>{cmnt.name}</p>
                <span>{cmnt.desc}</span>
                </div>
                <span className='date'>40 minutes ago</span>
               
            </div>
        ))}
    </div>
  )
}
