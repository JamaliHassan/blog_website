import Link from "next/link";
import React from "react";


const About = () => {
  return (
    <section className="bg-[#]">
      <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-6 text-center">
            About <span className="text-[#D4A373]">The Daily Scroll</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to <span className="font-semibold">The Daily Scroll</span>,
            your go-to destination for insightful articles, tips, and stories
            that inspire, inform, and entertain. Whether you’re here to explore
            new ideas, stay updated on trends, or simply enjoy a daily dose of
            quality content, you’ve come to the right place.
          </p>

          <h2 className="text-2xl font-semibold text-black mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            At The Daily Scroll, we believe in the power of storytelling and
            knowledge-sharing to bring people together. Our mission is to create
            a platform where readers can discover diverse perspectives, gain
            valuable insights, and find inspiration for their daily lives.
          </p>

          <h2 className="text-2xl font-semibold text-black mb-4">
            What You’ll Find Here
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed mb-6">
            <li>
              Thought-provoking articles on a variety of topics, from technology
              to lifestyle.
            </li>
            <li>
              Actionable tips and how-to guides to help you thrive in your
              personal and professional life.
            </li>
            <li>
              Engaging stories and insights from contributors around the globe.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-black mb-4">
            Join the Community
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            The Daily Scroll is more than just a blog — it’s a community of
            curious minds and passionate individuals. We encourage you to engage
            with our content, share your thoughts, and connect with fellow
            readers. Together, we can make this space even more vibrant and
            meaningful.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Thank you for being part of our journey. If you have any feedback,
            suggestions, or just want to say hello, feel free to reach out
            through our{" "}
            <Link href="/contact" className="text-[#D4A373] underline">
              Contact
            </Link>{" "}
            page. Happy scrolling!
          </p>

          <p className="text-center text-gray-500 text-sm mt-10">
            &copy; {new Date().getFullYear()} The Daily Scroll. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
