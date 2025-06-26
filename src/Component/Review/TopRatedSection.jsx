import React from "react";
import CountUp from "react-countup";

const cardData = [
  { id: 1, title: "Happy Clients", count: 300, description: "Satisfied customers" },
  { id: 2, title: "Projects Completed", count: 596, description: "Delivered projects" },
  { id: 3, title: "Awards Won", count: 260, description: "Recognized for excellence" },
];

const Card = ({ title, count, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 w-64 text-center hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <CountUp
      start={1}
      end={count}
      duration={5}  // count second e animate korbe
      separator=","
      className="text-4xl font-bold text-blue-600 mb-2"
    />
    <p className="text-gray-600">{description}</p>
  </div>
);

export const TopRatedSection = () => {
  return (
    <section className="py-12 bg-gray-200 text-black rounded-2xl">
      <h1 className="text-3xl font-bold text-center mb-10">Top Rated</h1>
      <div className="flex justify-center gap-8 flex-wrap">
        {cardData.map(({ id, title, count, description }) => (
          <Card
            key={id}
            title={title}
            count={count}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};
