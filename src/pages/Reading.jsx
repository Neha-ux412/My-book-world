import React, { useState } from 'react';

const Reading = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBookmark, setNewBookmark] = useState({
    title: '',
    pageNumber: '',
    symbol: '📚'
  });
  const [editingId, setEditingId] = useState(null);
  const [editPageNumber, setEditPageNumber] = useState('');

  const bookmarkSymbols = ['📚', '📖', '📗', '📘', '📙', '📕'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBookmark.title && newBookmark.pageNumber) {
      setBookmarks([...bookmarks, { ...newBookmark, id: Date.now() }]);
      setNewBookmark({ title: '', pageNumber: '', symbol: '📚' });
    }
  };

  const handleUpdate = (id) => {
    if (editingId === id && editPageNumber) {
      setBookmarks(bookmarks.map(bookmark => 
        bookmark.id === id 
          ? { ...bookmark, pageNumber: editPageNumber }
          : bookmark
      ));
      setEditingId(null);
      setEditPageNumber('');
    } else {
      setEditingId(id);
      setEditPageNumber(bookmarks.find(b => b.id === id).pageNumber);
    }
  };

  const handleRemove = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
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
              + Add Reading Progress
            </button>
          ) : (
            <div className="bg-[#eddeca] p-5 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold">Add Reading Progress</h2>
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
                    value={newBookmark.title}
                    onChange={(e) => setNewBookmark({ ...newBookmark, title: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base"
                    placeholder="Enter book title"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold mb-1">Current Page:</label>
                  <input
                    type="number"
                    value={newBookmark.pageNumber}
                    onChange={(e) => setNewBookmark({ ...newBookmark, pageNumber: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base"
                    placeholder="Enter current page number"
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold mb-1">Choose Bookmark Symbol:</label>
                  <div className="flex gap-2 flex-wrap">
                    {bookmarkSymbols.map((symbol) => (
                      <button
                        key={symbol}
                        type="button"
                        onClick={() => setNewBookmark({ ...newBookmark, symbol })}
                        className={`text-xl p-2 rounded-lg ${
                          newBookmark.symbol === symbol ? 'bg-[#d4c4a9]' : 'bg-white'
                        }`}
                      >
                        {symbol}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#d4c4a9] text-black px-4 py-2 rounded-lg hover:bg-[#c4b499] transition-colors duration-200 text-base mt-2 w-full"
                >
                  Add Bookmark
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right side - Bookmarks List */}
        <div className="w-2/3 space-y-3">
          {bookmarks.map((bookmark) => (
            <div key={bookmark.id} className="bg-[#eddeca] p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{bookmark.symbol}</span>
                    <h3 className="text-xl font-semibold">{bookmark.title}</h3>
                  </div>
                  {editingId === bookmark.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={editPageNumber}
                        onChange={(e) => setEditPageNumber(e.target.value)}
                        className="p-1 rounded border-2 border-[#d4c4a9] w-20 text-sm"
                      />
                      <span className="text-xs text-gray-600">Press Update to save</span>
                    </div>
                  ) : (
                    <p className="text-base">Currently on page: {bookmark.pageNumber}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(bookmark.id)}
                    className="bg-[#d4c4a9] text-black px-4 py-1 rounded-lg hover:bg-[#c4b499] transition-colors duration-200"
                  >
                    {editingId === bookmark.id ? 'Save' : 'Update'}
                  </button>
                  <button
                    onClick={() => handleRemove(bookmark.id)}
                    className="bg-[#d4c4a9] text-black px-4 py-1 rounded-lg hover:bg-[#c4b499] transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reading;