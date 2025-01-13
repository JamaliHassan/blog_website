"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import imageUrlBuilder from "@sanity/image-url";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface Blogitem {
  id: string;
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

interface Props {
  params: { Post: string };
}

const Page = ({ params }: Props) => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [item, setitem] = useState<Blogitem[]>([]);

  const blogId =params.Post;
  useEffect(() => {
    const fetchitem = async () => {
      const res: Blogitem[] = await client.fetch(`*[_type == "blogPost"]`);
      setitem(res);
    };

    fetchitem();
  }, []);

  const data = item.find((b) => b.id === blogId);
 

  const builder = imageUrlBuilder(client);

  const urlFor = (source: any) => {
    return builder.image(source).url();
  };
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText.trim()]);
      setCommentText("");
    }
  };
  const imageUrl = data?.image?.asset?._ref
    ? urlFor(data.image.asset._ref)
    : "https://via.placeholder.com/350";
  const authorImageUrl = data?.authorImage?.asset?._ref
    ? urlFor(data.authorImage.asset._ref)
    : "https://via.placeholder.com/50";
  return (
    <section className="w-full">
      <HeroSection />
      {data ? (
        <div key={data.id} className="mt-16 mx-auto max-w-4xl">
          <div className="max-w-[800px] max-h-[400px] mx-auto overflow-hidden">
            <Image
              src={imageUrl}
              alt="item image"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-[#D4A373] font-bold text-4xl italic tracking-wide p-6">
              {data.title}
            </h1>
            <p className="text-pretty p-6">
              {data?.description} <br /> Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Est numquam tempore facere asperiores quibusdam!
              Ipsa, debitis! Nemo, officiis. Provident ipsa accusamus beatae
              fuga quia explicabo tempora necessitatibus nobis officiis eius.
              Labore doloribus ratione quaerat quis quos natus est perferendis
              id officia unde modi accusantium minima placeat dolorem, itaque
              assumenda. Assumenda mollitia ullam reprehenderit sit at soluta
              quos nulla quisquam quas? Quam doloribus porro quia quidem
              cupiditate impedit inventore. Minus deserunt blanditiis officia,
              ullam dolorum praesentium, voluptatibus nihil impedit
              reprehenderit expedita natus iure placeat obcaecati maxime
              voluptates id dignissimos, magni quaerat? Officiis, repellendus
              eveniet! Possimus, expedita error. Numquam quod dolor in expedita,
              est libero, beatae animi reprehenderit nisi rerum inventore? Modi,
              aut. Repellendus ipsam reprehenderit dolorem illo, possimus error
              eum voluptas! Provident itaque laboriosam ab illum iure dolorem
              rem aliquam id, asperiores dicta quasi tempora veritatis eaque
              autem a laborum est? Perspiciatis suscipit voluptate illum ullam
              magnam, alias commodi possimus aspernatur. Quaerat temporibus
              sequi amet libero ad? Necessitatibus iusto repellat ea sint esse
              dolores blanditiis voluptate laborum voluptatem quos hic, sapiente
              aliquid ex iure assumenda voluptatum alias ipsum fugit doloremque
              explicabo. Dolor accusantium officiis excepturi non vero numquam
              provident nobis, ipsa voluptates repellat sequi consequatur optio,
              tempore impedit fuga nulla dolorum obcaecati accusamus cupiditate
              commodi! Repudiandae explicabo est sint distinctio alias. Nam
              soluta beatae, dicta eum eos amet est assumenda iure earum eaque
              perferendis! Quidem magnam explicabo fugiat odio porro, odit
              consequuntur sit itaque iure, nam, cupiditate quam alias libero
              mollitia? Cum voluptates explicabo delectus repellendus quo
              sapiente soluta molestias ab quos autem! Accusamus saepe cumque
              at! Delectus pariatur laboriosam aliquid sunt possimus
              consectetur, aut odit nostrum, corporis dolor, illum eos? Ipsum
              necessitatibus placeat saepe officiis odit rerum delectus neque
              sint, aperiam officia sed dolorum, natus distinctio accusantium.
              Vel similique quam ab modi quo saepe recusandae vero dolorum
              quidem! Consectetur, doloribus!
            </p>
            <p className="text-end my-3">
              Publish Date:{" "}
              <span className="text-[#D4A373] px-2">{data.publishDate}</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center  mt-6 py-6 border-t-2  border-[#E5E5E5]">
            <div>
              <div className="flex gap-4 mx-auto px-4 py-2">
                <Link href={"/blogsPage/Post"}>
                  <Image
                    src={authorImageUrl}
                    alt="Author Image"
                    width={50}
                    height={50}
                    className="rounded-full h-[50px]"
                  />
                </Link>
                <div>
                  <Link href={"/blogsPage/Post"} className="hover:underline">
                    <h1>{data.authorName}</h1>
                  </Link>
                  <p className="text-xs text-black">{data.authorDesignation}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 p-4">
              <Link href={""}>
                <FaFacebook
                  size={20}
                  className="transtition ease-linear hover:text-[#D4A373]"
                />
              </Link>
              <Link href={""}>
                <FaTwitter
                  size={20}
                  className="transtition ease-linear hover:text-[#D4A373]"
                />
              </Link>
              <Link href={""}>
                <FaInstagram
                  size={20}
                  className="transtition ease-linear hover:text-[#D4A373]"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Blog not found.</p>
      )}
      <div className="container mx-auto my-10 max-w-sm md:max-w-2xl lg:max-w-4xl bg-[#457fb9] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 text-black">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mb-6">
          <div className="space-y-4 my-4">
            {comments.length === 0 ? (
              <p className="text-black text-sm">
                No comments yet. Be the first to share your thoughts!
              </p>
            ) : (
              comments.map((comment, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md shadow-md p-4 text-black"
                >
                  {comment}
                </div>
              ))
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Write a comment..."
              className="flex-1 w-full outline-none shadow-md rounded-l px-4 py-2 focus:ring focus:ring-[#D4A373]  overflow-wrap break-words"
            />
            <Button
              type="submit"
              className="bg-[#D4A373] text-black px-6 py-2 ml-2 rounded-r hover:bg-[#bf7224] w-full md:w-fit"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Page;
