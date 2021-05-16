import { useState } from "react";

/**
 * CustomButton shows a basic button
 */
const CustomButton = ({ projectName, projectVersion }) => {
  /**
   * state declaration
   */
  const [getCounter, setCounter] = useState(0);

  /**
   * handles the case when button is clicked
   */
  const onClickHandler = () => {
    setCounter(getCounter + 1);
  };

  return (
    <div>
      <h1>{projectName}</h1>
      <p>Clicked {getCounter} times </p>
      <button onClick={onClickHandler}>Increment Counter</button>
      <br />
      <p>Version {projectVersion}</p>
    </div>
  );
};

export { CustomButton };
