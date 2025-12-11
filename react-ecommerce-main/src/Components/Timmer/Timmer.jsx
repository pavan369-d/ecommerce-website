import React, { useEffect, useState } from 'react';

const Timmer = ({ newEndTime,setTimeCount }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(newEndTime) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      setTimeCount(timeLeft)
    }, 1000);

    return () => clearInterval(timer);
  }, [newEndTime,timeLeft]);

  const formatTime = (time) => {
    return String(time).padStart(2, '0');
  };

  return (
    <div className='timmer-box'>
     
      <div className="days-left">
        <span className="timmer-text">
          Days
        </span>
        <span className="timmer-time">
        {formatTime(timeLeft.days)}
       
        </span>
      </div>
      <div className="col-time">:</div>
      <div className="days-left">
        <span className="timmer-text">
          Hours
        </span>
        <span className="timmer-time">
        {formatTime(timeLeft.hours)}
        </span>
      </div>
      <div className="col-time">:</div>
      <div className="days-left">
        <span className="timmer-text">
          Minutes
        </span>
        <span className="timmer-time">
        {formatTime(timeLeft.minutes)}
        </span>
      </div>
      <div className="col-time">:</div>
      <div className="days-left">
        <span className="timmer-text">
          Seconds
        </span>
        <span className="timmer-time">
        {formatTime(timeLeft.seconds)}
        </span>
      </div>
      
    </div>
  );
};

export default Timmer