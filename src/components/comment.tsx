"use client"
import React, { useState } from "react";

export default function CommentsSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>("");

  const addComment = () => {
    if (commentText.trim()) {
      setComments([...comments, commentText]); // Add the comment
      setCommentText(""); // Clear the input field
    }
  };

  const deleteComment = (index: number) => {
    setComments(comments.filter((_, i) => i !== index)); // Remove the comment at the specified index
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Heading and Intro Paragraph */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-2">Comments Section</h1>
        <p className="text-gray-400 text-center">
          Share your thoughts below and see what others have to say!
        </p>
      </header>

      {/* Input Section */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="flex-grow p-2 border rounded"
          placeholder="Write a comment..."
        />
        <button
          onClick={addComment}
          className="dark:bg-cyan-600 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-400"
        >
          Post
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 border-b"
              >
                <span>{comment}</span>
                <button
                  onClick={() => deleteComment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
