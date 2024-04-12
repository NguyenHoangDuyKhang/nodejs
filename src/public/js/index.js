var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

//đồng hồ
const countdownElement = document.getElementById("countdown");
  let interval;
  // Hàm cập nhật thời gian đếm ngược
  function updateCountdown() {
    const now = new Date().getTime();
    const targetDate = new Date("2024-05-10T23:59:59").getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
    if (!interval) {
      interval = setInterval(updateCountdown, 1000);
    }
  }
  // Cập nhật thời gian đếm ngược ban đầu
  updateCountdown();