import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/hotelList.css';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('https://wmw3lg8sha.execute-api.us-east-2.amazonaws.com/dev/dummy')
      .then(response => {
        const hotelData = response.data.data;
        setHotels(hotelData.hotels);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <section>
      <h1>Hoteles</h1>
      {hotels.map((hotel, index) => (
        <div key={index} className="hotel-card">
            <div className='header-card'>
                <h2>{hotel.name}</h2>
                <p>{hotel.stars} Stars</p>
            </div>
          <h3 className='address-card'>{hotel.address}</h3>
          <div className='body-card'>
            <img src={hotel.image} alt={hotel.name} />
            <div className='subbody-card'>
                {hotel.boardbases.map((board, index) => (
                    <h4 key={index} className='board-card'>{board}</h4>
                ))}
                <ul className='list'>
                    {hotel.amenities.map((service, index) => (
                        <li key={index}>{service.name}</li>
                    ))}
                </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HotelList;
