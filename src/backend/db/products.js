import { v4 as uuid } from "uuid";
import {cake1, cake2, cake3, cake4, cake5, cake6,cake7, cake8, cake9, cake10, muffin1, muffin2, muffin3, muffin4, muffin5, pastry1, pastry2,pastry3, pastry4, pastry5} from '../../assets';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */


export const products = [
  {
    _id: "ad9bb515-3d1c-483f-8446-40d10cce759d",
    title: "Mango Tropical Cake",
    image:cake1,
    ratings: {
      rate:"4.5",
      count:"985"
    },
    price: "499",
    originalPrice: "579",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Cake",
    desc:"The Mango Tropical Cake is an ideal dessert for mango lovers and those seeking a unique twist on traditional cakes. It is perfect for special occasions, celebrations, or simply as a decadent treat to savor any time of the year. (6 serving,169 calories each, protein-3 grams each, carbs-33 grams each)",
  },
  {
    _id: "b51abe1b-e546-4a5f-b17a-94aa0aa75652",
    title: "Butterscotch Cake",
    image:cake2,
    ratings: {
      rate:"4.1",
      count:"622"
    },
    price: "799",
    originalPrice: "929",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under1000",
    type:"Cake",
    desc:"Good old butterscotch cake - just overload of it to give you an unmatched taste. Best choice for Birthday cake or Anniversary cake. (Vanilla Sponge + Butterscotch nuts + Butterscotch crush) (6 Serving, 152 calories each, protein-3g each, carbs-29g each)",
  },
  {
    _id: "181e8e28-afb6-4a53-ab2d-f9f7348b44a9",
    title: "Dutch Chocolate Cake",
    image:cake3,
    ratings: {
      rate:"3.9",
      count:"234"
    },
    price: "499",
    originalPrice: "579",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Cake",
    desc:"Want to go classic for your celebration.What's better than a Chocolate Truffle Cake! This luscious, soft, moist Chocolate Cake is coated with a ganache made from Chocolate & Fresh Cream. ",
  },
  {
    _id: "b2ddef51-d28f-4e9c-8d30-e3c119d7272f",
    title: "Chocolate Truffle Cake",
    image:cake4,
    ratings: {
      rate:"4.7",
      count:"2.1k"
    },
    price: "489",
    originalPrice: "679",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Cake",
    desc:"If it were easy to resist, it would not be called chocolate cake. Try our bestseller to taste real freshness. Best choice for Birthday cake or Anniversary cake. [ Chocolate Sponge + Truffle + Chocolate layering] (6 Serving, 401 calories each, protein-7g each, carbs- 53g each)",
  },
  {
    _id: "66880a00-bc39-40e2-92eb-d3afdd25b5cf",
    title: "Divine Pineapple Cake",
    image:cake5,
    ratings: {
      rate:"4.2",
      count:"566"
    },
    price: "1499",
    originalPrice: "1799",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under1500",
    type:"Cake",
    desc:" The evergreen Pineapple Cake with real juicy pineapple chunks and delicious cream, makes this one a delicious fit for all your special occasions!",
  },
  {
    _id: "f17bff86-995c-45fa-827a-902c54f1cdd8",
    title: "Red Velvet Egg Cake",
    image:cake6,
    ratings: {
      rate:"4.0",
      count:"1.67k"
    },
    price: "689",
    originalPrice: "899",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under1000",
    type:"Cake",
    desc:"Preparation starts after receiving the order. No storage. Scrumptious and tempting, creamy red velvet cake with the taste of cocoa and sugar. (6 Serving, 383 calories each, protein-6g each, carbs-47g each)",
  },
  {
    _id: "09755991-ed17-430e-8fad-c292e136f061",
    title: "Strawberry Cheesecake",
    image:cake7,
    ratings: {
      rate:"4.9",
      count:"979"
    },
    price: "979",
    originalPrice: "1129",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: true,
    priceCategory: "under1000",
    type:"Cake",
    desc:"Bite into our smooth, rich, fresh, and dense texture of cheesecake and Strawberry . We stand by our promise, of sweeter celebrations with CakeZone. (4 Serving, 567 calories each, protein - 6g each, carbs-53g each)",
  },
  {
    _id: "4198a865-8d52-4621-8f7a-9c1271eafd37",
    title: "Mango Fruit Eggless Cake",
    image:cake8,
    ratings: {
      rate:"4.3",
      count:"2.3k"
    },
    price: "489",
    originalPrice: "579",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Cake",
    desc:"Bite into artisanal Mango fruit cake topped with tasty, flavored mango filling on top and layered vanilla sponge, our fresh cake made right after the order is placed. We stand by our promise of delivering sweeter celebrations. [ Vanilla Sponge + Mango filling + Mango Crush + Cream] (6 serving, 321 Calories each, protein-6g each, Carbs-56g each",
  },
  {
    _id: "edc59062-2775-4a4d-bfc9-ca334b014f55",
    title: "French Blueberry Cheese Cake",
    image:cake9,
    ratings: {
      rate:"4.2",
      count:"147"
    },
    price: "989",
    originalPrice: "1139",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: false,
    priceCategory: "under1000",
    type:"Cake",
    desc:"The richness of fresh cheesecake is topped with premium blueberry fruit filling. (4 Serving, 521 calories each, protein-6g each, carbs-40g each) ",
  },
  {
    _id: "50ea3a7c-bf91-4a41-b5ee-ae49717402b5",
    title: "Black Forest Eggless Cake",
    image:cake10,
    ratings: {
      rate:"4.7",
      count:"2.3k"
    },
    price: "499",
    originalPrice: "579",
    categoryName: "Cakes",
    isInStock: true,
    weight: "1 kg",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Cake",
    desc:"Several layers of chocolate cake, with cherry filling, with lashings of whipped cream between each layer. The cake is then decorated with piped, whipped cream, maraschino cherries, and chocolate shavings. We stand by our promise, sweeter celebrations with CakeZone. (Chocolate Sponge + Cherry + Chocolate Flakes) ( 6 Serving, 327 calories each, protein-5g each, carbs-56g each)",
  },

  {
    _id: "ed21760a-e88e-4d78-9bfd-8807f1f2c024",
    title: "Chocolote Muffin",
    image:muffin1,
    ratings: {
      rate:"4.1",
      count:"128"
    },
    price: "99",
    originalPrice: "129",
    categoryName: "Muffins & Desserts",
    isInStock: true,
    weight: "80gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Muffin",
    desc:"This delicious Chocolate Muffin made with chocolate chips and rich ganache filling is what chocolatey dreams are made of.",
  },
  {
    _id: "555d6f65-e5cc-4ef0-a139-ac7e1959883c",
    title: "Red Velvet Muffin",
    image:muffin2,
    ratings: {
      rate:"4.8",
      count:"612"
    },
    price: "99",
    originalPrice: "129",
    categoryName: "Muffins & Desserts",
    isInStock: true,
    weight: "80gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Muffins",
    desc:"Our Red Velvet muffin made with soft sponge filled with delicious cream cheese is sure to give a velvety touch to your tastebuds.",
  },
  {
    _id: "e8fdd588-a714-4eda-a23b-fc8082cf8abb",
    title: "Blueberry Muffin",
    image:muffin3,
    ratings: {
      rate:"4.3",
      count:"29"
    },
    price: "99",
    originalPrice: "129",
    categoryName: "Muffins & Desserts",
    isInStock: true,
    weight: "80gm",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Muffins",
    desc:"Our delicious muffins made with fresh blueberries are an absolute delight in every bite. Must try!",
  },
  {
    _id: "5a716ab3-e800-49a0-9cee-e132dd467f52",
    title: "Hazlenut Muffin",
    image:muffin4,
    ratings: {
      rate:"4.0",
      count:"199"
    },
    price: "99",
    originalPrice: "129",
    categoryName: "Muffins & Desserts",
    isInStock: true,
    weight: "80gm",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Muffins",
    desc:"A nutty affair you wont want to miss out on. Rich chocolatey muffin with delicious Nutella filling.",
  },
  {
    _id: "cdb7260a-3f8d-497d-976b-72b79efe5087",
    title: "Dark Fantasy Muffin",
    image:muffin5,
    ratings: {
      rate:"4.3",
      count:"322"
    },
    price: "99",
    originalPrice: "129",
    categoryName: "Muffins & Desserts",
    isInStock: true,
    weight: "80gm",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Muffins",
    desc:"Coated with love and filled with lots of chocolate. Thats what our chocolate dark fantasy muffins are about!",
  },

  {
    _id: "e5dad40e-0be4-46db-af2c-d2a31a5166d1",
    title: "Strawberry Cheesecake",
    image:pastry1,
    ratings: {
      rate:"4.4",
      count:"722"
    },
    price: "189",
    originalPrice: "229",
    categoryName: "Pastries",
    isInStock: true,
    weight: "180gm",
    isBestSeller: false,
    priceCategory: "under500",
    type:"Pastry",
    desc:"Delectable cheesecake made with fresh strawberries and rich cream cheese is sure to make you fall in love berry much. Try now!",
  },
  {
    _id: "3b6d561b-990d-4441-ba35-daeee839eead",
    title: "Blueberry Cheesecake",
    image:pastry2,
    ratings: {
      rate:"4.9",
      count:"2.5k"
    },
    price: "189",
    originalPrice: "229",
    categoryName: "Pastries",
    isInStock: true,
    weight: "180gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Pastry",
    desc:"The combination of delicious cream cheese and fresh blueberries is what makes our Blueberry cheesecake stand apart. Try now!",
  },
  {
    _id: "95371b1f-5384-4012-8461-c1e5b23561a4",
    title: "Rich Red Velvet Pastry",
    image:pastry3,
    ratings: {
      rate:"4.5",
      count:"1.2k"
    },
    price: "159",
    originalPrice: "239",
    categoryName: "Pastries",
    isInStock: true,
    weight: "180gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Pastry",
    desc:"Rich and moist Red Velvet cake layered with fresh cream cheese makes our Red Velvet pastry difficult to share. Youll think twice too",
  },
  {
    _id: "59039aa6-842f-42c6-9e4b-b498adb24a7c",
    title: "Chocolate Truffle Pastry",
    image:pastry4,
    ratings: {
      rate:"4.3",
      count:"565"
    },
    price: "149",
    originalPrice: "179",
    categoryName: "Pastries",
    isInStock: true,
    weight: "180gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Pastry",
    desc:"(Eggless) Layers of soft chocolate sponge and dense but silky-smooth chocolate ganache make this cake a decadent celebration.",
  },
  {
    _id: "0cdc3b89-bcb9-48e4-8271-3db68c87b6e6",
    title: "Mango Cheesecake",
    image:pastry5,
    ratings: {
      rate:"4.1",
      count:"233"
    },
    price: "129",
    originalPrice: "159",
    categoryName: "Pastries",
    isInStock: true,
    weight: "180gm",
    isBestSeller: true,
    priceCategory: "under500",
    type:"Pastry",
    desc:"(Eggless) This New York Style Mango Cheesecake, made with premium quality cream cheese and a crust infused with delicious mango flavor, is every dessert lovers delight!",
  },
];

