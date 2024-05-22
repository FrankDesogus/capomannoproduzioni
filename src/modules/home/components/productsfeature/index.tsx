"use client"

import Image from "next/image"

const ProductsFeature = () => {

    return (
        <>
            <div className="">
                <div className="grid grid-cols-3 gap-4">
                    {/* First Column */}
                    <div className="bg-white border-2 border-purple flex flex-col items-center text-center">
                        <div className="grid grid-cols-4">
                            {/* Image Section (1/4 width) */}
                            <div className="col-span-1 flex items-center justify-end">
                                <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/durability.png'} alt="Image" width={100} height={100} />
                            </div>
                            {/* Text Section (3/4 width) */}
                            <div className="col-span-3 flex items-center justify-center">
                                <span className="text-lg-regular text-black max-w-lg uppercase my-4">
                                    Resistenza e comfort garantiti.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Second Column */}
                    <div className="bg-white border-2 border-purple flex flex-col items-center text-center">
                        <div className="grid grid-cols-4">
                            {/* Image Section (1/4 width) */}
                            <div className="col-span-1 flex items-center justify-end">
                                <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/timelessfashion.png'}
                                    alt="Image" width={100} height={100} />
                            </div>
                            {/* Text Section (3/4 width) */}
                            <div className="col-span-3 flex items-center justify-center">
                                <span className="text-lg-regular text-black max-w-lg uppercase my-4">
                                    Capi senza tempo.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Third Column */}
                    <div className="bg-white border-2 border-purple flex flex-col items-center text-center">
                        <div className="grid grid-cols-4">
                            {/* Image Section (1/4 width) */}
                            <div className="col-span-1 flex items-center justify-end">
                                <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/cotton.png'}
                                    alt="Image" width={100} height={100} />
                            </div>
                            {/* Text Section (3/4 width) */}
                            <div className="col-span-3 flex items-center justify-center">
                                <span className="text-lg-regular text-black max-w-lg uppercase my-4">
                                    otone 100% organico.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative py-16 flex items-end justify-center mb-16">
                    <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/GangstaClaudia.jpg'} alt="Image" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 bg-gray-900 opacity-5">
                    </div>
                    <div className="max-w-6xl px-4 relative z-10 w-1/2 bg-white bg-opacity-80 ml-auto mr-8">
                        {/* Contenuto della sezione */}
                        <h1 className="text-4xl text-black text-center py-8 font-extrabold">
                            Non un semplice brand ma una filosofia di vita.</h1>
                        <p className="text-xl text-black text-center py-8 font-extrabold">Passione per il mare e attenzione per i materiali si fondono dando la vita a capi unici, curati nei minimi dettagli e pensati per accompagnarti nel tempo.</p>
                    </div>
                </div>
                <h1 className="text-black text-5xl small:text-8xl justify-center text-center mx-auto w-full uppercase my-12">BIJOUX e ACCESSORI </h1>


                <div className="bg-black">
                    <div className="content-container flex flex-col-reverse gap-y-4 justify-between py-2">



                        <div className="container mx-auto">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-1 relative w-full h-full aspect-[2/3]">
                                    <Image
                                        src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/Ambra2-1713523990768.jpg'}
                                        alt=""
                                        className="absolute inset-0"
                                        fill
                                        sizes="100vw"

                                        style={{
                                            objectFit: "cover",
                                        }}
                                    />
                                    <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition duration-300 text-2xl small:text-3xl">
                                        <h1 className="mt-16">Collezione Ambra Terapeutica del Baltico:</h1>
                                        <p className="mt-16 text-xl invisible small:visible">Scopri il potere curativo e l&apos;eleganza senza tempo dell&apos;ambra terapeutica del Baltico, una pietra preziosa amata da secoli per le sue proprietà terapeutiche e la sua bellezza naturale. Ogni gioiello è un tributo alla madre natura, con pezzi unici che catturano la calda tonalità dell&apos;ambra e la sua aura di benessere. Dalle collane agli orecchini, ogni gioiello è progettato per portare comfort e armonia, aggiungendo un tocco di lusso e bellezza al tuo stile quotidiano. Indossa l&apos;ambra del Baltico con orgoglio, abbracciando la sua storia millenaria e i suoi benefici per il corpo e lo spirito.</p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="col-span-1 relative w-full h-full aspect-[3/2]">
                                        <Image
                                            src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/Argento+2-1713512798911.jpg'}
                                            alt=""
                                            className="absolute inset-0"
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition duration-300 text-2xl small:text-3xl">
                                            <h1 className="mt-4 small:mt-16">Collezione Gioielli Etnici e Sardi in Argento</h1>
                                            <p className="mt-16 text-xl invisible small:visible">Esplora la collezione di gioielli etnici e sardi in argento, un mix affascinante di tradizione e modernità. Ogni pezzo, dalle fedine ai braccialetti, rappresenta un&apos;eleganza senza tempo e un&apos;abilità artigianale unica, perfetta per qualsiasi occasione..</p>
                                        </div>
                                    </div>

                                    <div className="col-span-1 relative w-full aspect-square small:w-[100%] small:aspect-[3/2]">
                                        <Image
                                            src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/Tagua5.jpg'}
                                            alt=""
                                            className="absolute inset-0"
                                            fill
                                            sizes="100vw"
                                            style={{
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 bg-black bg-opacity-50 text-white p-2 opacity-0 hover:opacity-100 transition duration-300 text-2xl small:text-3xl">
                                            <h1 className="mt-4">Collezione Tagua</h1>
                                            <p className="mt-16 text-xl invisible small:visible">Scopri la nostra esclusiva collezione di accessori e gioielli realizzati in tagua, una preziosa e sostenibile alternativa all&apos;avorio animale. Ogni pezzo è un&apos;opera d&apos;arte unica, intagliata a mano con maestria artigianale e arricchita da sfumature naturali e dettagli intricati.</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                <h1 className="text-3xl text-gray-600 text-center py-16 w-3/4 items-center justify-center mx-auto font-extrabold">
                    Diversi look per diverse stagioni e stili. Tutto in un unico Shop</h1>


                <div className="content-container">




                    <div className="row">
                        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
                            <li className="column mt-8">
                                <div className="h-[50vh] w-full relative mt-8">

                                    <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/Claudia%3Atreccine.JPEG'}
                                        loading="eager"
                                        priority={true}
                                        quality={90}
                                        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                                        className="absolute inset-0"
                                        draggable="false"
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}   ></Image>
                                </div>
                                <div className="flex flex-col items-center text-center mt-8">
                                    <span className="text-base-regular text-gray-600">
                                    </span>
                                    <p className="text-xl-regular text-gray-900 max-w-lg uppercase font-extrabold">
                                        Street style
                                    </p>
                                </div>
                            </li>
                            <li className="column mt-16">
                                <div className="flex flex-col items-center text-center mb-8">
                                    <span className="text-base-regular text-gray-600">
                                    </span>
                                    <p className="text-xl-regular text-gray-900 max-w-lg uppercase font-extrabold">
                                        Classic & Sporty
                                    </p>
                                </div>
                                <div className="h-[50vh] w-full relative">

                                    <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/IMG_4864_jpg.JPG'}
                                        loading="eager"
                                        priority={true}
                                        quality={90}
                                        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                                        className="absolute inset-0"
                                        draggable="false"
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}   >

                                    </Image>
                                </div>
                            </li>
                            <li className="column">
                                <div className="h-[50vh] w-full relative">

                                    <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/IMG_4019_jpg.png'}
                                        loading="eager"
                                        priority={true}
                                        quality={90}
                                        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                                        className="absolute inset-0"
                                        draggable="false"
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}   >

                                    </Image>
                                </div>
                                <div className="flex flex-col items-center text-center mb-16">
                                    <span className="text-base-regular text-gray-600 mb-6">
                                    </span>
                                    <p className="text-xl-regular text-gray-900 max-w-lg mb-4 uppercase font-extrabold">
                                        Ethnic wear
                                    </p>
                                </div>
                            </li>
                            <li className="column">
                                <div className="h-[50vh] w-full relative mt-16">

                                    <Image src={'https://mic-medusademo-tq9pqli72b-orientando-5-mediabucket-cexuvpvnsfar.s3.eu-central-1.amazonaws.com/IMG_4137_jpg.JPG'}
                                        loading="eager"
                                        priority={true}
                                        quality={90}
                                        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
                                        className="absolute inset-0"
                                        draggable="false"
                                        fill
                                        sizes="100vw"
                                        style={{
                                            objectFit: "cover",
                                        }}   >

                                    </Image>

                                </div>
                                <div className="flex flex-col items-center text-center mb-16">
                                    <span className="text-base-regular text-gray-600 mb-6">
                                    </span>
                                    <p className="text-xl-regular text-gray-900 max-w-lg mb-4 uppercase font-extrabold">
                                        Colorful accessories
                                    </p>
                                </div>
                            </li>




                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductsFeature
