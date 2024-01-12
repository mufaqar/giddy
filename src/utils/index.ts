export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  rows: 1,
  slidesPerRow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 1,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 1,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

export const ConvertDate = (inputDateString: any) => {
  var dateObject = new Date(inputDateString);
  var options: any = { year: "numeric", month: "long", day: "numeric" };
  var outputDateString = dateObject.toLocaleDateString("en-US", options);
  return outputDateString
};
