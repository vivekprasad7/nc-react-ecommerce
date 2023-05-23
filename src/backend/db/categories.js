import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Cakes",
    description:
      "We offer an extensive variety of mouth-watering cakes and confections that will undoubtedly make you surrender your senses.",
    image:image1,
  },
  {
    _id: uuid(),
    categoryName: "Muffins and Pastries",
    description:
      "Bite into our delightful Muffins & you will experience a burst of natural flavor and freshness of ingredients that literally melts in your mouth. ",
    image:image2,
  },
  {
    _id: uuid(),
    categoryName: "Desserts",
    description:
      "Surprise yourself with sweetness of delicacies and falvors to bring your childhood memories back",
    image:image3,
  },
];
