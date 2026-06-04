import "./Button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export const Button = (prop: Props) => {
  return <button onClick={prop.parentMethod}>{prop.label}</button>;
};
