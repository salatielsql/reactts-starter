import { useState } from "react";
import { Button } from "./Button";

export const ButtonTest = (): JSX.Element => {
  const [text, setText] = useState("Button");

  return (
    <Button
      onClick={(): void => {
        setText("Button Updated");
      }}
    >
      {text}
    </Button>
  );
};
