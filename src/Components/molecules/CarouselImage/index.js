import React from 'react'
import './style.css'
import Image from '../../atoms/image/index'

const CarouselImage = ({ imageContent }) => {
    return (
        <div>
            <Image name="border-rad-10" location={imageContent.img} alt={imageContent.imgAlt} width="750" height="460" />
        </div>
    );
}

export default CarouselImage;
