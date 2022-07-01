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
  const deleteProduct = (product) => {
    const newList = cartContent.filter((item) => item.id !== product.id);
    setCartContent(newList);
    setAmount(amount - 1);
  };
  return (
    <>
      <Amount.Provider value={amount}>
        <NavMenu
          handleAmount={handleAmount}
          addProduct={addProduct}
          cartContent={cartContent}
          deleteProduct={deleteProduct}
        />
      </Amount.Provider>
    </>
  );
}

export default App;
