import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 0; minutes = 0; seconds = 0; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { val: time.hours, label: "Horas" },
        { val: time.minutes, label: "Min" },
        { val: time.seconds, label: "Seg" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="bg-warm-brown text-primary-foreground font-display text-3xl md:text-4xl font-bold w-16 md:w-20 h-16 md:h-20 flex items-center justify-center rounded-lg">
            {pad(item.val)}
          </span>
          <span className="text-muted-foreground text-xs mt-1 font-body">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
