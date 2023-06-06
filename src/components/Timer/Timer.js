import Button from '../Button/Button';
import FormattedTime from '../FormatedTime/FormatedTime';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState('');

  const start = () => {
    setTimer(
      setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1)
    );
  };

  useEffect(() => {
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timer]);

  const handleStart = () => {
    start();
  };
  const handleStop = () => {
    clearInterval(timer);
  };
  const handleReset = () => {
    setTime(0);
  };

};

export default Timer;
