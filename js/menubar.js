function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = String(now.getMinutes()).padStart(2, '0');
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  document.getElementById('menubar-clock').textContent = `${h}:${m} ${ampm}`;
  const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  document.getElementById('menubar-date').textContent = `${day} ${date} ${month}`;
}
updateClock();
setInterval(updateClock, 1000);
