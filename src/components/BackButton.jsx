import { useNavigate } from "react-router-dom";
import Button from "./Button";

// This is a BackButton Component which is used multiple times in the webpage.It's functionality is evident by it's name.

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
