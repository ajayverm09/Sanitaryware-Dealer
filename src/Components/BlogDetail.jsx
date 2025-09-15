import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import blogData from './BlogData';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogData.find((item) => item.id === parseInt(id));
    setBlog(foundBlog);
  }, [id]);

  const relatedPosts = blogData
    .filter((item) => item.id !== parseInt(id))
    .slice(0, 3);

  if (!blog) {
    return <div className="text-center py-10 text-gray-600 text-lg font-medium">Blog post not found.</div>;
  }

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Blog Content */}
      <motion.div className="lg:col-span-2" variants={itemVariants}>
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900">{blog.title}</h1>
        <p className="text-gray-500 mb-6 sm:mb-8 italic">Published on {blog.date}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8 shadow-lg"
        />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed tracking-wide">
          Discover how premium sanitaryware can transform your bathroom into a space of
          elegance and comfort. From modern faucets to water-saving toilets, our collection
          combines durability, functionality, and style. Learn the latest trends in bathroom
          interiors, maintenance tips, and how to choose the perfect fittings for your home.
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="mt-10 px-6 py-3 bg-[#b18050] hover:bg-[#9a673d] text-white font-semibold rounded-md shadow-md transition-colors duration-300"
          aria-label="Back to blog"
        >
          ← Back to Blog
        </button>
      </motion.div>

      {/* Related Blogs */}
      <motion.div className="space-y-8" variants={itemVariants}>
        <h2 className="text-2xl font-semibold mb-6 border-b border-gray-300 pb-3 text-gray-900">Related Articles</h2>
        {relatedPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link to={`/blog/${post.id}`} className="block group">
              <div className="flex gap-4 items-center">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-24 h-20 object-cover rounded-md shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <div>
                  <p className="text-sm text-[#b18050] mb-1">{post.date}</p>
                  <h3 className="text-md font-semibold text-gray-900 group-hover:text-[#b18050] transition-colors">
                    {post.title.length > 45
                      ? post.title.slice(0, 45) + '...'
                      : post.title}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default BlogDetail;
