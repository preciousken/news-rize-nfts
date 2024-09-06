import React from "react";

const CreateNft = () => {
  return (
    <div className="create-area rn-section-gapTop">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
            {/* <!-- file upload area --> */}
            <div className="upload-area">
              <div className="upload-formate mb--30">
                <h6 className="title">Upload file</h6>
                <p className="formate">Drag or choose your file to upload</p>
              </div>

              <div className="brows-file-wrapper">
                {/* <!-- actual upload which is hidden --> */}
                <input
                  name="createinputfile"
                  id="createinputfile"
                  type="file"
                  className="inputfile"
                />
                <img
                  id="createfileImage"
                  src="assets/images/portfolio/portfolio-05.jpg"
                  alt=""
                  data-black-overlay="6"
                />
                {/* <!-- our custom upload button --> */}
                <label for="createinputfile" title="No File Choosen">
                  <i className="feather-upload"></i>
                  <span className="text-center">Choose a File</span>
                  <p className="text-center mt--10">
                    PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                  </p>
                </label>
              </div>
            </div>
            {/* <!-- end upoad file area --> */}

            <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
              <h5> Note: </h5>
              <span>
                {" "}
                Service fee : <strong>2.5%</strong>{" "}
              </span>{" "}
              <br />
              <span>
                {" "}
                You will receive : <strong>25.00 ETH $50,000</strong>
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-wrapper-one">
              <form className="row" action="#">
                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label for="name" className="form-label">
                      Product Name
                    </label>
                    <input
                      id="name"
                      placeholder="e. g. `Digital Awesome Game`"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label for="Discription" className="form-label">
                      Discription
                    </label>
                    <textarea
                      id="Discription"
                      rows="3"
                      placeholder="e. g. “After purchasing the product you can get item...”"
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label for="dollerValue" className="form-label">
                      Item Price in $
                    </label>
                    <input id="dollerValue" placeholder="e. g. `20$`" />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label for="Size" className="form-label">
                      Size
                    </label>
                    <input id="Size" placeholder="e. g. `Size`" />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label for="Propertie" className="form-label">
                      Propertie
                    </label>
                    <input id="Propertie" placeholder="e. g. `Propertie`" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label for="Royality" className="form-label">
                      Royality
                    </label>
                    <input id="Royality" placeholder="e. g. `20%`" />
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="input-box pb--20 rn-check-box">
                    <input
                      className="rn-check-box-input"
                      type="checkbox"
                      id="putonsale"
                    />
                    <label className="rn-check-box-label" for="putonsale">
                      Put on Sale
                    </label>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="input-box pb--20 rn-check-box">
                    <input
                      className="rn-check-box-input"
                      type="checkbox"
                      id="instantsaleprice"
                    />
                    <label
                      className="rn-check-box-label"
                      for="instantsaleprice"
                    >
                      Instant Sale Price
                    </label>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4">
                  <div className="input-box pb--20 rn-check-box">
                    <input
                      className="rn-check-box-input"
                      type="checkbox"
                      id="unlockpurchased"
                    />
                    <label className="rn-check-box-label" for="unlockpurchased">
                      Unlock Purchased
                    </label>
                  </div>
                </div>

                <div className="col-md-12 col-xl-4">
                  <div className="input-box">
                    <button
                      type="button"
                      className="btn btn-primary-alta btn-large w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#uploadModal"
                    >
                      Preview
                    </button>
                  </div>
                </div>

                <div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
                  <div className="input-box">
                    <button className="btn btn-primary btn-large w-100">
                      Submit Item
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
            <h5> Note: </h5>
            <span>
              {" "}
              Service fee : <strong>2.5%</strong>{" "}
            </span>{" "}
            <br />
            <span>
              {" "}
              You will receive : <strong>25.00 ETH $50,000</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNft;
