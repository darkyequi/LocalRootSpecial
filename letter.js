$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    skip(); // now it calls skip instead of close
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }

  function skip() {
    window.location.href = "Gallery.html"; // Replace with your actual next page URL
  }
});
