import "./App.css";
import Layout from "./components/Layout";

function App() {
  const receipts = [
    {
      person: "Andre",
      order: {
        main: "Burrito",
        protein: "Organic Tofu",
        rice: "Purple Rice",
        sauce: "Green Crack",
        toppings: ["Baby Bok Choy", "Cucumber Kimchi"],
        drink: "Korchata",
        cost: 22,
      },
      paid: false,
    },
    {
      person: "Katelyn",
      order: {
        main: "Rice Bowl",
        protein: "Ginger Soy Chix",
        rice: "Sticky Rice",
        sauce: "Korilla",
        toppings: ["Yuzu Pickled Sweet Pepper", "Kale"],
        drink: "Korchata",
        cost: 19,
      },
      paid: false,
    },
    {
      person: "Bruno",
      order: {
        main: "Salad Bowl",
        protein: "Organic Tofu",
        rice: "none",
        sauce: "K'lla",
        toppings: ["Blue Potato Salad", "Pico De Gallo", "Red Kimchi"],
        drink: "Sparkling Blood Orange Soda",
        cost: 20,
      },
      paid: true,
    },
    {
      person: "Julian",
      order: {
        main: "Mega Taco",
        protein: "Steak",
        rice: "White",
        sauce: "Green Chili",
        toppings: ["Cheese", "Pico De Gallo", "Corn"],
        drink: "Sparkling Blackberry Izze",
        cost: 12,
      },
      paid: true,
    },
    {
      person: "Lion",
      order: {
        main: "Antelope",
        protein: "Veal",
        rice: "none",
        sauce: "Red Fear Juice",
        toppings: ["Antelope hide", "Fur", "Muscle"],
        drink: "Red Fear Juice",
        cost: 0,
      },
      paid: true,
    },
  ];

  return (
    <div className="App">
      <Layout records={receipts} />
    </div>
  );
}

export default App;
