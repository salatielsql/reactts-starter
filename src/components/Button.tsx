/*
  Avoid default imports due tree shaking. See: https://parceljs.org/languages/css/#tree-shaking
*/
import * as classnames from "./Button.module.css";

interface Props {
  children: string | JSX.Element;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props): JSX.Element => (
  <button type="button" onClick={onClick} className={classnames.button}>
    {children}
  </button>
);

/*
  Avoid unnamed default exports. See: https://parceljs.org/recipes/react/#fast-refresh
*/
export { Button };
