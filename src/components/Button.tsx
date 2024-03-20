import React from "react";

import { Button } from "../utils/ReusableStlyes";
import { useStore } from "../store/store";

function CustomButton({
  children,
  clickFunc,
}: {
  children: React.ReactNode;
  clickFunc: () => void;
}) {
  const sliderValue = useStore((state) => state.sliderValue);
  return (
    <Button onClick={clickFunc} disabled={sliderValue === 0 && true}>
      {children}
    </Button>
  );
}

export default CustomButton;
