import { Link } from "react-router-dom";
import { blogPosts } from "./blogData";

function Blog() {
  return (
    <div className="blog-section">

      {/* <div className="about-container bg-cover bg-center relative overflow-hidden h-[50vh] z-[-20]" style={{ backgroundImage: "url('https://i.pinimg.com/736x/83/4c/85/834c8525f9071792434d476fdb5fdd7e.jpg')" }} > */}
      <div className="about-container bg-cover bg-center relative overflow-hidden h-[50vh] z-[-20]" style={{ backgroundImage: "url('https://i.pinimg.com/736x/f6/ab/1f/f6ab1fb6342f6d15987167542bc6145c.jpg')" }} >
          <div className="about-overlay absolute inset-0 bg-black/60"></div>         
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4">
            <h1 className="text-6xl md:text-5xl [@media(max-width:770px)]:text-[40px] font-extrabold text-white text-center leading-tight mb-4">
              Insights and Articles
            </h1>
            <div className="text-center text-white text-md font-semibold tracking-wide">
                <Link to={`/blog`} className="font-semibold text-white hover:text-b-orange transition duration-300">
                  Blogs
                </Link>
              <span className="mx-2 font-light opacity-80">|</span>
              <span className="font-bold text-b-orange">Insights and Articles</span>
            </div>
          </div>
        </div>

      {/* Blog List */}
      <div className="blog-cont text-black mx-[30px] mt-[-90px] z-40 bg-white shadow-xl rounded-lg py-[30px] px-[50px] md:px-[10px] sm:px-[20px]">
        <h5 className="font-semibold font-parkinsans text-[18px] px-[40px]">
          Recent Blog Posts
        </h5>

        <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 px-[40px] py-[20px]">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {post.sections[0].paragraphs[0].substring(0, 80)}...
                </p>
                <p className="text-xs text-gray-500 mt-[15px]">
                  By {post.author} | {post.date}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
