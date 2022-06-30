import { useState } from "react";

import NavMenu from "./Nav/NavMenu";
import { Amount } from "./Shop/CartAmount";

function App() {
  const [amount, setAmount] = useState(0);
  const [cartContent, setCartContent] = useState([]);
  const handleAmount = () => {
    setAmount(amount + 1);
  };
  const addProduct = (product) => {
    setCartContent([...cartContent, product]);
  };
  return (
    <>
      <Amount.Provider value={amount}>
        <NavMenu
          handleAmount={handleAmount}
          addProduct={addProduct}
          cartContent={cartContent}
        />
      </Amount.Provider>
    </>
  );
}

export default App;
