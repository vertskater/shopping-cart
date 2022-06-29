import { useState } from "react";

import NavMenu from "./Nav/NavMenu";
import { Amount } from "./Shop/CartAmount";

function App() {
  const [amount, setAmount] = useState(0);
  const handleAmount = () => {
    setAmount(amount + 1);
  };
  return (
    <>
      <Amount.Provider value={amount}>
        <NavMenu handleAmount={handleAmount} />
      </Amount.Provider>
    </>
  );
}

export default App;
