import React from 'react'
import './rightBar.scss'
export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
              <span>Nazat Mustag</span>
            </div>
            <div className="buttons">
              <button>Add Friend</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
              <span>Asif Zawad</span>
            </div>
            <div className="buttons">
              <button>Add Friend</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
              <p>
              <span>Nazat Mustag</span> Changed profile picture
              
              </p>
             
            </div>
            <span>2 minutes ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
              <p>
              <span>Nazat Mustag</span> React love 
              </p>
            </div>
            <span>2 minutes ago</span>  
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online" />
              <span>Nazat Mustag</span>            
            </div>      
               
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online" />
              <span>Maliha Mehzabin</span>            
            </div>      
               
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online" />
              <span>Arko das</span>            
            </div>      
               
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online" />
              <span>Sifat hossain</span>            
            </div>      
               
          </div>
          <div className="user">
            <div className="userInfo">
            <img src='https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
            <div className="online" />
              <span>Raisa</span>            
            </div>      
               
          </div>
          
        </div>
      </div>
    </div>
  )
}
