import React, { useState, useEffect } from "react";
import customFetch from "./customFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

const cafeBD = [
  {
    id: 1,
    tipo: "Whole Bean",
    categoria: "reserve",
    stock: 5,
    descripcion:
      "White Peach, Hazelnut & Citrus Zest Located on the south side of the Big Island, Ka‘u is home to black-sand beaches and a close-knit coffee community. Stepping out of the shadow of its neighbor, Kona, Ka‘u has become a coveted micro-origin.",
    image:
      "https://globalassets.starbucks.com/assets/8bbee51774bb4ee79553e7b911a7807b.jpg?impolicy=1by1_medium_630",
    name: "Hawai'i Ka‘u",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 2,
    tipo: "Whole Bean",
    categoria: "reserve",
    stock: 6,
    descripcion:
      "Apricot & Almond, the brilliant hues of the Costa Rican oxcart celebrate coffee’s vitality in the Naranjo region, where smallholder farmers in the Naranjo Cooperative worked together to produce this elevated lot rooted in community pride.",
    image:
      "https://globalassets.starbucks.com/assets/3b9ffedbbd7341fda7887bd7def1a6b3.jpg?impolicy=1by1_medium_630",
    name: "Costa Rica Naranjo",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 3,
    tipo: "Whole Bean",
    categoria: "reserve",
    stock: 7,
    descripcion:
      "Bittersweet Chocolate & Dried Orange Peel Anchored by the city of Da Lat, Vietnam’s Lam Dong Province provides a dreamlike setting for coffee cultivation—mist-shrouded pine forests, cool temperatures and volcanic soil. Farmers load just-picked coffee cherries onto small motorbikes and travel over rugged terrain to deliver high-quality crops. Their dedication culminates in this—a coffee every bit as distinctive as the land from which it came.",
    image:
      "https://globalassets.starbucks.com/assets/09c15ddea6b04dc8a4151e273692307d.jpg?impolicy=1by1_medium_630",
    name: "Vietnam Da Lat",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 4,
    tipo: "Whole Bean",
    categoria: "reserve",
    stock: 8,
    descripcion:
      "Sweet Date, Black Currant & Grapefruit Zest.Cultivated at the Ngoli Estate in the remote Mafinga Hills, this coffee was meticulously handpicked to ensure the highest quality. This level of care extends to community apiaries on the estate, where responsible beekeeping practices generate additional income for farmers and their families while fostering a healthier ecosystem for future generations.",
    image:
      "https://globalassets.starbucks.com/assets/b16e8078e4584a06b66a2ab0fb4a4e0a.jpg?impolicy=1by1_medium_630",
    name: "Sun-Dried Zambia Ngoli",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 5,
    tipo: "Whole Bean",
    categoria: "reserve",
    stock: 9,
    descripcion:
      "Meyer Lemon & Ginger. Specialty coffee is a profoundly human endeavor. Nowhere is this more evident than in Rwanda, where the all-female farmer cooperative of Hingakawa is turning out coffees of rare elegance and enduring hope.",
    image:
      "https://globalassets.starbucks.com/assets/ee5e2a54ceeb42319dde7259f15f27d5.jpg?impolicy=1by1_medium_630",
    name: "Rwanda Hingakawa",
    precio: "$20.00",
    cantidad: "250g",
  },
  {
    id: 6,
    tipo: "Whole Bean",
    categoria: "blonde-roast",
    stock: 10,
    descripcion:
      "Drawing on four decades of coffee artistry, we set out to craft an espresso that delivers a softer, more balanced taste to your cup and blends beautifully with milk. We started by combining select Latin American and East African beans, and then carefully roasted them to coax out their sweet, vibrant notes. The result is delightfully well-rounded and wonderfully versatile—delicious hot or served over ice.",
    image:
      "https://globalassets.starbucks.com/assets/9f1e696dfebf4e43b706dff28840debe.jpg?impolicy=1by1_medium_630",
    name: "Blonde Espresso Roast",
    precio: "$24.99",
    cantidad: "453g",
  },
  {
    id: 7,
    tipo: "Whole Bean",
    categoria: "blonde-roast",
    stock: 11,
    descripcion:
      "In Latin America, coffee farms are often run by families, with their own homes on the same land where their coffee grows. We’ve sipped coffee with these farmers for decades, sitting on their verandas, overlooking the lush beauty of the coffee trees rolling out in the distance. Most times it was a lightly roasted coffee like this one. It took us more than 80 tries to get it right—mellow and flavorful with a nice softness.",
    image:
      "https://globalassets.starbucks.com/assets/7ecdba6f53364ac1b931b40c4b11f9f1.jpg?impolicy=1by1_medium_630",
    name: "Veranda Blend",
    precio: "$17.99",
    cantidad: "453g",
  },
  {
    id: 8,
    tipo: "Whole Bean",
    categoria: "medium-roast",
    stock: 12,
    descripcion:
      "Straight from select farms in Guatemala’s high-altitude, volcanic Antigua region, this batch of single-origin Guatemala Casi Cielo® represents our finest possible expression of one of our most-beloved coffee origins. Harvested just once a year, this coffee—both bright and smooth with lemon and dark cocoa notes—is not to be missed.",
    image:
      "https://globalassets.starbucks.com/assets/dcd3cea3f1d24561a8bd4571bee90fac.jpg?impolicy=1by1_medium_630",
    name: "Guatemala Casi Cielo",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 9,
    tipo: "Whole Bean",
    categoria: "medium-roast",
    stock: 13,
    descripcion:
      "The bright flavors of this medium roast are inspired—and created—by trailblazing women of the coffee industry. The juicy, citrusy and chocolaty blend combines coffee from East Africa and Latin America. Named for the Siren that symbolizes Starbucks, this blend honors the innovations of women, from farmer to roaster to barista.",
    image:
      "https://globalassets.starbucks.com/assets/9779bf438c8c410cb75c61827e40baa2.jpg?impolicy=1by1_medium_630",
    name: "Siren's Blend",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 10,
    tipo: "Whole Bean",
    categoria: "medium-roast",
    stock: 14,
    descripcion:
      "Coffee from the Antigua Valley of Guatemala is the touchstone of quality. Here farmers take enormous pride in traditions, resulting in consistent flavor, cup after cup—lemon, chocolate and soft spice notes with an elegant mouthfeel unique to this region. It’s why we loved this coffee back in ’71, and why we love it today.",
    image:
      "https://globalassets.starbucks.com/assets/2f673d715cd1453fa1673ad04d08fb2d.jpg?impolicy=1by1_medium_630",
    name: "Guatemala Antigua",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 11,
    tipo: "Whole Bean",
    categoria: "medium-roast",
    stock: 15,
    descripcion:
      "From our first store in Seattle’s Pike Place Market to our coffeehouses around the world, customers requested a freshly brewed coffee they could enjoy throughout the day. In 2008 our master blenders and roasters created this for you—a smooth, well-rounded blend of Latin American coffees with subtly rich flavors of chocolate and toasted nuts, it’s served fresh every day at a Starbucks® store near you.",
    image:
      "https://globalassets.starbucks.com/assets/67925c5957eb4a27a68a6262552a7b9a.jpg?impolicy=1by1_medium_630",
    name: "Pike Place Roast",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 12,
    tipo: "Whole Bean",
    categoria: "medium-roast",
    stock: 16,
    descripcion:
      "Lively acidity and deep, earthy notes meld together in this classic blend. When you taste it, you get the balance and brightness of Latin American coffees along with the heft and the lingering herbal spiciness from Sumatran beans. Hearty, rugged and untamed—simply a great coffee.",
    image:
      "https://globalassets.starbucks.com/assets/e6505ad36e834316971607823270cdab.jpg?impolicy=1by1_medium_630",
    name: "Organic Yukon Blend",
    precio: "$18.99",
    cantidad: "453g",
  },
  {
    id: 13,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 17,
    descripcion:
      "Full bodied decaf dark roast coffee with a smooth mouthfeel and lingering herbal notes",
    image:
      "https://globalassets.starbucks.com/assets/6b684fdb10a843c88f7e6ddcc2bd9cb5.jpg?impolicy=1by1_medium_630",
    name: "Decaf Sumatra",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 14,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 18,
    descripcion:
      "This is a coffee of one true love, and three names. We created it just for a Seattle restaurant in 1975, naming it Jake’s Blend. And people loved it. So many, in fact, that we began hand scooping and blending it to order in our stores, where it was known as 80/20 Blend, for the recipe. The love was so strong we finally made it official, calling it Verona after the city that inspires so many. By any name, this is a thing of pure romance.",
    image:
      "https://globalassets.starbucks.com/assets/32355dbaa8634b11b9cbee138046bab9.jpg?impolicy=1by1_medium_630https://globalassets.starbucks.com/assets/a48597800f844315a64a06a060358b45.jpg?impolicy=1by1_medium_630    ",
    name: "Caffe Verona",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 15,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 19,
    descripcion:
      "Our master roasters coax the beans along, the heat taking them deep and dark—a recipe for caramelly sweetness so right it’s never been changed. The quest began in 1975 with a search for the perfect melding of beans and roast, ending months of intense experimentation later with the coffee you're holding in your hand. A signature blend roasted the way only we can.",
    image:
      "https://globalassets.starbucks.com/assets/03047ecfd68d4767a0116b267ab1930f.jpg?impolicy=1by1_medium_630",
    name: "Espresso Roast",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 16,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 20,
    descripcion:
      "This is Starbucks quintessential dark roast—expertly crafted to bring out sweetness and intensity. It showcases the precision and skill of our roasters, who created a coffee slightly darker than our Espresso Roast without the smoky edge of French Roast. A great cup of coffee with enriched flavor.",
    image:
      "https://globalassets.starbucks.com/assets/a48597800f844315a64a06a060358b45.jpg?impolicy=1by1_medium_630",
    name: "Italian Roast",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 17,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 21,
    descripcion:
      "Deep, untamed flavors ripple in this cup—earthy, herbal and complex with a lingering spice. This is the essence of coffees from Indonesia. Our master coffee blenders have brought together the best flavors of the region perfectly, creating an experience that would otherwise never exist. And is as extraordinary and wild as its namesake.",
    image:
      "https://globalassets.starbucks.com/assets/bce63b62a7c840ab96e1c761de1834a4.jpg?impolicy=1by1_medium_630",
    name: "Komodo Dragon Blend",
    precio: "$28.99",
    cantidad: "453g",
  },
  {
    id: 18,
    tipo: "Whole Bean",
    categoria: "dark-roast",
    stock: 22,
    descripcion:
      "Full-bodied with a smooth mouthfeel, lingering flavors of dried herbs and fresh earth, and almost no acidity. Our roasters love transforming these unpredictable beans from dark coral green to tiger-orange to a rich, oily mahogany, revealing bold flavors that many us of us can’t live without. Coffee from Sumatra is the foundation of our most treasured blends, and something we’ve been honored to share with you for four decades.",
    image:
      "https://globalassets.starbucks.com/assets/a357a730a46747fd86ab26540480e44c.jpg?impolicy=1by1_medium_630",
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
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="Gallery">
      <ItemDetail items={Cafes} />
    </div>
  );
};

export default ItemDetailContainer;
