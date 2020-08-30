import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201607/kunalstory_647_072816080151.jpg?size=770:433"
                message="Well day to sleep !!!"
                timestamp="this is timestamp"
                username="dev"
                image="https://sciencefiction.com/wp-content/uploads/2020/01/The-Mask-750x422.jpg.webp"/>

            <Post 
                profilePic="https://www.licensingmagazine.com/wp-content/uploads/2020/01/mr_bean.jpg"
                message="Well day to sleep !!!"
                timestamp="this is timestamp"
                username="dev"
                image="https://m.media-amazon.com/images/M/MV5BNjk4N2Q1YzAtYWY4Yy00NGI4LWI5M2YtYmMxZmUwMzEwYWMwXkEyXkFqcGdeQXVyMjkwMzc3Mzg@._V1_UY268_CR147,0,182,268_AL__QL50.jpg"/>

            <Post 
                profilePic="https://m.media-amazon.com/images/M/MV5BNjk4N2Q1YzAtYWY4Yy00NGI4LWI5M2YtYmMxZmUwMzEwYWMwXkEyXkFqcGdeQXVyMjkwMzc3Mzg@._V1_UY268_CR147,0,182,268_AL__QL50.jpg"
                message="Well day to sleep !!!"
                timestamp="this is timestamp"
                username="dev"
                image="http://photoshopcontest.com/images/large/zczkjnicsoj38ny28etqhev5jqypgj7109lu.jpg"/>
        </div>
    )
}

export default Feed;
