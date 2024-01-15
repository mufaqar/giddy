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
  return outputDateString;
};

export const replaceAndCap = (str: any) => {
  const stringWithSpaces = str.replace(/-/g, " ");
  const capitalizedString = stringWithSpaces.replace(
    /\b\w/g,
    (firstLetter: any) => firstLetter.toUpperCase()
  );
  return capitalizedString;
};

export const alphabetArray: any = [];
for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
  alphabetArray.push(String.fromCharCode(i));
}

export const sortTopicsByAlphabatics = (topicsArray: any) => {
  const sortedArray = topicsArray.sort((a:any, b:any) => a.name.localeCompare(b.name));

  // Organize the sorted array into the desired structure
  const sortedTopics:any = [];
  let currentLetter = "";

  sortedArray.forEach((topic:any) => {
    const firstLetter = topic.name.charAt(0).toLowerCase();

    if (firstLetter !== currentLetter) {
      currentLetter = firstLetter;
      sortedTopics.push({ tag: currentLetter, topics: [topic] });
    } else {
      sortedTopics[sortedTopics.length - 1].topics.push(topic);
    }
  });

  return sortedTopics;
};
