
function Blog() {
      const blogPosts = [
        {
          id: 1,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog1",
        },
        {
          id: 2,
          title: "lorem ipsum dolor sit amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23 Sept, 2025",
          link: "/blog/blog2",
        },
        {
          id: 3,
          title: "lorem ipsum dolor sit amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23 Sept, 2025",
          link: "/blog/blog3",
        },
        {
          id: 4,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog4",
        },
        {
          id: 5,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog5",
        },
        {
          id: 6,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog6",
        },
        {
          id: 7,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog7",
        },
        {
          id: 8,
          title: "Lorem Ipsum Dolor Sit Amet",
          context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros. aut convallis. bendit.",
          image: "https://i.pinimg.com/736x/6c/1a/d9/6c1ad9b17042d2db57bb9eff96483590.jpg",
          author: "Mumbi Sylvia",
          date: "23rd Sept, 2025",
          link: "/blog/blog8",
        },
      ];

      return (
        <div className="blog-section">
          <div className="relative h-64 w-full bg-cover bg-center" style={{
              backgroundImage: "url('https://i.pinimg.com/736x/83/4c/85/834c8525f9071792434d476fdb5fdd7e.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <h1 className="text-5xl font-bold text-white text-center absolute inset-0 flex items-center justify-center z-10">
              Insights and Articles
            </h1>
          </div>

          <div className="blog-cont m-[30px] bg-white p-[13px] text-black">
            <h5 className="font-semibold font-parkinsans text-[18px] px-[40px]">Recent Blog Posts</h5>

            <div className="blog-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 px-[40px] py-[20px]">
              {blogPosts.map((post) => (
                <div key={post.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-600 mt-2">{post.context}</p>
                    <p className="text-xs text-gray-500 mt-[15px]">By {post.author} | {post.date}</p>
                    <a href={post.link} className="inline-block mt-4 text-blue-600 font-semibold hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }


export default Blog