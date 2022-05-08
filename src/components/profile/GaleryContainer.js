import GaleryImage from './GaleryImage';
import './Style/GaleryContainer.css';
const GaleryContainer = () => {
  /*fetch*/
  const images = [
    {
      id: 0,
      title: 'nev1',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 1,
      title: 'nev2',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 2,
      title: 'nev3',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 3,
      title: 'nev4',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 4,
      title: 'nev5',
      url: 'http://placekitten.com/300/200',
    },
    /* {
      id: 2,
      title: 'nev3',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 3,
      title: 'nev4',
      url: 'http://placekitten.com/300/200',
    },
    {
      id: 4,
      title: 'nev5',
      url: 'http://placekitten.com/300/200',
    }, */
  ];

  return (
    <div className='galery-container'>
      <h3>Galery</h3>
      <div className='galery-container-flex'>
        {images &&
          images.map((pic, index) => {
            if (images.length < 8) {
              if (index < 4) {
                return <GaleryImage pic={pic} />;
              }
            }
            if (images.length >= 8) {
              if (index < 8) {
                return <GaleryImage pic={pic} />;
              }
            }
            return null;
          })}
      </div>
    </div>
  );
};
export default GaleryContainer;
