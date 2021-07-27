import React from 'react'
import { Users } from '../../dummyData'
import Online from '../online/Online'
import './rightbar.css'

export default function Rightbar({ profile }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText"><b>Selena Gomez</b> and <b>3 other</b> friends have a birthday today.</span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbaFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">London</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Scotland</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Complicated</span>
                    </div>
                </div>
                <h4 className="rightbatTitle">User Friends </h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/5.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Bruce Wayne</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/6.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Emily Robbert</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/7.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Juliet Mackenzi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/8.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Scarlett Johnson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/9.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jack Messie</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/10.jpg`} alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Chris Robbert</span>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}
