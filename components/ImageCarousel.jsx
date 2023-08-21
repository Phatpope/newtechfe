import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ImageCarousel = ({ images,text1,text2,text3,text4 }) => {
    return (
//         <div class="carousel-wrapper">
//             <Carousel infiniteLoop useKeyboardArrows autoPlay>
//             {images?.map((img) => (
//     <img
//         key={img.id}
//         src={img.attributes.url}
//         alt={img.attributes.name}
//     />
// ))}
        
//             </Carousel>
//         </div>

<div class="container my-24 mx-auto md:px-6">
<section class="mb-32">

  <div class="mb-16 flex flex-wrap">
  <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
  {images && images.length > 0 && (
    <div
      class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init data-te-ripple-color="light"
    >
      <img
        src={images[0]?.attributes.url || ''}
        class="w-full"
        alt={images[0]?.attributes.name || ''}
      />
      <a href="#!">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>
      </a>
    </div>
  )}
</div>

    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
      <h3 class="mb-4 text-2xl font-bold">That's the news!</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="mr-2 h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
        </svg>
        Travels
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>14.01.2022</u> by
        <a href="#!">Lisa McCartney</a>
      </p>
      <p class="mb-6 text-neutral-500 dark:text-neutral-300">
      {text1}
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
        nulla saepe rerum aspernatur odio amet perferendis tempora
        mollitia? Ratione unde magni omnis quaerat blanditiis cumque
        dolore placeat rem dignissimos?
      </p>
    </div>
  </div>

  <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
  {images && images.length > 0 && (
    <div
      class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init data-te-ripple-color="light"
    >
      <img
        src={images[0]?.attributes.url || ''}
        class="w-full"
        alt={images[0]?.attributes.name || ''}
      />
      <a href="#!">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>
      </a>
    </div>
  )}
</div>


  <div class="flex flex-wrap">
  <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
  {images && images.length > 0 && (
    <div
      class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init data-te-ripple-color="light"
    >
      <img
        src={images[0]?.attributes.url || ''}
        class="w-full"
        alt={images[0]?.attributes.name || ''}
      />
      <a href="#!">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>
      </a>
    </div>
  )}
</div>


    <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
      <h3 class="mb-4 text-2xl font-bold">Stock market boom</h3>
      <div class="mb-4 flex items-center text-sm font-medium text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor" class="mr-2 h-5 w-5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
        Business
      </div>
      <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        Published <u>10.01.2022</u> by
        <a href="#!">Joe Svan</a>
      </p>
      <p class="text-neutral-500 dark:text-neutral-300">
        {text3}
      </p>
    </div>
  </div>
</section>

<section class="mb-32">
    <div class="flex flex-wrap">
    <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
  {images && images.length > 0 && (
    <div
      class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
      data-te-ripple-init data-te-ripple-color="light"
    >
      <img
        src={images[0]?.attributes.url || ''}
        class="w-full"
        alt={images[0]?.attributes.name || ''}
      />
      <a href="#!">
        <div
          class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
        ></div>
      </a>
    </div>
  )}
</div>


      <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
        <div
          class="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-white lg:pl-12 lg:text-left">
          <div class="lg:pl-12">
            <h2 class="mb-8 text-3xl font-bold">Let it surprise you</h2>
            <p class="mb-8 pb-2 lg:pb-0">
            {text1}
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {text1}
              </p>

              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {text1}
              </p>

              <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Best experience
              </p>
            </div>

            <p>
              {text4}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};

export default ImageCarousel;

// import React, { useState, useEffect } from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// const ImageCarousel = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Increment the active index to move to the next image
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change the interval time to adjust the delay between slides

//     return () => clearInterval(interval);
//   }, [images]);

//   return (
//     <div id="gallery" className="relative w-full" data-carousel="slide">
//       {/* Carousel wrapper */}
//       <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
//         {/* Iterate through images and apply the active class based on the index */}
//         {images.map((img, index) => (
//           <div
//             key={img.id}
//             className={`${
//               index === activeIndex ? "block" : "hidden"
//             } duration-700 ease-in-out`}
//             data-carousel-item={index === activeIndex ? "active" : ""}
//           >
//             <img
//               src={img.attributes.url}
//               className="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               alt={img.attributes.name}
//             />
//           </div>
//         ))}
//       </div>
//       {/* Slider controls */}
//       <button
//         type="button"
//         className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-prev
//         onClick={() =>
//           setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
//         }
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="sr-only">Previous</span>
//         </span>
//       </button>
//       <button
//         type="button"
//         className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//         data-carousel-next
//         onClick={() =>
//           setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
//         }
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//           <svg
//             className="w-4 h-4 text-white dark:text-gray-800"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="sr-only">Next</span>
//         </span>
//       </button>
//     </div>
//   );
// };

// export default ImageCarousel;





