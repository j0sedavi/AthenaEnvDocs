const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};


var copys = document.querySelectorAll(".fa-clipboard");
var codes = document.querySelectorAll(".code");

for (var i = 0; i < copys.length; i++) {
  (function(index) {
    function fun() {
      copyToClipboard(codes[index].innerText);
    }
    copys[index].addEventListener("click", fun);
  })(i);
}
var img = document.querySelector(".logo")
var header = document.querySelector("header")
if(header) {
  var h1 = header.querySelector("h1")
  h1.addEventListener("click", () => {
    window.location.href = "index.html"
  });
}
if(img) {
img.addEventListener("click", () => {
  window.location.href = "index.html"
})
}