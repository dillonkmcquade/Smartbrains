import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div>
        <p className="f2 courier light-gray">
          {
            "Insert a photo URL of your favorite food to see what ingredients it contains!"
          }
        </p>
      </div>
      <div className="center mw7 br-pill bg-light-green br2 pa3 bbg">
        <form className="f4 pa2 w-70 center">
          <input
            className="f4 pa2 w-70 shadow-5 center"
            type="text"
            placeholder="Insert image url here.."
            onChange={onInputChange}
            required
          />
          <button
            type="button"
            className="f4 w-30 grow link ph3 pv2 dib white pointer bg-green"
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
