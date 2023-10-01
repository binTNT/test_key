alert('Vui lòng chuyển bàn phím về tiếng anh để có trải nghiệm tốt nhất^^');
document.body.onkeydown = (e) => {
  toggle(e.code);
};

document.body.onkeyup = (e) => {
    toggle(e.code);
};

function toggle(s) {
  document.getElementById(s).classList.toggle("down");
}
function check() {
  var key = document.getElementsByTagName("span");
  for (i = 0; i < key.length; i++) {
    let c = key[i].className;
    if (c.includes("down")) {
      key[i].classList.toggle("down");
    }
  }
}
setInterval(check, 290);
