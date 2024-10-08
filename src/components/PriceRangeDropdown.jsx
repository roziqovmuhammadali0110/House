import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "Price range (any)"
    },
    {
      value: "100000 - 130000"
    },
    {
      value: "130000 - 160000"
    },
    {
      value: "160000 - 190000"
    },
    {
      value: "190000 - 220000"
    },
    {
      value: "10000 - 30000"
    },
    {
      value: "30000 - 40000"
    }
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}>
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{price}</div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-primary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-primary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {prices.map((priceOption, index) => {
          return (
            <Menu.Item
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
              onClick={() => setPrice(priceOption.value)}>
              {" "}
              {/* Faqat value ni o'rnatish */}
              {priceOption.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
