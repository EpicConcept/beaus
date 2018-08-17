import React, { Component } from "react";

class productPreview extends Component {
  render() {
    let { product, formatPrice } = this.props;

    //prettier-ignore
    let imageRender = <img src={product.image_thumb_url} onClick={() => this.props.showDetails(product)} />;
    //prettier-ignore
    let imageMissing = <div className="no-image-preview">No image available</div>;

    let image = product.image_thumb_url ? imageRender : imageMissing;
    return (
      <div className="product-preview">
        {image}
        <div className="about">
          <p className="product-name">
            <a href="#" onClick={evt => this.props.showDetails(product, evt)}>
              {product.name}
            </a>
          </p>
          <p className="product-price">{formatPrice(product.price_in_cents)}</p>
        </div>
      </div>
    );
  }
}

export default productPreview;
