import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { fetchDataFromApi } from "@/utils/api";
import { useRouter } from "next/router";

const Search = ({ setSearchModal }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const [data, setData] = useState(null);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const searchProducts = async () => {
    if (!query.length) {
      setData(null);
      return;
    }

    const result = await fetchDataFromApi(
      `/api/products?populate=*&filters[info][$contains]=${query}`
    );
    setData(result);
  };

  useEffect(() => {
    searchProducts();
  }, [query]);

  useEffect(() => {
    // Disable scrolling on the body when the search modal is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on the body when the search modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="search-modal fixed w-full h-full z-50 top-0 left-0 bg-white overflow-y-auto">
      <div className="p-4 flex items-center justify-center">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          value={query}
          onChange={onChange}
          className="w-full px-4 py-2 border-solid border-2 border-gray-600 rounded-md focus:outline-none focus:border-gray-500"
        />
        <MdClose
  className="text-red-500 hover:text-red-700 cursor-pointer text-2xl transition duration-300 ease-in-out transform hover:scale-110"
  onClick={() => setSearchModal(false)}
/>

      </div>
      <div className="p-4">
        {!data?.data?.length && (
          <div className="text-center text-gray-500">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="mt-4 space-y-4">
          {data?.data?.map((item) => (
            <div
              className="flex items-center justify-center border-b border-gray-300 py-2 hover:bg-gray-100 cursor-pointer mx-auto w-2/3"
              key={item?.attributes?.slug}
              onClick={() => {
                router.push(
                  "/product/[slug]",
                  `/product/${item.attributes.slug}`
                );
                setSearchModal(false);
              }}
            >
              <div className="flex-shrink-0 w-16 h-16 mr-4">
                <img
                  src={"" + item.attributes.thumbnail?.data?.attributes?.url}
                  alt={item?.attributes?.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-tektur text-gray-900">
                  {item?.attributes?.subtitle}
                </div>
                <div className="text-sm text-gray-500">
                  {item?.attributes?.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
