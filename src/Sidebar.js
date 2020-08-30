import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><SidebarRow src={"https://avatars3.githubusercontent.com/u/20820833?s=400&u=0d016f198c2160898d0bc5262ce0e3845a228c0c&v=4"} 
                        title={"Atul Singh"}/></li>
                <li><SidebarRow Icon={LocalHospitalIcon} title={"COVID-19 Information Center"}/></li>
                <li><SidebarRow Icon={EmojiFlagsIcon} title={"Pages"}/></li>
                <li><SidebarRow Icon={PeopleIcon} title={"Friends"}/></li>
                <li><SidebarRow Icon={ChatIcon} title={"Messanger"}/></li>
                <li><SidebarRow Icon={StorefrontIcon} title={"Marketplace"}/></li>
                <li><SidebarRow Icon={VideoLibraryIcon} title={"Video"}/></li>
                <li><SidebarRow Icon={ExpandMoreOutlined} title={"Marketplace"}/></li>
            </ul>
        </div>
    )
}

export default Sidebar;
