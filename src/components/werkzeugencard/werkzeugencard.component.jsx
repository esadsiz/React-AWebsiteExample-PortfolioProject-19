import "./werkzeugencard.styles.scss";
import WButton from "../button/button.component";

const WerkzeugenCard = ({ articleCardProp }) => {
  const allArticleCards = Object.values(articleCardProp).map((value, index) => {
    return (
      <div className="werkzeugencard" key={index}>
        <i className={value.icon}></i>
        <h2 className="werkzeugencard-title">{value.cardtitle}</h2>
        <p className="werkzeugencard-text">{value.cardtext}</p>
        <WButton buttonText={value.button} />
      </div>
    );
  });

  return <div className="werkzeugencard-cardsalign">{allArticleCards}</div>;
};

export default WerkzeugenCard;
