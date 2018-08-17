import React, { Component } from "react";
import Pager from "./pager";
import ProductList from "./product-list";
import ProductDetails from "./product-details";

class mainContent extends Component {
  state = {
    pager: null,
    products: null,
    currentProduct: null,
    detailsOpen: false
  };

  api = {
    host: "https://lcboapi.com",
    //host: "http://localhost:4000",
    namespace: {
      products: "products"
    }
  };
  producer = "Beau's All Natural Brewing";

  getProductsPage = pageIndex => {
    let { api, producer } = this;
    //prettier-ignore
    let url = api.host + "/" + api.namespace.products + "?q=" + encodeURIComponent(producer) + '&where=is_seasonal' + (pageIndex > 0 ? '&page='+pageIndex : '');
    let authKey =
      "MDpmZGIyNWY1ZS05OWM3LTExZTgtYjkxMy0xYjBhMTQ3YWYyNDI6eXNxRldJQWd3SGkyVUU5ZHBaUEpYMEg2NFNncW50TEtoQjZI";
    return fetch(url, {
      headers: { Authorization: "Token " + authKey }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          pager: data.pager,
          products: data.result
        });
      });
  };

  showDetails = (product, evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    this.setState({
      currentProduct: product,
      detailsOpen: true
    });
  };

  closeDetails = () => {
    this.setState({
      detailsOpen: false
    });
  };

  handleKeyPress = evt => {
    if (evt.key == "Escape") {
      this.setState({
        detailsOpen: false
      });
    }
  };

  formatPrice = price => {
    return "$" + (price / 100).toFixed(2);
  };

  formatPercent = percent => {
    return parseFloat((percent / 100).toFixed(2)) + " %";
  };

  componentDidMount() {
    return this.getProductsPage(0);
  }

  render() {
    let { state } = this;
    //prettier-ignore
    let detailsModal = !state.detailsOpen ? '' : (
      <ProductDetails
        product={state.currentProduct}
        closeDetails={this.closeDetails}
        formatPrice={this.formatPrice}
        formatPercent={this.formatPercent}
      />
    );

    return (
      <section className="main-content" onKeyDown={this.handleKeyPress}>
        <h1 className="heading">Seasonal wines and beers</h1>
        {detailsModal}
        <ProductList
          products={state.products}
          showDetails={this.showDetails}
          formatPrice={this.formatPrice}
        />
        <Pager pager={state.pager} loadPage={this.getProductsPage} />
      </section>
    );
  }
}

export default mainContent;
