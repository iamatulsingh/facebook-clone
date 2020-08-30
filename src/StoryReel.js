import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://cdn3.whatculture.com/images/2013/10/sp_1504_madCartman.jpg" 
                 profileSrc="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201607/kunalstory_647_072816080151.jpg?size=770:433"
                 title="Atul Singh"/>
            <Story image="https://www.licensingmagazine.com/wp-content/uploads/2020/01/mr_bean.jpg" 
                 profileSrc="https://vignette.wikia.nocookie.net/mrbean/images/4/4b/Mr_beans_holiday_ver2.jpg"
                 title="Mr.Bean"/>
            <Story image="https://sciencefiction.com/wp-content/uploads/2020/01/The-Mask-750x422.jpg.webp" 
                 profileSrc="https://www.pngkit.com/png/full/821-8213501_jim-carrey-drawing-funny.png"
                 title="Jim"/>
            <Story image="http://photoshopcontest.com/images/large/zczkjnicsoj38ny28etqhev5jqypgj7109lu.jpg" 
                 profileSrc="https://cdn.quotesgram.com/small/1/56/163427738-pink_panther_060302124621212_wideweb__300x453.jpg"
                 title="Inspector Cluso"/>
            <Story image="https://m.media-amazon.com/images/M/MV5BNjk4N2Q1YzAtYWY4Yy00NGI4LWI5M2YtYmMxZmUwMzEwYWMwXkEyXkFqcGdeQXVyMjkwMzc3Mzg@._V1_UY268_CR147,0,182,268_AL__QL50.jpg" 
                 profileSrc="https://www.mediavillage.com/media/articles/blackpanther.jpg.1440x1000_q85_box-0%2C23%2C640%2C468_crop_detail.jpg"
                 title="Black Panther"/>
        </div>
    )
}

export default StoryReel;
