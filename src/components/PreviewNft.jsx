import React from "react";
import CardC from "./Cards/Card";

const PreviewNft = ({ togglePreview }) => {
  return (
    <div
      className="rn-popup-modal upload-modal-wrapper modal fade show"
      id="uploadModal"
      tabindex="-1"
      // style="display: block; padding-right: 19px;"
      style={{ display: "block", paddingRight: "19px" }}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        onClick={()=>togglePreview()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content share-wrapper">
          <div className="modal-body hide-scrollbar">
            <CardC cls={{ width: "280px", height: "440px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewNft;
