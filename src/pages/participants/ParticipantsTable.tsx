import React from 'react';
import './ParticipantsTable.css'
import '../../main.css'
import { useState, useEffect } from "react";
import axios from "axios";

const ParticipantsTable = (props: any) => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPost = async () => {
            setLoading(true);
            const response = await axios.get(
                "https://new-backend.unistory.app/api/data");
            setPosts(response.data.items);
            setLoading(false);
        }
        loadPost();
    }, []);



    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div className='partab-container'>
            <div className='partab-header'>
                PARTICIPATION LISTING (ENABLE ONLY FOR PARTICIPANTS)
            </div>
            <div className='partab-list-header-container'>
                <div className='partab-list-header-name'>
                    NAME
                </div>
                <div className='partab-list-header-email'>
                    EMAIL
                </div>
                <div className='partab-list-header-wallet'>
                    WALLET
                </div>
            </div>
            <div className="partab-scroll">
            {props.listState && <div className='partab-userdata-container'>
                    <button className='partab-userdata-name'>{props.userdata[0]}</button>
                    <button className='partab-userdata-email'>{props.userdata[1]}</button>
                    <button className='partab-userdata-wallet'>{props.userdata[2]}</button>
                    <button onClick={()=>props.setListState(false)} className='partab-remove'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_46_976)">
                                <rect x="2.11035" y="2.81799" width="1" height="10" rx="0.5" transform="rotate(-45 2.11035 2.81799)" fill="white"/>
                                <rect x="2.81738" y="9.88904" width="1" height="10" rx="0.5" transform="rotate(-135 2.81738 9.88904)" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_46_976">
                                    <rect width="12" height="12" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>}
                {loading ? (
                        <h4>Loading...</h4>) :
                    (
                        posts.map((item) =>
                        <div className='partab-userdata-container'>
                            {/*// @ts-ignore*/}
                            <div className='partab-titledata-name'>{item.username}</div>
                            {/*// @ts-ignore*/}
                            <div className='partab-titledata-email'>{item.email}</div>
                            {/*// @ts-ignore*/}
                            <div className='partab-titledata-wallet'>{item.address.slice(0,24) + '...'}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ParticipantsTable;
