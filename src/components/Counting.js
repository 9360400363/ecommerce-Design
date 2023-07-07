import { Button } from "@material-tailwind/react";

const Counting = ({ handleClick, quantity }) => {
  return (
    <div>
      <Button size="sm" onClick={() => handleClick("inc")}>
        add
      </Button>
      <span className="mx-2">{quantity}</span>
      <Button size="sm" onClick={() => handleClick("dec")}>
        less
      </Button>
    </div>
  );
};
export default Counting;
