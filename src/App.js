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
    setCartContent([
      ...cartContent,
      { ...product, amount: 1, singlePrice: product.price },
    ]);
  };
  //not finished
  const handle = {
    changeProduct: (product, amount) => {
      const items = cartContent;
      items.forEach((item) => {
        if (item.id === product.id) {
          item.price = parseInt(item.singlePrice, 10) * amount;
        }
      });
      setCartContent([...items]);
      console.log(cartContent);
    },
    incrementAmount: (product) => {
      const items = cartContent;
      items.forEach((item) => {
        if (item.id === product.id) {
          item.amount = item.amount + 1;
        }
      });
      setCartContent([...items]);
    },
    decrementAmount: (product) => {
      const items = cartContent;
      items.forEach((item) => {
        if (item.id === product.id) {
          item.amount = item.amount - 1;
        }
      });
      setCartContent([...items]);
    },
  };

  //not finished

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
          changeProduct={handle}
        />
      </Amount.Provider>
    </>
  );
}

export default App;
