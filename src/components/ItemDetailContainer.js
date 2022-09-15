import React, { useState, useEffect } from "react";
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const cafeBD = [
  {
    id: 1,
    tipo:'Whole Bean',
    categoria: "reserve",
    stock: 10,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://globalassets.starbucks.com/assets/8bbee51774bb4ee79553e7b911a7807b.jpg?impolicy=1by1_medium_630\      ",
    name: "Hawai'i Ka‘u",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 2,
    tipo:'Whole Bean',
    categoria: "reserve",
    stock: 11,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:"https://globalassets.starbucks.com/assets/3b9ffedbbd7341fda7887bd7def1a6b3.jpg?impolicy=1by1_medium_630",
    name: "Costa Rica Naranjo",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 3,
    tipo:'Whole Bean',
    categoria: "reserve",
    stock: 12,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://globalassets.starbucks.com/assets/09c15ddea6b04dc8a4151e273692307d.jpg?impolicy=1by1_medium_630      ",
    name: "Vietnam Da Lat",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 4,
    tipo:'Whole Bean',
    categoria: "reserve",
    stock: 13,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://globalassets.starbucks.com/assets/b16e8078e4584a06b66a2ab0fb4a4e0a.jpg?impolicy=1by1_medium_630",
    name: "Sun-Dried Zambia Ngoli",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 5,
    tipo:'Whole Bean',
    categoria: "reserve",
    stock: 14,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/ee5e2a54ceeb42319dde7259f15f27d5.jpg?impolicy=1by1_medium_630',    
    name: "Rwanda Hingakawa",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 6,
    tipo:'Whole Bean',
    categoria: "blonde-roast",
    stock: 15,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://globalassets.starbucks.com/assets/9f1e696dfebf4e43b706dff28840debe.jpg?impolicy=1by1_medium_630",
    name: "Blonde Espresso Roast",
    precio: "$17.99",
    cantidad: "250g",
  },
  {
    id: 7,
    tipo:'Whole Bean',
    categoria: "blonde-roast",
    stock: 16,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:
      "https://globalassets.starbucks.com/assets/7ecdba6f53364ac1b931b40c4b11f9f1.jpg?impolicy=1by1_medium_630      ",
    name: "Veranda Blend",
    precio: "$17.99",
    cantidad: "453g",
  },
  {
    id: 8,
    tipo:'Whole Bean',
    categoria: "medium-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/dcd3cea3f1d24561a8bd4571bee90fac.jpg?impolicy=1by1_medium_630',
    name: "Guatemala Casi Cielo",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 9,
    tipo:'Whole Bean',
    categoria: "medium-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/9779bf438c8c410cb75c61827e40baa2.jpg?impolicy=1by1_medium_630    ',
    name: "Siren's Blend",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 10,
    tipo:'Whole Bean',
    categoria: "medium-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/2f673d715cd1453fa1673ad04d08fb2d.jpg?impolicy=1by1_medium_630',
    name: "Guatemala Antigua",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 11,
    tipo:'Whole Bean',
    categoria: "medium-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/67925c5957eb4a27a68a6262552a7b9a.jpg?impolicy=1by1_medium_630',
    name: "Pike Place Roast",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 12,
    tipo:'Whole Bean',
    categoria: "medium-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/e6505ad36e834316971607823270cdab.jpg?impolicy=1by1_medium_630',
    name: "Organic Yukon Blend",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 13,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/6b684fdb10a843c88f7e6ddcc2bd9cb5.jpg?impolicy=1by1_medium_630',
    name: "Decaf Sumatra",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 14,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/32355dbaa8634b11b9cbee138046bab9.jpg?impolicy=1by1_medium_630https://globalassets.starbucks.com/assets/a48597800f844315a64a06a060358b45.jpg?impolicy=1by1_medium_630    ',
    name: "Caffe Verona",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 15,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/03047ecfd68d4767a0116b267ab1930f.jpg?impolicy=1by1_medium_630    ',
    name: "Espresso Roast",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 16,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/a48597800f844315a64a06a060358b45.jpg?impolicy=1by1_medium_630',
    name: "Italian Roast",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 17,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/bce63b62a7c840ab96e1c761de1834a4.jpg?impolicy=1by1_medium_630',
    name: "Komodo Dragon Blend",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 18,
    tipo:'Whole Bean',
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image:'https://globalassets.starbucks.com/assets/a357a730a46747fd86ab26540480e44c.jpg?impolicy=1by1_medium_630',
    name: "Sumatra",
    precio: "$28.99",
    cantidad: "453g",
  },
];

const ItemDetailContainer = () => {
  const [Cafes, setCafes] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    customFetch(
      2000,
      cafeBD.find((item) => item.id == idItem)
    )
      .then((result) => setCafes(result))
      .catch((err) => console.log(err));
  }, [idItem]);

  return (
    <div className="Gallery">
      <ItemDetail items={Cafes} />
    </div>
  );
};

export default ItemDetailContainer;
