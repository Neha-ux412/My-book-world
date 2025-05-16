import React, { useState } from 'react';

const FavoritePicks = () => {
  const [favorites, setFavorites] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newFavorite, setNewFavorite] = useState({
    title: '',
    reason: '',
    emoji: '💖'
  });

  const emojis = ['💖', '✨', '🌟', '💫', '⚡', '🔥', '💎', '💋', '👄', '😘', '😚'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFavorite.title && newFavorite.reason) {
      setFavorites([...favorites, { ...newFavorite, id: Date.now() }]);
      setNewFavorite({
        title: '',
        reason: '',
        emoji: '💖'
      });
      setShowForm(false);
    }
  };

  const handleRemove = (id) => {
    setFavorites(favorites.filter(favorite => favorite.id !== id));
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
              + Add Favorite Book
            </button>
          ) : (
            <div className="bg-[#eddeca] p-5 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-xl font-bold">Add Favorite Book</h2>
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
                    value={newFavorite.title}
                    onChange={(e) => setNewFavorite({ ...newFavorite, title: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base"
                    placeholder="Enter book title"
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-1">Why is it your favorite?</label>
                  <textarea
                    value={newFavorite.reason}
                    onChange={(e) => setNewFavorite({ ...newFavorite, reason: e.target.value })}
                    className="w-full p-2 rounded-lg border-2 border-[#d4c4a9] text-base h-24"
                    placeholder="Share why you love this book..."
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold mb-1">Choose an Emoji:</label>
                  <div className="flex gap-2 flex-wrap">
                    {emojis.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        onClick={() => setNewFavorite({ ...newFavorite, emoji })}
                        className={`text-xl p-2 rounded-lg ${
                          newFavorite.emoji === emoji ? 'bg-[#d4c4a9]' : 'bg-white'
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
                  Add to Favorites
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Right side - Favorites List */}
        <div className="w-2/3 space-y-3">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="bg-[#eddeca] p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{favorite.emoji}</span>
                    <h3 className="text-xl font-semibold">{favorite.title}</h3>
                  </div>
                  <p className="text-base">{favorite.reason}</p>
                </div>
                <button
                  onClick={() => handleRemove(favorite.id)}
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

export default FavoritePicks;