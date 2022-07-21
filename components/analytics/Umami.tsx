import React from "react";
import { Script } from "vm";

// 별도로 컨테이너 올려야 함
const UmamiScript = () => {
  // @ts-ignore
  return <Script async defer data-website-id="###" src="#" />;
};

export default UmamiScript;
