import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { useContext, useState } from "react"; // useContextni qo'shish kerak
import { HouseContext } from "./HouseContext"; // HouseContextni import qilish

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext);
  // const { someData } = useContext(HouseContext); // HouseContextdan ma'lumot olish
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        className="dropdown-btn w-full text-left"
        onClick={() => setIsOpen(!isOpen)}>
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-primary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-primary" />
        )}
      </Menu.Button>
      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as="li"
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
              onClick={() => setProperty(property)}>
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
