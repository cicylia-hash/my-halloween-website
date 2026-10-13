function updateCountdown() {
  let today = new Date();
  let halloween = new Date(today.getFullYear(), 9, 31);
  if (today > halloween) {
    halloween = new Date(today.getFullYear() +1, 9, 31);
}
let difference = halloween - today;
let days = Math.ceil(difference / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerHTML = 
  days + " days until Hallowen!!";
}
updateCountdown();
