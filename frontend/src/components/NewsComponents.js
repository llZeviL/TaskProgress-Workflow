import React from 'react';
import '../Styles/NewsComponent.css';

const NewsComponent = ({ news }) => {
  return (
    <div className="news-container">
      {news.map((item, index) => (
        <div className="news-card" key={index}>
          <div className="date">
            <span className="day">{item.day}</span>
            <span className="month">{item.month}</span>
          </div>
          <div className="news-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
