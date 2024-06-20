import React, { useState } from 'react';
import { toursData } from '../data/toursData';
import TourDetails from './TourDetails';
import './ToursPage.css';

function ToursPage({ language }) {
  const [visibleTours, setVisibleTours] = useState(toursData.map(tour => ({ ...tour, visible: true })));
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCriteria, setFilterCriteria] = useState({
    duration: '',
    startDate: '',
  });
  const [sortCriteria, setSortCriteria] = useState('');

  const toggleVisibility = (id) => {
    setVisibleTours(prevTours =>
      prevTours.map(tour => tour.id === id ? { ...tour, visible: !tour.visible } : tour)
    );
  };

  const filteredTours = visibleTours.filter(tour => {
    const matchesSearch = tour.name.toLowerCase().includes(searchTerm.toLowerCase()) || tour.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = filterCriteria.duration ? tour.duration === filterCriteria.duration : true;
    const matchesStartDate = filterCriteria.startDate ? tour.startDate === filterCriteria.startDate : true;
    return matchesSearch && matchesDuration && matchesStartDate;
  });

  const sortedTours = [...filteredTours].sort((a, b) => {
    if (sortCriteria === 'startDate') {
      return new Date(a.startDate) - new Date(b.startDate);
    } else if (sortCriteria === 'price') {
      return a.price - b.price;
    } else if (sortCriteria === 'duration') {
      const durations = { '12 hr': 0.5, '1 day': 1, '2 days': 2, '1 week': 7, '2 weeks': 14 };
      return durations[a.duration] - durations[b.duration];
    }
    return 0;
  });

  return (
    <div className="tours-page">
      <h1>{language === 'en' ? 'Tours' : 'ტურები'}</h1>
      <SearchBar language={language} setSearchTerm={setSearchTerm} />
      <FilterBar language={language} setFilterCriteria={setFilterCriteria} />
      <SortMenu language={language} setSortCriteria={setSortCriteria} />
      <div className="admin-section">
        <h2>{language === 'en' ? 'Visibility Settings' : 'ხილვადობის პარამეტრები'}</h2>
        {visibleTours.map(tour => (
          <div key={tour.id} className="visibility-toggle">
            <label>
              <input
                type="checkbox"
                checked={tour.visible}
                onChange={() => toggleVisibility(tour.id)}
              />
              {language === 'en' ? tour.name : tour.nameGeo}
            </label>
          </div>
        ))}
      </div>
      <div className="tours-list">
        {sortedTours.filter(tour => tour.visible).map(tour => (
          <TourDetails key={tour.id} tour={tour} language={language} />
        ))}
      </div>
    </div>
  );
}

const SearchBar = ({ language, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={language === 'en' ? 'Search tours...' : 'ტურების ძიება...'}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

const FilterBar = ({ language, setFilterCriteria }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setFilterCriteria(prev => ({ ...prev, duration: e.target.value }))}>
        <option value="">{language === 'en' ? 'Select duration' : 'აირჩიეთ ხანგრძლივობა'}</option>
        <option value="12 hr">{language === 'en' ? '12 hr' : '12 სთ'}</option>
        <option value="1 week">{language === 'en' ? '1 week' : '1 კვირა'}</option>
        <option value="2 days">{language === 'en' ? '2 days' : '2 დღე'}</option>
        <option value="2 weeks">{language === 'en' ? '2 weeks' : '2 კვირა'}</option>
        <option value="1 day">{language === 'en' ? '1 day' : '1 დღე'}</option>
      </select>
      <input
        type="date"
        onChange={(e) => setFilterCriteria(prev => ({ ...prev, startDate: e.target.value }))}
      />
    </div>
  );
};

const SortMenu = ({ language, setSortCriteria }) => {
  return (
    <div className="sort-menu">
      <select onChange={(e) => setSortCriteria(e.target.value)}>
        <option value="">{language === 'en' ? 'Sort by' : 'დალაგება'}</option>
        <option value="startDate">{language === 'en' ? 'Start Date' : 'დაწყების თარიღი'}</option>
        <option value="price">{language === 'en' ? 'Price' : 'ფასი'}</option>
        <option value="duration">{language === 'en' ? 'Duration' : 'ხანგრძლივობა'}</option>
      </select>
    </div>
  );
};

export default ToursPage;
