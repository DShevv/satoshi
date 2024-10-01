export default function calculateTime(startTimeUTC) {
  const startDate = new Date(startTimeUTC);
  const currentDate = new Date(new Date().toISOString().slice(0, -1));
  return (currentDate - startDate.getTime()) / 1000;
}
