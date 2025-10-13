// src/components/BlogDetails.jsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "./blogData";

function BlogDetails() {
  const { slug } = useParams();
  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Blog not found 😔</h2>
        <Link to="/blog" className="text-blue-600 hover:text-blue-800">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 mt-[80px]">
      <h1 className="text-4xl font-bold mb-[20px] tracking-wide leading-[45px]">{blog.title}</h1>
       <p className="text-gray-500 mb-[10px] font-parkinsans text-sm">
        Author: {blog.author} • {blog.date}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-screen h-[400px] object-cover rounded-xl mb-6 pt-[20px] min-w-5xl"
      />
     

      {blog.sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            {section.subtitle}
          </h2>

          {section.paragraphs &&
            section.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-700 mb-3 leading-relaxed font-parkinsans">
                {para}
              </p>
            ))}

          {section.bullets && (
            <ul className="list-disc ml-6 text-gray-700 space-y-2 font-parkinsans">
              {section.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-10">
        <Link
          to="/blog"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}

export default BlogDetails;
