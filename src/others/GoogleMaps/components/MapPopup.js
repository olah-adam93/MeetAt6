import { Popup } from '@googlemaps/react-wrapper';

const MapPopup = () => {
  return (
    <div className='popup'>
      <Popup>
        Name.... <br />
        Address... <br />
      </Popup>
    </div>
  );
};

export default MapPopup;
