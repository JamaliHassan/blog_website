"use client";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useEffect, useState } from "react";

const builder = imageUrlBuilder(client);

const urlForImage = (source: string) => builder.image(source).url();

interface BlogData {
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

const EditorsPick = () => {
  const [data, setData] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res: BlogData[] = await client.fetch(`*[_type == "blogPost"]`);
      setData(res);
    };

    fetchData();
  }, []);
  return (
    <section className="w-full flex justify-center items-center p-6 my-10">
      <div className="flex flex-col gap-12 w-[1280px]">
        <h1 className="text-[#495057] text-4xl">Editor’s Pick</h1>
        <div className="flex flex-col md:flex-row gap-8 w-full items-center md:items-start">
          {data.length > 0 ? (
            data.slice(6, 8).map((item, index) => {
              const imageUrl =
                item.image && item.image.asset
                  ? urlForImage(item.image.asset._ref)
                  : "https://via.placeholder.com/350";

              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                  className="bg-cover bg-center w-full md:w-1/2 h-[350px] flex items-end relative"
                >
                  <div className="ml-12 my-12 flex flex-col gap-4">
                    <p className="text-xs text-[#E5E5E5]">
                      {item.publishDate
                        ? item.publishDate
                        : "No date available"}
                    </p>
                    <Link href={""} className="hover:underline">
                      <h1 className="max-w-[270px] text-white">
                        {item.title || "No title available"}
                      </h1>
                    </Link>
                    <p className="text-xs text-[#E5E5E5] max-w-[340px]">
                      {item.description || "No description available"}
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-red-600">Data not found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;
