import React, { useState } from 'react';

const Read = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: '',
    rating: 5,
    comments: '',
    favoritePages: '',
    emoji: '📚'
  });

  const emojis = ['⚡', '💖', '✨', '💋', '💥', '💫', '🔥', '🎇', '😘', '😚'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.comments) {
      setReadBooks([...readBooks, { ...newBook, id: Date.now() }]);
      setNewBook({
        title: '',
        rating: 5,
        comments: '',
        favoritePages: '',
        emoji: '📚'
      });
    }
  };

  const handleRemove = (id) => {
    setReadBooks(readBooks.filter(book => book.id !== id));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-4">
        {/* Left side - Form */}
        <div className="w-1/3">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#eddeca] text-black px-4 py-2 rounded-lg hover:bg-[#d4c4a9] transition-colors duration-200 w-full"
            >
              + Add Read Book
            </button>
          ) : (
            <div className="bg-[#eddeca] p-5 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold">Add Read Book</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-600 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-base font-semibold mb-1">Book Title:</label>
                  <input
                    type="text"
                    value={newBook.title}
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base"
                    placeholder="Enter book title"
                  />
                </div>
                
                <div>
                  <label className="block text-base font-semibold mb-1">Rating:</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewBook({ ...newBook, rating: star })}
                        className="text-xl"
                      >
                        {star <= newBook.rating ? '⭐' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold mb-1">Your Comments:</label>
                  <textarea
                    value={newBook.comments}
                    onChange={(e) => setNewBook({ ...newBook, comments: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base h-24"
                    placeholder="Share your thoughts about the book..."
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-1">Favorite Pages/Chapters:</label>
                  <input
                    type="text"
                    value={newBook.favoritePages}
                    onChange={(e) => setNewBook({ ...newBook, favoritePages: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base"
                    placeholder="e.g., Chapter 5, Page 123-125"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-1">Choose an Emoji:</label>
                  <div className="flex gap-2 flex-wrap">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setNewBook({ ...newBook, emoji })}
                        className={`text-xl p-2 rounded-lg ${
                          newBook.emoji === emoji ? 'bg-[#d4c4a9]' : 'bg-white'
                        }`}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#d4c4a9] text-black px-4 py-2 rounded-lg hover:bg-[#c4b499] transition-colors duration-200 text-base mt-2 w-full"
                >
                  Add to Read List
                </button>
              </form>
            </div>
          )}
        </div>

       
        <div className="w-2/3 space-y-3">
          {readBooks.map((book) => (
            <div key={book.id} className="bg-[#eddeca] p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{book.emoji}</span>
                    <h3 className="text-xl font-semibold">{book.title}</h3>
                  </div>
                  <div className="mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className="text-xl">
                        {index < book.rating ? '⭐' : '☆'}
                      </span>
                    ))}
                  </div>
                  <p className="text-base mb-2">{book.comments}</p>
                  {book.favoritePages && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Favorite Parts:</span> {book.favoritePages}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => handleRemove(book.id)}
                  className="bg-[#d4c4a9] text-black px-4 py-1 rounded-lg hover:bg-[#c4b499] transition-colors duration-200 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Read;