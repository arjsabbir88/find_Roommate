import React, { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    profile: "https://randomuser.me/api/portraits/women/1.jpg",
    review:
      "Amazing service! Highly recommend to everyone.",
  },
  {
    id: 2,
    name: "Bob Smith",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "Professional and timely delivery. Very happy!",
  },
  {
    id: 3,
    name: "Clara Lee",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
    review:
      "Exceeded my expectations in every way.",
  },
  {
    id: 4,
    name: "David Kim",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
    review:
      "Great communication and quality work.",
  },
  {
    id: 5,
    name: "Eva Green",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
    review:
      "Will definitely use again. Five stars!",
  },
];

export const BestReviews = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  // Optional: Automatically update center focus on interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % reviews.length);
    }, 4000); // 4 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 bg-gray-100 overflow-hidden text-black rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">Best Reviews</h2>

      <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center gap-6 overflow-visible select-none">
        {/* Container for the cards - marquee effect */}
        <div
          className="flex gap-6"
          style={{
            animation: "marquee 20s linear infinite",
            willChange: "transform",
          }}
        >
          {/* Duplicate reviews for seamless loop */}
          {[...reviews, ...reviews].map((review, i) => {
            // Calculate index relative to original reviews length
            const idx = i % reviews.length;
            // Determine focus relative to centerIndex
            const distance = Math.min(
              Math.abs(idx - centerIndex),
              reviews.length - Math.abs(idx - centerIndex)
            );

            // Styles for focused & side cards
            let scale = 0.8;
            let opacity = 0.4;
            if (distance === 0) {
              scale = 1;
              opacity = 1;
            } else if (distance === 1) {
              scale = 0.9;
              opacity = 0.7;
            }

            return (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg p-6 w-72 flex flex-col items-center text-center transition-transform duration-500"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                  flexShrink: 0,
                }}
              >
                <img
                  src={review.profile}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-3">"{review.review}"</p>
                <h3 className="font-semibold text-lg text-gray-900">
                  {review.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Marquee keyframes */}
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
    </section>
  );
};

