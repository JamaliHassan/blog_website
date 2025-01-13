"use client";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

const Blogs = () => {
  const [activeTab, setActiveTab] = useState();
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

  const handleTab = (tab: any) => {
    setActiveTab(tab);
  };

  return (
    <section className="w-full flex items-center justify-center mt-40">
      <div className="flex flex-col w-[1300px] gap-6">
        <h1 className="text-4xl font-bold text-[#495057] p-2">Popular Blogs</h1>
        <div className="flex flex-col sm:flex-row justify-between text-[#495057]">
          <ul className="flex gap-2 sm:gap-4 p-2">
            {[
              "All",
              "Adventure",
              "Travel",
              "Fashion",
              "Technology",
              "Branding",
            ].map((items, index) => (
              <li
                key={index}
                className={`text-xs font-bold visited:text-[#D4A373] ${
                  activeTab === items ? "text-[#D4A373]" : "text-[#495057]"
                }`}
                onClick={() => handleTab(items)}
              >
                <Link href={"."}>{items}</Link>
              </li>
            ))}
          </ul>
          <div>
            <Link
              href={`/blogsPage`}
              className="text-xs font-bold transition ease-linear  hover:text-[#D4A373] p-2"
            >
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-auto sm:mx-0">
          {data.length > 0 ? (
            data.slice(0, 8).map((items, index) => {
              const imageUrl = items.image?.asset?._ref
                ? urlFor(items.image.asset._ref)
                : "https://via.placeholder.com/350";
              const authorImageUrl = items.authorImage?.asset?._ref
                ? urlFor(items.authorImage.asset._ref)
                : "https://via.placeholder.com/50";
              const publishedDate = items.publishDate
                ? items.publishDate
                : "Date not available";
              return (
                <div
                  key={index}
                  className="max-w-[300px] h-[565px] bg-white m-1 hover:shadow-xl"
                >
                  <Link href={`/blogsPage/${items.id}`}>
                    <Image
                      src={imageUrl}
                      alt="blog image"
                      width={310}
                      height={281}
                      className="h-[281px] object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </Link>

                  <div className="flex flex-col gap-3 text-xs text-[#6C757D] my-2 p-4">
                    <p>{publishedDate}</p>
                    <Link href={`/blogsPage/${items.id}`}>
                      <h1 className="text-lg font-bold text-[#495057] hover:underline">
                        {items.title}
                      </h1>
                    </Link>

                    <p>{items.description}</p>
                  </div>
                  <div className="flex gap-4 mx-auto p-4  border-t-2 border-[#E5E5E5]">
                    <Link href={`/blogsPage/${items.id}`}>
                      <Image
                        src={authorImageUrl}
                        alt="blog image"
                        width={50}
                        height={50}
                        className="rounded-full h-[50px] object-cover"
                      />
                    </Link>

                    <div>
                      <Link
                        href={`/blogsPage/${items.id}`}
                        className="hover:underline"
                      >
                        <h1>{items.authorName}</h1>
                      </Link>
                      <p className="text-xs text-[#6C757D]">
                        {items.authorDesignation}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-red-600">Blog not found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
