import "./derfirma.styles.scss";
import WButton from "../../components/button/button.component";
import WHeader from "../../components/header/header.component";

const DerFirma = ({ derfirmaProp }) => {
  return (
    <div className="dwpagealign">
      <WHeader headerProps={derfirmaProp.header} />
      <div className="derfirma">
        <h1 className="derfirma-title">{derfirmaProp.title}</h1>
        <h3 className="derfirma-description">{derfirmaProp.description}</h3>
        <h2 className="derfirma-quote">{derfirmaProp.quote}</h2>
        <h1 className="derfirma-title">{derfirmaProp.title2}</h1>
        <h3 className="derfirma-description">
          {derfirmaProp.description2} <br />
          {derfirmaProp.description3}
        </h3>
        <h2 className="derfirma-quote">{derfirmaProp.quote2}</h2>
        <WButton buttonText={derfirmaProp.button1} />
        <h3 className="derfirma-description">{derfirmaProp.description4}</h3>
        <WButton buttonText={derfirmaProp.button2} />
      </div>
    </div>
  );
};

export default DerFirma;
