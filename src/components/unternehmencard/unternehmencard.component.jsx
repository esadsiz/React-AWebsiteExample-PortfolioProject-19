import "./unternehmencard.styles.scss";

const UnternehmenCard = ({ unternehmenCardProp }) => {
  const allUnternehmencards = Object.values(unternehmenCardProp).map(
    (value, index) => {
      return (
        <div className="unternehmencard" key={index}>
          <div className="unternehmencard-imagewrapper">
            <img
              className="unternehmencard-imagewrapper-image"
              src={value}
              alt=""
            />
          </div>
        </div>
      );
    }
  );

  return (
    <div className="unternehmencard-cardsalign">{allUnternehmencards}</div>
  );
};

export default UnternehmenCard;
