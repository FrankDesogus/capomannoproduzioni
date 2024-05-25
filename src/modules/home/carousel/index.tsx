"use client"

import { useState, useEffect } from 'react';
import Image from "next/image"
import LocalizedClientLink from '@modules/common/components/localized-client-link';
import InteractiveLinkHome from './arrow-link';

const images = [
    {
        src: 'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/shopstuff.jpg',
         title: 'La Forza e la bellezza della natura racchiusa nei nostri modelli', description: ""
    },
    { src: 'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/ClaudiaVestitoLungo.jpg',
    title: 'La Forza e la bellezza della natura racchiusa nei nostri modelli', description: ""
},
    { src: 'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/felpamare.jpg',
    title: 'La Forza e la bellezza della natura racchiusa nei nostri modelli', description: ""
},
    // Aggiungi qui altre immagini e descrizioni
];

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Cambia l'intervallo di tempo desiderato (in millisecondi)

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="">
      <Image
        src={images[currentImageIndex].src}
        loading="eager"
        priority={true}
        quality={100}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
            <div className="absolute right-0 lg:right-24 bottom-6 flex justify-center items-center bg-white bg-opacity-60 w-1/2">
                <div className="small:px-16 text-stone-700 z-10 flex flex-col justify-center items-center text-center small:text-center small:justify-center small:items-start w-3/4 lg:w-full">
                    <h1 className="text-2xl-semi drop-shadow-md shadow-black text-center ml-auto uppercase py-8">
                        {images[currentImageIndex].title}
                    </h1>
                    <p className="text-base-regular drop-shadow-md shadow-black text-center ml-auto">
                        {images[currentImageIndex].description}

                    </p>
                    <div className="mb-8 px-2 py-2 small:ml-auto bg-blue-600 rounded">
                        <InteractiveLinkHome href="/store">Esplora i nostri prodotti</InteractiveLinkHome>
                    </div>
                </div>
            </div>

            {/* 
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={handlePrev}
            >
                Prev
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-full"
                onClick={handleNext}
            >
                Next
            </button>
            */}
        </div>
    );
};

export default Carousel;
