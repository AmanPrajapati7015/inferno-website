'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'



const initialPosts = [
  {
    id: 1,
    author: "RoverEnthusiast",
    title: "Thoughts on our new wheel design?",
    content: "I've been looking at the latest wheel design for AROHN. What do you all think about the traction pattern?",
    likes: 15,
    comments: 7
  },
  {
    id: 2,
    author: "MarsScienceGuru",
    title: "Potential sites for sample collection",
    content: "I've identified some interesting geological formations that might be good candidates for our next sample collection mission. Let's discuss!",
    likes: 23,
    comments: 12
  },
  {
    id: 3,
    author: "AINavigator",
    title: "Improving our autonomous navigation",
    content: "I have some ideas on how we can enhance our rover's ability to navigate complex terrain. Who wants to collaborate on this?",
    likes: 18,
    comments: 9
  }
]

export default function Community() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ title: '', content: '' })

  // const handleLike = (id: number) => {
  //   setPosts(posts.map(post => 
  //     post.id === id ? { ...post, likes: post.likes + 1 } : post
  //   ))
  // }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newPost.title && newPost.content) {
      setPosts([
        {
          id: posts.length + 1,
          author: "NewUser",
          title: newPost.title,
          content: newPost.content,
          likes: 0,
          comments: 0
        },
        ...posts
      ])
      setNewPost({ title: '', content: '' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Inferno Community Forum
        </h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Post Title"
              value={newPost.title} 
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="w-full p-2 bg-gray-800 rounded"
            />
            <textarea
              placeholder="Post Content"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="w-full p-2 bg-gray-800 rounded h-24"
            />
            <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Submit Post
            </button>
          </form>
        </div>
        
        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-2">Posted by {post.author}</p>
              <p className="mb-4">{post.content}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center space-x-1 text-red-500 hover:text-red-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>{post.likes}</span>
                </button>
                <span className="text-gray-400">{post.comments} comments</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

