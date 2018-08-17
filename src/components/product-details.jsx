import React, { Component } from "react";

class productDetails extends Component {
  state = {};

  render() {
    let { product, closeDetails, formatPrice, formatPercent } = this.props;
    let image;
    let haveImage = (
      <div className="image-container">
        <img className="product-image" src={product.image_url} />
      </div>
    );
    let noImage = <div className="no-image-preview">No image available</div>;
    //prettier-ignore
    let description = product.tasting_note ? <li>Description: {product.tasting_note}</li> : '';
    image = product.image_url ? haveImage : noImage;
    return (
      <div className="modal-container">
        <div className="background-block" onClick={closeDetails} />
        <div className="product-details">
          {image}
          <button className="close-btn plain-btn" onClick={closeDetails}>
            X
          </button>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">
              {formatPrice(product.price_in_cents)}
            </p>
            <ul>
              <li>Produced in: {product.origin}</li>
              <li>Alcohol content: {formatPercent(product.alcohol_content)}</li>
              <li>Container size: {product.package}</li>
              {description}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default productDetails;
