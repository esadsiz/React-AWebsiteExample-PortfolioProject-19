import AddressAndMap from "../../components/adressandmap/adressandmap.component";
import WButton from "../../components/button/button.component";
import WHeader from "../../components/header/header.component";
import "./holdenprofi.styles.scss";

const Holdenprofi = ({ holdenprofiProp }) => {
  return (
    <div className="pagealign">
      <WHeader headerProps={holdenprofiProp.header} />
      <div className="holdenprofi">
        <div className="holdenprofi-anrufenandform">
          <div className="holdenprofi-anrufenandform-anrufen">
            <h2>{holdenprofiProp.profi.title}</h2>
            <p>
              {holdenprofiProp.profi.name} <br />
              {holdenprofiProp.profi.mobile} <br />
              {holdenprofiProp.profi.email}
            </p>
          </div>
          <form className="holdenprofi-anrufenandform-form">
            <h2>{holdenprofiProp.form.title}</h2>
            <p>{holdenprofiProp.form.name}</p>
            <input type="text" />
            <p>{holdenprofiProp.form.email}</p>
            <input type="text" />
            <p>{holdenprofiProp.form.subject}</p>
            <input type="text" />
            <p>{holdenprofiProp.form.message}</p>
            <input type="text" />
            <p>{holdenprofiProp.form.agreement}</p>
            <p>
              {holdenprofiProp.form.checkbox}{" "}
              <span>
                <input type="checkbox" name="" id="checkbox" />
              </span>
            </p>

            <WButton buttonText={holdenprofiProp.form.button} />
          </form>
        </div>
        <AddressAndMap
          className="holdenprofi-addresses"
          addressAndMapProp={holdenprofiProp.addresses}
        />
      </div>
    </div>
  );
};

export default Holdenprofi;
