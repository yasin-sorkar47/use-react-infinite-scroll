import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const parPage = 10;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loadingRef = useRef();
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${parPage}&skip=${page * parPage}`
      );

      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    };

    const onInterSection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onInterSection);

    if (observer && loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    // cleanUp
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore, page]);

  return (
    <div className="container mx-auto">
      <h1 className=" text-3xl text-center font-bold py-12">Products List</h1>
      <div className="grid grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCard props={product} key={product.id} />
        ))}
      </div>
      {hasMore && (
        <div ref={loadingRef}>
          {" "}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Button loading variant="solid">
              Solid
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
}
