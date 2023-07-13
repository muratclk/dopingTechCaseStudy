import {useEffect, useState, useMemo} from 'react';

const useCountdown = (minute: number) => {
  const countDownDate = useMemo(
    () => new Date(new Date().getTime() + minute * 60000).getTime(),
    [minute],
  );
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime(),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
  // calculate time left
  // if number is 0-10 add 0 before
  const hours = (
    '0' +
    Math.max(
      0,
      Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    )
  ).slice(-2);
  const minutes = (
    '0' + Math.max(0, Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)))
  ).slice(-2);
  const seconds = (
    '0' + Math.max(0, Math.floor((countDown % (1000 * 60)) / 1000))
  ).slice(-2);

  return [hours, minutes, seconds];
};

export {useCountdown};
