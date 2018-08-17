import React, { Component } from "react";

class Pager extends Component {
  state = { current_page: 0 };

  render() {
    let { pager, loadPage } = this.props;
    if (!pager) {
      return "";
    }

    let pages = [];
    let { current_page } = pager;
    for (let i = 1; i < pager.total_pages + 1; i++) {
      let page = {
        isActive: i === current_page,
        pageTarget: i
      };
      pages.push(page);
    }

    //prettier-ignore
    return (
      <div className="pager">
        {pages.map(
          page =>
            page.isActive ? <span key={page.pageTarget} className="page-num active">{page.pageTarget}</span> : (
              <button key={page.pageTarget} className="page-num plain-btn" onClick={() => loadPage(page.pageTarget)}>
                {page.pageTarget}
              </button>
            )
        )}
      </div>
    );
  }
}

export default Pager;
