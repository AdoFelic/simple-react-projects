import React, { useState, useEffect } from 'react';
import { Badge } from 'evergreen-ui'
import './Clock.css';

const Clock = ({ theme }) => {
  let clock;
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    clock = setInterval(() => tickTock(), 1000);
    return () => {
      clearInterval(clock);
    };
  }, [])

  const tickTock = () => setDate(new Date());

  const badgeStyle = {
    "backgroundColor": theme === "Light" ? "#425A70": "#DDEBF7",
    "color": theme === "Light" ? "#DDEBF7": "#425A70"
  }

  return (
    <div className="clock-container">
      <Badge style={badgeStyle} isSolid>
          {date.toLocaleDateString()}
      </Badge>
      <Badge style={badgeStyle} isSolid>
          {date.toLocaleTimeString()}
      </Badge>
    </div>
  );
}

export default Clock;
