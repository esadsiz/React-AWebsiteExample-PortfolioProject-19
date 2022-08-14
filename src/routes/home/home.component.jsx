import WButton from "../../components/button/button.component";
import UnternehmenCard from "../../components/unternehmencard/unternehmencard.component";
import WerkzeugenCard from "../../components/werkzeugencard/werkzeugencard.component";
import ArticleCard from "../../components/articlecard/articlecard.component";
import "./home.styles.scss";
import WHeader from "../../components/header/header.component";

const Home = ({ homeProp }) => {
  const { title } = homeProp;
  return (
    <div className="home">
      <WHeader headerProps={homeProp.header} />
      <div className="home-firstsection">
        <h1>{title}</h1>
        <h3>
          {homeProp.description} <br />
          <span>{homeProp.textstrong}</span>
        </h3>
        <h2>{homeProp.quote}</h2>
        <WButton
          className="home-firstsection-button"
          buttonText={homeProp.button}
        />
      </div>

      <div className="home-unserwerkzeugen">
        <h1 className="home-unserwerkzeugen-title">
          {homeProp.unserwerkzeugen.title}
        </h1>
        <WerkzeugenCard articleCardProp={homeProp.unserwerkzeugen.cards} />
      </div>
      <div className="home-unternehmen">
        <h1 className="home-unternehmen-title">{homeProp.unternehmen.title}</h1>
        <p className="home-unternehmen-description">
          {homeProp.unternehmen.description}
        </p>
        <UnternehmenCard unternehmenCardProp={homeProp.unternehmen.logos} />
      </div>
      <div className="home-digitalenwerkbank">
        <h1 className="home-digitalenwerkbank-title">
          {homeProp.digitalenwerkbank.title}
        </h1>
        <ArticleCard articleCardProp={homeProp.digitalenwerkbank.cards} />
        <WButton
          className="home-digitalenwerkbank-button"
          buttonText={homeProp.digitalenwerkbank.button}
        />
      </div>

      <div className="home-digitalenwerkbank">
        <h1 className="home-digitalenwerkbank-title">{homeProp.news.title}</h1>
        <ArticleCard articleCardProp={homeProp.news.cards} />
        <WButton
          className="home-digitalenwerkbank-button"
          buttonText={homeProp.news.button}
        />
      </div>
      <div className="home-partnerships">
        <h1 className="home-partnerships-title">
          {homeProp.partnerships.title}
        </h1>

        <UnternehmenCard unternehmenCardProp={homeProp.partnerships.logos} />
      </div>
    </div>
  );
};

export default Home;
