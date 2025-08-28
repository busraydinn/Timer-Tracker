import { useEffect, useRef, useState } from 'react';
import './styles/Timer.css';

function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const intervalRef = useRef(null); // setInterval ID'si burada tutulur

  // Zamanlayıcı başlat
  const startTimer = () => {
    if (intervalRef.current) return; // Eğer zaten çalışıyorsa yeniden başlatma

    intervalRef.current = setInterval(() => {
      setSecond(prevSecond => {
        if (prevSecond + 1 === 60) {
          setMinute(prevMinute => {
            if (prevMinute + 1 === 60) {
              setHour(prevHour => prevHour + 1);
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000);
  };

  // Zamanlayıcıyı durdur
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // Sıfırla
  const resetTimer = () => {
    stopTimer();
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  // Bileşen kaldırıldığında interval'i temizle
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  // Sayıyı 2 haneli göster (padStart için)
  const format = (n) => n.toString().padStart(2, '0');

  return (
    <div className="timer">
      <div className="timer-header">
        <h1>Timer Tracker</h1>
      </div>
      <div className="timer-body">
       <div className='timer-body-time'>
        {format(hour)} : {format(minute)} : {format(second)}
       </div>
       <div className='timer-body-info'>
        <p>Hour</p> <p>Minute</p> <p>Second</p>
       </div>
      </div>
      <div className="timer-footer">
        <button onClick={startTimer}>START</button>
        <button onClick={stopTimer}>STOP</button>
        <button onClick={resetTimer}>CLEAR</button>
      </div>
    </div>
  );
}

export default Timer;
