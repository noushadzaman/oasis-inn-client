function daysUntil(targetDate) {
  // Create a Date object for the current date
  const currentDate = new Date();

  // Parse the target date string into a Date object
  const targetDateObj = new Date(targetDate);

  // Calculate the time difference in milliseconds
  const timeDifference = targetDateObj - currentDate;

  // Convert the time difference to days
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  return daysLeft;
}

export default daysUntil;
