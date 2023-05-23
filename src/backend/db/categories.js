import { v4 as uuid } from "uuid";
import {image1, image2, image3}  from "../../assets"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: "57dfcf70-b94d-435e-b179-45f1e6cc85f5",
    categoryName: "Cakes",
    description:
      "We offer an extensive variety of mouth-watering cakes and confections that will undoubtedly make you surrender your senses.",
    image:image1,
  },
  {
    _id: "d5d26f13-561e-42e2-83d2-fd868bb7e78b",
    categoryName: "Muffins and Pastries",
    description:
      "Bite into our delightful Muffins & you will experience a burst of natural flavor and freshness of ingredients that literally melts in your mouth. ",
    image:image2,
  },
  {
    _id: "c149c9ee-37c4-40bf-9653-c3d3e841017b",
    categoryName: "Desserts",
    description:
      "Surprise yourself with sweetness of delicacies and falvors to bring your childhood memories back",
    image:image3,
  },
];
