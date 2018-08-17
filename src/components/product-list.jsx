import React, { Component } from "react";
import ProductPreview from "./product-preview";

class productList extends Component {
  state = {};

  render() {
    let { products } = this.props;

    if (!products) {
      return <div>No products found</div>;
    }
    return (
      <section>
        {products.map(product => (
          <ProductPreview
            key={product.id}
            product={product}
            showDetails={this.props.showDetails}
            formatPrice={this.props.formatPrice}
          />
        ))}
      </section>
    );
  }
}

export default productList;
