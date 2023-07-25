import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { fetchDataFromApi } from "@/utils/api";
import { getDiscountedPricePercentage } from "@/utils/helper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import Navigation from "@/components/navigation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewLetterCall from "@/components/NewlatterCall";

const ProductDetails = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const p = product?.data?.[0]?.attributes;

  const notify = () => {
    toast.success("Success. Check your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  if (!product) {
    return <div>Loading...</div>; // Add a loading state
  }

  // Add error handling for product not found
  if (!p) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 h-96 lg:h-auto">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* PRODUCT TITLE */}
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p?.name}
            </div>

            {/* PRODUCT SUBTITLE */}
            <div className="text-lg font-semibold mb-5">{p?.subtitle}</div>

            {/* PRODUCT PRICE */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                Giá : {p?.price} &#8363;
              </p>
              {p?.original_price && (
                <>
                  <p className="text-base  font-montserrat line-through">
                    {p?.original_price} &#8363;
                  </p>
                  <p className="ml-auto text-base font-montserrat text-green-500">
                    {getDiscountedPricePercentage(p?.original_price, p?.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-montserrat text-black/[0.5]">
              Đã Gồm Thuế.
            </div>
            <div className="text-md font-montserrat text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* HEADING START */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>
                <div className="text-md font-montserrat text-black/[0.5] cursor-pointer">
                  Select Guide
                </div>
              </div>
              {/* HEADING END */}

              {/* SIZE START */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {p?.size?.data.map((item, i) => (
                  <div
                    key={i}
                    className={`border rounded-md text-center py-3 font-montserrat ${
                      item.enabled
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } ${selectedSize === item.size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(item.size);
                      setShowError(false);
                    }}
                  >
                    {item.size}
                  </div>
                ))}
              </div>
              {/* SIZE END */}

              {/* SHOW ERROR START */}
              {showError && (
                <div className="text-red-600 mt-1">
                  Size selection is required
                </div>
              )}
              {/* SHOW ERROR END */}
            </div>
            {/* PRODUCT SIZE RANGE END */}

            {/* ADD TO CART BUTTON START */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-montserrat transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
                if (!selectedSize) {
                  setShowError(true);
                  document.getElementById("sizesGrid").scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                  });
                } else {
                  dispatch(
                    addToCart({
                      ...product?.data?.[0],
                      selectedSize,
                      oneQuantityPrice: p?.price,
                    })
                  );
                  notify();
                }
              }}
            >
              Add to Cart
            </button>
            {/* ADD TO CART BUTTON END */}

            {/* WHISHLIST BUTTON START */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-montserrat transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* WHISHLIST BUTTON END */}

            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className=" text-md mb-5 font-tektur ui-sans-serif">
                {p?.description}
              </div>
              <NewLetterCall/>
            </div>
          </div>
          {/* right column end */}
        </div>
        <div className="text-[18px] font-semibold mb-2 leading-tight"></div>
        <div className="bg-white flex justify-center items-center h-1/4  py-40">
          <Navigation  product={p}/>
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};
// import React from "react";
// import { fetchDataFromApi } from "@/utils/api";

// import { useSelector, useDispatch } from "react-redux";
// import { addToCart } from "@/store/cartSlice";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import NewLetterCall from "@/components/NewlatterCall";

// const ProductDetails = ({ product }) => {
//   // Rest of the component code...

//   if (!product) {
//     return <div>Loading...</div>; // Add a loading state
//   }

//   // Add error handling for product not found
//   if (!product?.data?.[0]?.attributes) {
//     return <div>Product not found.</div>;
//   }

//   const p = product.data[0].attributes;

//   return (
//     <div>
//       <ToastContainer />
//       <div>
//         {/* PRODUCT TITLE */}
//         <div>{p.name}</div>

//         {/* PRODUCT PRICE */}
//         <div>Giá : {p.price} &#8363;</div>
//       </div>
//     </div>
//   );
// };


// ...
// export async function getStaticPaths() {
//   try {
//     const products = await fetchDataFromApi("/api/products?populate=*");
//     console.log("Products Data:", products); // Add this console.log to check the data
//     const paths = products?.data?.map((p) => ({
//       params: {
//         slug: p?.attributes.slug,
//       },
//     }));

//     return {
//       paths,
//       fallback: true,
//     };
//   } catch (error) {
//     console.error("Error fetching product slugs:", error);
//     return {
//       paths: [],
//       fallback: true,
//     };
//   }
// }
export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p?.attributes.slug,
    },
  }));

  return {
    paths: paths || [], // Ensure 'paths' is an array even if it's null
    fallback: false, // Set to false to return 404 for undefined paths
  };
}



export async function getStaticProps({ params }) {
  try {
    const { slug } = params;
    const product = await fetchDataFromApi(
      `/api/products?populate=*&filters[slug][$eq]=${slug}`
    );
    const products = await fetchDataFromApi(
      `/api/products?populate=*&[filters][slug][$ne]=${slug}`
    );

    console.log("Product Data:", product); // Add this console.log to check the data
    console.log("Other Products Data:", products); // Add this console.log to check the data

    return {
      props: {
        product,
        products,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      notFound: true,
    };
  }
}

export default ProductDetails;








