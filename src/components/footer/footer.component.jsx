import "./footer.styles.scss";

const Footer = ({ footerProp }) => {
  return (
    <div className="footer">
      <div className="footer-columns">
        <h1>{footerProp.column1.title}</h1>
        <p>{footerProp.column1.line1}</p>
        <p> {footerProp.column1.line2}</p>
        <p> {footerProp.column1.line3}</p>
        <p> {footerProp.column1.line4}</p>
        <p> {footerProp.column1.line5}</p>
      </div>
      <div className="footer-columns left">
        <h1>{footerProp.column2.title}</h1>
        <p>{footerProp.column2.line1} </p>
        <p> {footerProp.column2.line2} </p>
        <p> {footerProp.column2.line3}</p>
      </div>
      <div className="footer-columns">
        <h1>{footerProp.column3.title}</h1>
        <p>{footerProp.column3.line1} </p>
        <p> {footerProp.column3.line2} </p>
        <p>{footerProp.column3.line3} </p>
        <p> {footerProp.column3.line4} </p>
      </div>
      <div className="footer-columns left">
        <h1>{footerProp.column4.title}</h1>
        <p>{footerProp.column4.line2}</p>
        <p> {footerProp.column4.line3}</p>
        <p> {footerProp.column4.line4}</p>
        <p> {footerProp.column4.line5}</p>
        <img
          className="footer-columns-img"
          src={footerProp.column4.line1}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
