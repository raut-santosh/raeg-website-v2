import React, { useEffect, useState } from 'react';

function Countdown({ count }) {
  const [timeLeft, setTimeLeft] = useState(count * 60); // Convert minutes to seconds
  const [isRunning, setIsRunning] = useState(false); // Track if the countdown is running

  useEffect(() => {
    // Reset the countdown whenever the count prop changes
    setTimeLeft(count * 60); // Reset timeLeft to the new count in seconds
    setIsRunning(true); // Start the countdown whenever the count changes
  }, [count]);

  useEffect(() => {
    if (!isRunning) return; // Exit if the countdown is not running

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalId); // Clear the interval if countdown ends
          setIsRunning(false); // Stop the countdown when it reaches 0
          return 0; // Ensure it doesn't go below 0
        }
        return prevTime - 1; // Decrease time left by 1 second
      });
    }, 1000);

    // Clean up the interval when the countdown finishes or when the component unmounts
    return () => clearInterval(intervalId);
  }, [isRunning]);

  // Format timeLeft in minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span>
      {timeLeft > 0 ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` : "0:00"}
    </span>
  );
}

export default Countdown;
