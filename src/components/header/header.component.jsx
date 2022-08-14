import "./header.styles.scss";

const WHeader = ({ headerProps }) => {
  return (
    <div className="header">
      <div className="header-text">
        <h1 className="header-text-title">{headerProps.title}</h1>
        <p className="header-text-description">{headerProps.description}</p>
        <div className="header-header-button"></div>
      </div>
    </div>
  );
};

export default WHeader;
