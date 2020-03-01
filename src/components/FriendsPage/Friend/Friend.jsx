import {NavLink} from "react-router-dom";
import React from 'react';
import cl from './Friend.module.css';
import userPhoto from '../../../img/noavatar.png'

let Friend = (props) => {
  let pageCount = Math.ceil (props.totalFriednsCount / props.pageSize);
  let pages = [];
    for (let i = 1; i <= pageCount; i++){
      pages.push(i);
    }
  return <div>
    <div className={cl.pageblock}>
        { pages.map( p => {
          return <span className = {props.currentPage === p && cl.selected } onClick = { (e) => {props.onPageChanged(p); } }> {p} </span>
        })}
        </div>
    {
    props.friendsList.map( a => <div className = {cl.oneCard} key={a.id}>

    <NavLink to = {'/user/' + a.id}>
         <div className={cl.userData} >
        <div className={cl.imgWr}>
            <img alt=""
            src={a.photos.small != null ? a.photos.small : userPhoto} />
        </div>
        <div className= {cl.datawr}>
          <h3 className={cl.userName}>{a.name}</h3>
          <h4 className={cl.userStatus}>{a.status}</h4>
        </div></div>
    </NavLink>

        <div>
        {a.followed
            ? <button disabled={props.followingInProgress.some(id => id === a.id)} className={cl.subscribe}
            onClick={() => { props.unfollow(a.id) }}
            >Unfollow</button>

        : <button disabled={props.followingInProgress.some(id => id === a.id)} className={cl.subscribe}
             onClick={() => { props.follow(a.id) }}
              >Follow</button>
        }
          </div>

          </div>)
        }
        </div>
  }

export default Friend;
