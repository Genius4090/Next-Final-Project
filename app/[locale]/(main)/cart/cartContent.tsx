"use client";
import { CartItem } from "@/@types";
import CartFood from "@/components/CartCard";
import { Button } from "@/components/ui/button";

const CartContent = ({ cartList }: { cartList: CartItem[] }) => {
  const total = cartList.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="py-21 containers max-h-[800px] flex px-20 gap-4">
      <div className="w-[72%]  overflow-y-scroll  h-[800px]  bg-white flex rounded flex-col p-5">
        <div className="pb-4">
          <h2 className="font-bold text-2xl ">Your Cart</h2>
          <p className="font-semibold text-gray-700 mt-1">
            ({cartList.length}) item ships at checkout
          </p>
        </div>
        <ul className="flex flex-col gap-5">
          {cartList.map((item) => (
            <CartFood key={item.id} item={item} />
          ))}
        </ul>
      </div>

      <div className="bg-white w-[28%]  rounded px-4 py-4 flex flex-col justify-start">
        <h2 className="font-semibold text-xl">Summary</h2>

        <ul className="mt-5 flex flex-col gap-2 ">
          {cartList.map((item) => (
            <li key={item.id} className="flex justify-between">
              <h2>{item.product.name}</h2>
              <div className="flex gap-6">
                <p>{item.quantity} x</p>
                <p>${item.product.price}</p>
              </div>
            </li>
          ))}

          <div className="h-px bg-black w-full my-4"></div>
        </ul>

        <div className="w-full flex flex-col items-center gap-4 mt-5">
          <div className="flex w-full justify-between items-center">
            <p className="text-lg">Total:</p>
            <p>{total}</p>
          </div>
          <Button className="w-full py-5 rounded">Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
