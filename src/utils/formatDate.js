export default function formatDate(date) {
  const newDate = new Date(date.toISOString());

  const yyyy = newDate.getFullYear();
  let mm = newDate.getMonth() + 1; // Months start at 0!
  let dd = newDate.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "." + mm + "." + yyyy;

  return formattedToday;
}
