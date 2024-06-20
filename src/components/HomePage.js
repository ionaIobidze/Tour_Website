import React from 'react';
import { Link } from 'react-router-dom';
import { toursData } from '../data/toursData';
import './HomePage.css';

function HomePage({ language }) {
  return (
    <div className="homepage">
      <h1>{language === 'en' ? 'Welcome to the Tours Website' : 'მოგესალმებით ტურების ვებგვერდზე'}</h1>
      <Carousel language={language} />
      <Countdown language={language} />
      <Link to="/signup">{language === 'en' ? 'Sign Up / Log In' : 'რეგისტრაცია / შესვლა'}</Link>
    </div>
  );
}

const Carousel = ({ language }) => {
  return (
    <div className="carousel">
      {toursData.map((tour) => (
        <div key={tour.id} className="carousel-item">
          <img src={tour.image} alt={tour.name} />
          <div className="carousel-overlay">
            <h3>{language === 'en' ? tour.name : tour.nameGeo}</h3>
            <p>{language === 'en' ? tour.description : tour.descriptionGeo}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Countdown = ({ language }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(toursData[0].startDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="countdown">
      <h2>{language === 'en' ? 'Next Tour Starts In:' : 'შემდეგი ტური იწყება:'}</h2>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </div>
  );
};

export default HomePage;
