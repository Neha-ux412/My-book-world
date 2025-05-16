import React, { useState } from 'react';

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = useState(false);

  const handleDownload = (filename) => {
    const link = document.createElement('a');
    link.href = `/books/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#eddeca] p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/5">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-[280px] object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-4/5">
          <div className="mb-3">
            <span className="text-gray-900 text-xl font-semibold">Title: </span>
            <h2 className="text-xl font-bold inline">{book.title}</h2>
          </div>
          
          <div className="mb-2">
            <span className="text-gray-900 text-xl font-semibold">Author: </span>
            <p className="text-base text-xl inline">{book.author}</p>
          </div>

          <div className="mb-2">
            <span className="text-gray-900 text-xl font-semibold">Genre: </span>
            <p className="text-m inline">{book.genre}</p>
          </div>

          <div className="mb-3">
            <span className="text-gray-900 text-m font-semibold">About: </span>
            <p className={`text-m inline ${expanded ? '' : 'line-clamp-2'}`}>
              {book.description}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-black hover:underline w-fit text-sm"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
            <div className="flex flex-wrap gap-2">
              {book.volumes.map((volume, index) => (
                <button
                  key={index}
                  onClick={() => handleDownload(volume.filename)}
                  className="bg-[#d4c4a9] text-black px-3 py-1.5 rounded-lg hover:bg-[#c4b499] transition-colors duration-200 text-sm"
                >
                  Download {volume.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
