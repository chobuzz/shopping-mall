import React from "react";
import { Oval } from "react-loader-spinner";

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "-300px",
      }}
    >
      <Oval color="#ff0000" height={100} width={100} />
    </div>
  );
}

export default Loading;
