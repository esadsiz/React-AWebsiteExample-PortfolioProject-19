import WButton from "../../components/button/button.component";
import UnserworkflowCard from "../../components/unserworkflowcard/unserworkflowcard.component";
import WerkzeugenCard from "../../components/werkzeugencard/werkzeugencard.component";
import WHeader from "../../components/header/header.component";
import "./werkzeugen.styles.scss";

const Werkzeugen = ({ werkzeugenProp }) => {
  return (
    <div className="werkzeugen">
      <WHeader headerProps={werkzeugenProp.header} />
      <WerkzeugenCard
        className="werkzeugen-articlecard"
        articleCardProp={werkzeugenProp.firstsection}
      />
      <h1 className="werkzeugen-title">{werkzeugenProp.secondsection.title}</h1>
      <UnserworkflowCard
        className="werkzeugen-articlecard"
        articleCardProp={werkzeugenProp.secondsection.cards}
      />
      <WButton buttonText={werkzeugenProp.secondsection.button} />
    </div>
  );
};

export default Werkzeugen;
