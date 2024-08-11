import {
  AiFillMobile,
  AiOutlineDesktop,
  AiOutlineLaptop,
  AiFillHome
} from "react-icons/ai";
import { MdMicrowave, MdOutlineKeyboard, MdStorefront, MdTv, MdWatch } from "react-icons/md";
import { FaTshirt} from "react-icons/fa";

// export const categories = [
//   {
//     label: "All",
//     icon: MdStorefront,
//   },
//   {
//     label: "Phone",
//     icon: AiFillMobile,
//   },
//   {
//     label: "Laptop",
//     icon: AiOutlineLaptop,
//   },
//   {
//     label: "Desktop",
//     icon: AiOutlineDesktop,
//   },
//   {
//     label: "Watch",
//     icon: MdWatch,
//   },
//   {
//     label: "TV",
//     icon: MdTv,
//   },
//   {
//     label: "Accesories",
//     icon: MdOutlineKeyboard,
//   },
// ];

export const categories = [
  {
    label: "Categories",
    icon: MdStorefront,
  },
  {
    label: 'Electronics',
    subcategories: [{label:'Phone'}, {label:'Laptop'}, {label:'Headphones'}],
    icon: AiFillMobile,
  },
  {
    label: 'Appliances',
    subcategories: [{label:'Refrigerator'}, {label:'Washing Machine'}, {label:'Microwave'}],
    icon: MdMicrowave,
  },
  {
    label: 'Clothing',
    subcategories: [{label:'Men'}, {label:'Women'}, {label:'Kids'}],
    icon: FaTshirt, 
  },
  {
    label: 'Furniture',
    subcategories: [{label:'Sofas'}, {label:'Chairs'}, {label:'Tables'}],
    icon: AiFillHome
  }
];

