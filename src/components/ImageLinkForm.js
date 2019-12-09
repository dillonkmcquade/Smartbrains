import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f2 courier white">
        {"This magic brain will detect faces in your pictures. Git it a try! "}
      </p>

      <div className="center mw7 shadow-5 br2 pa3 bbg">
        <input
          className="f4 pa2 w-70 center"
          type="text"
          placeholder="Insert image url here.."
        />
        <button className="f4 w-30 grow link ph3 pv2 dib white bg-light-purple pointer">
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
