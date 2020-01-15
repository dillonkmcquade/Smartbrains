import React from "react";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const RingLoaderComponent = () => {
  return (
    <RingLoader
      css={override}
      sizeUnit={"px"}
      size={150}
      color={"#123abc"}
      loading={true}
      className="pa3"
    />
  );
};

export default RingLoaderComponent;
