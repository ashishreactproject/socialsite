import React from 'react'
import './topbar.css'
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from 'react-router-dom';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span className="logo">socialbook</span>
                </Link>
            </div >
            <div className="topbarCenter"></div>
            <div className="searchbar">
                <Search className="searchIcon" />
                <input placeholder="Search for friend, post or video" className="searchInput" />
            </div>
            <div className="topbarRight">
                <div className="topbarLinks" style={{ textDecoration: "none" }}>
                    <Link to="/home">
                        <span className="topbarLink">Home</span>
                    </Link>
                    <Link to="/login">
                        <span className="topbarLink">Logout</span>
                    </Link>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">5</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">10</span>
                    </div>
                </div>
                <Link to="/profile/:username">
                    <img src="/assets/person/7.jpg" alt="" className="topbarImage" />
                </Link>
            </div>

        </div >
    )
}
