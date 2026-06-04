import "./Title.css";

interface Props {
  title: string;
  state: number;
}

export const Title = (prop: Props) => {
  return (
    <h3>
      {prop.title} {prop.state}
    </h3>
  );
};
