import "./App.css";
import { Card } from "./components/card/Card";

function App() {
  const Cards = [
    {
      h3: "Free",
      p: "For Individuals",
      h2: "$0",
      h4: ["One Device", "Unlimited Download", "Editable Files", "1GB Storage"],
    },
    {
      h3: "Pro",
      p: "For Company",
      h2: "$80",
      h4: [
        "6 Devices",
        "Unlimited Download",
        "300+ icon Package",
        "Fully Editables Files",
        "500GB Storage",
      ],
    },
    {
      h3: "Enterprise",
      p: "For Team",
      h2: "$180",
      h4: [
        "12 Devices",
        "Unlimited Download",
        "3000 + icon Package",
        "Fully Editable Files",
        "2TB Storage",
        "5TB Data Transfer",
      ],
    },
  ];

  return Cards.map((card, index) => (
    <Card
      key={index}
      index={index}
      title={card.h3}
      body={card.p}
      footer={card.h2}
      sub={card.h4}
    />
  ));
}
export default App;
