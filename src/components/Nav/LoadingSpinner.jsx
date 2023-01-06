import React, { useContext, useRef, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function LoadingSpinner() {
  const spinnerSize = 30;
  const spinnerColor1 = getComputedStyle(document.body).getPropertyValue(
    "--red"
  );
  const spinnerColor2 = getComputedStyle(document.body).getPropertyValue(
    "--red-light"
  );

  return (
    <Oval
      height={spinnerSize}
      width={spinnerSize}
      color={spinnerColor1}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor={spinnerColor2}
      strokeWidth={5}
      strokeWidthSecondary={5}
    />
  );
}
