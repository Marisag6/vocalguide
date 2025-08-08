import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div className="space-y-4">
      {comments.length === 0 ? (
        <p className="text-gray-500">Aún no hay comentarios.</p>
      ) : (
        comments.map((comment) => (
          <div key={comment.id} className="p-4 border rounded-lg bg-gray-50">
            <p className="font-semibold">{comment.author}</p>
            <p className="text-sm text-gray-500">{comment.date}</p>
            <p className="mt-2">{comment.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CommentList;
