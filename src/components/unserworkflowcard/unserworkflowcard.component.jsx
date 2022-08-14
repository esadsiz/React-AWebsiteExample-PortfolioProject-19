import "./unserworkflowcard.styles.scss";
const iconStyle = {
  color: "white",
  border: "1px solid #23A1E0",
  borderRadius: "100rem",
  padding: "5rem",
  backgroundColor: "#23A1E0",
  marginBottom: "1rem",
};

const UnserworkflowCard = ({ articleCardProp }) => {
  const allArticleCards = Object.values(articleCardProp).map((value, index) => {
    return (
      <div className="unserworkflow" key={index}>
        <i className={value.icon} style={{ ...iconStyle }}></i>
        <h2 className="unserworkflow-title">{value.cardtitle}</h2>
        <p className="unserworkflow-text">{value.cardtext}</p>
      </div>
    );
  });

  return <div className="unserworkflow-cardsalign">{allArticleCards}</div>;
};

export default UnserworkflowCard;
