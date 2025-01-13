"use client";
import React, { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from "react-icons/hi2";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
interface BlogData {
  id: number;
  title: string;
  description?: string;
  publishDate?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
  authorName: string;
  authorDesignation: string;
  authorImage?: {
    asset: {
      _ref: string;
    };
  };
}

const blogs = () => {
  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: BlogData[] = await client.fetch(`*[_type == "blogPost"]`);
      setData(res);
    };

    fetchData();
  }, []);
  const builder = imageUrlBuilder(client);

  const urlFor = (source: any) => {
    return builder.image(source).url();
  };
  return (
    <section>
      <HeroSection />
      <div className="mt-16">
        <h1 className="text-[#495057] text-4xl text-center my-6 p-2">
          All Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
          {data.map((items, index) => {
            const imageUrl = items.image?.asset?._ref
              ? urlFor(items.image.asset._ref)
              : "https://via.placeholder.com/350";
            const authorImageUrl = items.authorImage?.asset?._ref
              ? urlFor(items.authorImage.asset._ref)
              : "https://via.placeholder.com/50";
            return (
              <div
                key={index}
                className="max-w-[300px] h-[565px] mx-auto bg-white m-1 hover:shadow-xl"
              >
                <Link href={`/blogsPage/${items.id}`}>
                  <Image
                    src={imageUrl}
                    alt="blog image"
                    width={310}
                    height={281}
                    objectFit={"cover"}
                    className="h-[281px] hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </Link>

                <div className="flex flex-col gap-3 text-xs text-[#6C757D] my-2 p-4">
                  <p>{items.publishDate}</p>
                  <Link href={`/blogsPage/${items.id}`}>
                    <h1 className="text-lg font-bold text-[#495057] hover:underline">
                      {items.title}
                    </h1>
                  </Link>

                  <p>{items.description}</p>
                </div>
                <div className="flex gap-4 mx-auto px-4 py-2  border-t-2 border-[#E5E5E5]">
                  <Link href={"/blogsPage/Post"}>
                    <Image
                      src={authorImageUrl}
                      alt="blog image"
                      width={50}
                      height={50}
                      className="rounded-full h-[50px] object-cover"
                    />
                  </Link>

                  <div>
                    <Link href={"/blogsPage/Post"} className="hover:underline">
                      <h1>{items.authorName}</h1>
                    </Link>
                    <p className="text-xs text-[#6C757D]">
                      {items.authorDesignation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col sm:flex-row justify-center md:justify-between items-center border-t-2 border-gray-400 p-4 mx-6 my-8 sm:my-4">
          <div className=" hidden md:flex">
            <Link href={"."} className="flex items-center gap-2">
              <HiOutlineArrowSmallLeft /> Previous
            </Link>
          </div>
          <div className="flex gap-4">
            {Array.from({ length: 5 }, (_, i) => (
              <Link href={`?page=${i + 1}`} key={i}>
                <div className="hover:bg-[#D4A373] w-8 h-8 md:h-10 md:w-10 rounded border-2 border-black flex items-center justify-center transition duration-200 ease-in-out">
                  {i + 1}
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link href={"."} className="flex items-center gap-2">
              Next <HiOutlineArrowSmallRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blogs;
