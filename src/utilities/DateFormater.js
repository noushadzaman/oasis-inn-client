const formatDate = (date) => {
  const inputDate = new Date(date);
  // Extract year, month, and day components
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = inputDate.getDate().toString().padStart(2, "0");

  // Format into "YYYY-MM-DD" format
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

export default formatDate