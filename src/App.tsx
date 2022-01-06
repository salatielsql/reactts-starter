import { useState } from "react";

import { Button } from "@components/Button";

const App = (): JSX.Element => {
  const [buttonText, setButtonText] = useState("Click me");
  return (
    <>
      <h1>React Typescript Starter 2</h1>
      <Button onClick={(): void => setButtonText("I was clicked!")}>
        {buttonText}
      </Button>
    </>
  );
};

export { App };
