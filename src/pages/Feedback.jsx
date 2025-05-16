import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    experience: '',
    improvements: '',
    bookRequests: '',
    rating: 5
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.experience) {
      alert('Thank you for your feedback!');
      setFeedback({
        experience: '',
        improvements: '',
        bookRequests: '',
        rating: 5
      });
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="bg-[#eddeca] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Share Your Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold mb-2">
              How was your experience with Book World?
            </label>
            <textarea
              value={feedback.experience}
              onChange={(e) => setFeedback({ ...feedback, experience: e.target.value })}
              className="w-full p-3 rounded-lg border-2 border-[#d4c4a9] h-32"
              placeholder="Share your thoughts about using the app..."
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">Rate Your Experience:</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFeedback({ ...feedback, rating: star })}
                  className="text-2xl"
                >
                  {star <= feedback.rating ? '⭐' : '☆'}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Any suggestions for improvement?
            </label>
            <textarea
              value={feedback.improvements}
              onChange={(e) => setFeedback({ ...feedback, improvements: e.target.value })}
              className="w-full p-3 rounded-lg border-2 border-[#d4c4a9] h-24"
              placeholder="What features would you like to see? How can we make it better?"
            />
          </div>

          <div>
            <label className="block text-lg font-semibold mb-2">
              Request Books
            </label>
            <textarea
              value={feedback.bookRequests}
              onChange={(e) => setFeedback({ ...feedback, bookRequests: e.target.value })}
              className="w-full p-3 rounded-lg border-2 border-[#d4c4a9] h-24"
              placeholder="Any specific books you'd like us to add to our collection?"
            />
          </div>

          <button
            type="submit"
            className="bg-[#d4c4a9] text-black px-6 py-3 rounded-lg hover:bg-[#c4b499] transition-colors duration-200 text-lg w-full"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;