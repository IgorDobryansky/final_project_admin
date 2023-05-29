import React from "react";
import PropTypes from "prop-types";

function Product({ product }) {
  const {
    name,
    currentPrice,
    categories,
    imageUrls,
    quantity,
    previousPrice,
    color,
    sizes,
    brand,
    manufacturer,
    manufacturerCountry,
    date
  } = product;
  return (
    <tr>
      <td>{name && name}</td>
      <td>{currentPrice && currentPrice} grn</td>
      <td>{categories && categories}</td>
      <td>
        {Array.isArray(imageUrls) &&
          imageUrls.map((url, index) => (
            <a href={url} target="_blank" rel="noreferrer" key={url}>
              {index + 1}
            </a>
          ))}
      </td>
      <td>{quantity && quantity} pcs</td>
      <td>{previousPrice && previousPrice} grn</td>
      <td>{color && color}</td>
      <td>{sizes && sizes}</td>
      <td>{brand && brand}</td>
      <td>{manufacturer && manufacturer}</td>
      <td>{manufacturerCountry && manufacturerCountry}</td>
      <td>{date && date}</td>
    </tr>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    categories: PropTypes.string,
    imageUrls: PropTypes.arrayOf(PropTypes.string),
    quantity: PropTypes.number,
    previousPrice: PropTypes.number,
    color: PropTypes.string,
    sizes: PropTypes.string,
    brand: PropTypes.string,
    manufacturer: PropTypes.string,
    manufacturerCountry: PropTypes.string,
    date: PropTypes.string
  }).isRequired
};

export default Product;
