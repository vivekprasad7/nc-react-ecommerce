import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./productCard.css";
import { useAuthContext } from "../../contexts/authContext";
import { useWishlistContext } from "../../contexts/wishlistContext";
import { isItemInWishlist } from "../../utils/isItemInWishlist";
import { useCartContext } from "../../contexts/cartContext";
import { isItemInCart } from "../../utils/isItemInCart";

export const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const {
    authState: { token },
  } = useAuthContext();

  const { wishlist, addToWishlistHandler, disableWishlistBtn } = useWishlistContext();
  const { cart, addToCartHandler, disableBtn } = useCartContext();


  const {
    _id,
    title,
    image,
    isBestSeller,
    price,
    originalPrice,
    ratings,
  } = item;
  return (
    <>
      <div className="product-card">
        <img src={image} onClick={() => navigate(`/products/${_id}`)} alt={title}/>
        <span className={isBestSeller ? "card-best" : "best-none"}>
          Best Seller
        </span>
        <span
          onClick={() => addToWishlistHandler(item)}
          className={
            isItemInWishlist(_id, wishlist) ? "card-hearted" : "card-heart"
          }
          role="button"
          disabled={disableWishlistBtn}
        >
          <i className="fa fa-heart wishlist-circle" aria-hidden="true"></i>{" "}
        </span>
        <div className="card-info">
          <h4 className="card-title">{title}</h4>
          <p className="card-price">
            {" "}
            <span className="rupee-price">
              ₹ <i class="fa fa-indian-rupee-sign"></i>
              {price}
            </span>{" "}
            <span className="rupee-strike">{originalPrice}</span>
          </p>
          <span className="card-rate">
            <span className="card-ratings">
              {" "}
              {ratings.rate} <i class="fa fa-star"></i>
            </span>{" "}
            <span className="ratings-count">({ratings.count})</span>
          </span>
        </div>
        <button
          className={!isItemInCart(_id, cart) ? "card-btn" : "added-card-btn"}
          onClick={() => addToCartHandler(item)}
          disabled={disableBtn}
        >
          {isItemInCart(_id, cart) ? (
            <Link to="/cart">Go to Cart</Link>
          ) : (
            "Add to Cart"
          )}
        </button>
      </div>
    </>
  );
};
