import React from "react";
import SubNav from "../components/SubNav";
import ColCard from "../components/Cards/ColCard";

const Collection = () => {
  return (
    <div style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.9)" 
      }}
>
      <SubNav title="Our Collections" />
      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {" "}
            <ColCard />
            <ColCard />
            <ColCard />
            <ColCard />
            <ColCard />
            <ColCard />
            <ColCard />
            <ColCard />
            {/* //// */}
          </div>
          <div className="row">
            <div
              className="col-lg-12 sal-animate"
              data-sal="slide-up"
              data-sal-delay="550"
              data-sal-duration="800"
            >
              <nav
                className="pagination-wrapper"
                aria-label="Page navigation example"
              >
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link active" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
