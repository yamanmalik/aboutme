





function typeWriter() {
    var typed = new Typed('#yaman', {
        strings: ['I\'m Yaman.'],
        typeSpeed: 120,
      });
}




$('#yaman').appear(function() {
    typeWriter();
  });

