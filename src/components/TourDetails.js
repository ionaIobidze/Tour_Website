import React from 'react';
import './TourDetails.css';

function TourDetails({ tour, language }) {
  return (
    <div className="tour-details">
      <img src={tour.image} alt={tour.name} />
      <h3>{language === 'en' ? tour.name : tour.nameGeo}</h3>
      <p>{language === 'en' ? tour.description : tour.descriptionGeo}</p>
      <p>{language === 'en' ? `Duration: ${tour.duration}` : `ხანგრძლივობა: ${tour.durationGeo}`}</p>
      <p>{language === 'en' ? `Start Date: ${new Date(tour.startDate).toLocaleDateString()}` : `დაწყების თარიღი: ${new Date(tour.startDate).toLocaleDateString('ka-GE')}`}</p>
      <p>{language === 'en' ? `Price: $${tour.price}` : `ფასი: $${tour.price}`}</p>
    </div>
  );
}

export default TourDetails;
