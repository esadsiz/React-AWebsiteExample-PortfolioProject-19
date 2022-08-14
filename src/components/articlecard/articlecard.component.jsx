import "./articlecard.styles.scss";

const ArticleCard = ({
  articleCardProp,
  setCardIndexToChangeProp,
  loginSuccessfulProp,
}) => {
  const allArticleCards = articleCardProp
    .slice(0)
    .reverse()
    .map((value, index) => {
      const loadCardInfos = () => {
        if (loginSuccessfulProp) {
          for (let i = 0; i < articleCardProp.length; i++) {
            document
              .getElementsByClassName("articlecard")
              [i].classList.remove("articlecard-select");
          }

          document
            .getElementsByClassName("articlecard")
            [index].classList.toggle("articlecard-select");

          document.getElementById("add-image").value =
            document.getElementsByClassName("articlecard-imagewrapper-image")[
              index
            ].src;
          document.getElementById("add-title").value =
            document.getElementsByClassName("articlecard-title")[
              index
            ].innerText;
          document.getElementById("add-text").value =
            document.getElementsByClassName("articlecard-text")[
              index
            ].innerText;

          setCardIndexToChangeProp(articleCardProp.length - index - 1);
        }
      };

      return (
        <div className="articlecard" key={index} onClick={loadCardInfos}>
          <div className="articlecard-imagewrapper">
            <img
              className="articlecard-imagewrapper-image"
              src={value[0]}
              alt=""
            />
          </div>
          <h2 className="articlecard-title">{value[1]}</h2>
          <p className="articlecard-text">{value[2]}</p>
        </div>
      );
    });

  return <div className="articlecard-cardsalign">{allArticleCards}</div>;
};

export default ArticleCard;
