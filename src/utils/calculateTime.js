export default function calculateTime(startTimeUTC) {
  const startDate = new Date(startTimeUTC);
  const currentDate = new Date();
  return (currentDate - startDate.getTime()) / 1000;
}
