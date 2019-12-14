import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f2 courier white">
        {
          "Copy and paste a photo URL of your favorite dish to see what ingredients it contains!"
        }
      </p>
      <div className="center mw7 shadow-5 br2 pa3 bbg">
        <form className="f4 pa2 w-70 center">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Insert image url here.."
            onChange={onInputChange}
            required
          />
          <button
            type="button"
            className="f4 w-30 grow link ph3 pv2 dib white bg-green"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </form>
      </div>
    </div>
  );
};
export default ImageLinkForm;
