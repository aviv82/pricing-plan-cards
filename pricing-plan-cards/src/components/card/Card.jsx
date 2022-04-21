import "./Card.css";
const Cards = [
  { h3: "Free", p: "For Individuals", h2: "$0" },
  { h3: "Pro", p: "For Company", h2: "$80" },
  { h3: "Enterprise", p: "For Team", h2: "$180" },
];
export const Card = (Cards) => {
  return (
    <div className="card">
      <h3>{Cards.h3}</h3>
      <p>{Cards.p}</p>
      <h2>{Cards.h2}</h2>
    </div>
  );
};
