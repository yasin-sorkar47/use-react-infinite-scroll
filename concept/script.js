let circle = document.getElementById("circle");

const observer = new IntersectionObserver((items) => {
  const tracingInfo = items[0];

  if (tracingInfo.isIntersecting) {
    console.log("circle is visible");
    observer.disconnect(circle);
  } else {
    console.log("circle is not visible");
  }
});

observer.observe(circle);
