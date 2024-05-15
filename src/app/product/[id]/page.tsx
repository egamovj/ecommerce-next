"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ProductType } from "@/interfaces";

const ProductDetailedPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }

    getData();
  }, [id]);

  return <div>{product?.title}</div>;
};

export default ProductDetailedPage;
