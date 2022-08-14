import "./button.styles.scss";

const WButton = ({ buttonText, buttonFunction }) => {
  return (
    <button onClick={buttonFunction} className="button">
      {buttonText}
    </button>
  );
};

export default WButton;
