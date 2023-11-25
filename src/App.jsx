import { useEffect, useState } from "react";

export default function App() {
  const [SIObj, setSIObj] = useState({
    principal: 1000,
    rate: 7,
    time: 5,
  });

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const newAmount = calculateSimpleInterest(SIObj);
    setAmount(newAmount);
  }, [SIObj.principal, SIObj.rate, SIObj.time]);

  const calculateSimpleInterest = (obj) => {
    const { principal, rate, time } = obj;
    return ((principal * rate * time) / 100).toFixed(2);
  };

  const handleInputChange = (event, field) => {
    const updatedSIObj = { ...SIObj };
    updatedSIObj[field] = event.target.value;
    setSIObj(updatedSIObj);
  };

  const [theme, setTheme] = useState("light");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="container mx-auto px-4 h-screen w-screen bg-gray-50 dark:bg-black">
      <h1 className="text-2xl font-bold text-center mb-4 dark:text-white ">
        SI Calculator!
      </h1>

      <button onClick={handleThemeSwitch}>🌞 </button>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-semibold mb-2 dark:text-white">
          Principal
        </label>
        <input
          id="principal"
          value={SIObj.principal}
          type="number"
          min={0}
          required
          className="w-full border rounded-md p-2"
          onChange={(event) => handleInputChange(event, "principal")}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-semibold mb-2 dark:text-white">
          Rate
        </label>
        <input
          id="rate"
          value={SIObj.rate}
          type="number"
          min={0}
          required
          className="w-full border rounded-md p-2"
          onChange={(event) => handleInputChange(event, "rate")}
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-semibold mb-2 dark:text-white">
          Time
        </label>
        <input
          id="time"
          value={SIObj.time}
          type="number"
          min={0}
          required
          className="w-full border rounded-md p-2"
          onChange={(event) => handleInputChange(event, "time")}
        />
      </div>

      <div
        id="simpleInterest"
        className="border rounded-md p-2 mt-4 dark:text-white"
      >
        Total Amount: {amount} Rs
      </div>
    </div>
  );
}
