import "./adressandmap.styles.scss";

const AddressAndMap = ({ addressAndMapProp }) => {
  const allAddressesAndMaps = Object.values(addressAndMapProp).map(
    (value, index) => {
      return (
        <div className="addressandmap">
          <div className="addressandmap-address">
            <h2>{value.title}</h2>
            <p>
              {value.contactperson} <br />
              {value.address1} <br />
              {value.address2} <br />
              {value.tel} <br />
              {value.email}
            </p>
          </div>

          <iframe
            className="addressandmap-map"
            src={value.map}
            width="600"
            height="450"
            title="map"
          ></iframe>
        </div>
      );
    }
  );

  return <div className="addressandmap-mapsalign">{allAddressesAndMaps}</div>;
};

export default AddressAndMap;
