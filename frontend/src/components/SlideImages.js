import React, { useEffect, useRef, useState } from 'react'
import '../Styles/SlideImages.css';

const SlideImages = () => {
    const data = [
        {
            id: 1,
            imgUrl: 'Images/imagen-1.jpg',
        },
        {
            id: 2,
            imgUrl: 'Images/imagen-2.jpg',
        },
        {
          id: 3,
          imgUrl: 'Images/imagen-3.jpg'
        },
        {
          id: 3,
          imgUrl: 'Images/imagen-4.jpg'
        }

    ];

    const listRef = useRef();
    
    const [FotoID, setFotoID] = useState(0);
    useEffect(() => {
        const listNode = listRef.current;
        const imgNode = listNode.querySelectorAll("li > img")[FotoID];
        if (imgNode) {
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [FotoID]);

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
            setFotoID((FotoID) => {
                return FotoID === 0 ? data.length - 1 : FotoID - 1;
            });
        } else {
            setFotoID((FotoID) => {
                return FotoID === data.length - 1 ? 0 : FotoID + 1;
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setFotoID((FotoID) => {
                return FotoID === data.length - 1 ? 0 : FotoID + 1;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <div className="main-container">
            <div className="slider-container">
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className="container-images">
                    <ul ref={listRef}>
                        {data.map((item) => {
                            return (
                                <li key={item.id}>
                                    <img src={item.imgUrl} alt="" />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SlideImages;
