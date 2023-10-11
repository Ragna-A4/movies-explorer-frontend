const wordsImage = new URL(
  "../images/initialdata/33words.jpg",
  import.meta.url
);
const yearsImage = new URL(
  "../images/initialdata/100years.jpg",
  import.meta.url
);
const banksyImage = new URL(
  "../images/initialdata/banksy.jpg",
  import.meta.url
);
const basquiatImage = new URL(
  "../images/initialdata/basquiat.jpg",
  import.meta.url
);
const booksellersImage = new URL(
  "../images/initialdata/booksellers.jpg",
  import.meta.url
);
const gimmeImage = new URL(
  "../images/initialdata/gimme.jpg",
  import.meta.url
);
const janiceImage = new URL(
  "../images/initialdata/janice.jpg",
  import.meta.url
);
const onthewavesImage = new URL(
  "../images/initialdata/onthewaves.jpg",
  import.meta.url
);
const pjhurvyImage = new URL(
  "../images/initialdata/pjhurvy.jpg",
  import.meta.url
);
const pullyourselfImage = new URL(
  "../images/initialdata/pullyourself.jpg",
  import.meta.url
);
const runningImage = new URL(
  "../images/initialdata/running.jpg",
  import.meta.url
);
const thinkingImage = new URL(
  "../images/initialdata/thinking.jpg",
  import.meta.url
);

export const initialData = [
  {
    movieId: "123",
    name: "33 слова о дизайне",
    duration: "2ч 37м",
    image: wordsImage,
    owner: "me",
  },
  {
    movieId: "223",
    name: "Киноальманах «100 лет дизайна»",
    duration: "57м",
    image: yearsImage,
  },
  {
    movieId: "323",
    name: "В погоне за Бенкси",
    duration: "1ч 12м",
    image: banksyImage,
    owner: "me",
  },
  {
    movieId: "423",
    name: "Баския: Взрыв реальности",
    duration: "1ч 07м",
    image: basquiatImage,
  },
  {
    movieId: "523",
    name: "Бег это свобода",
    duration: "1ч 32м",
    image: runningImage,
  },
  {
    movieId: "623",
    name: "Книготорговцы",
    duration: "1ч",
    image: booksellersImage,
  },
  {
    movieId: "723",
    name: "Когда я думаю о Германии ночью",
    duration: "33м",
    image: thinkingImage,
  },
  {
    movieId: "823",
    name: "Gimme Danger: История Игги и The Stooges",
    duration: "2ч 15м",
    image: gimmeImage,
  },
  {
    movieId: "923",
    name: "Дженис: Маленькая девочка грустит",
    duration: "37м",
    image: janiceImage,
    owner: "me",
  },
  {
    movieId: "133",
    name: "Соберись перед прыжком",
    duration: "1ч 47м",
    image: pullyourselfImage,
  },
  {
    movieId: "143",
    name: "Пи Джей Харви: A dog called money",
    duration: "1ч 07м",
    image: pjhurvyImage,
  },
  {
    movieId: "153",
    name: "По волнам: Искусство звука в кино",
    duration: "1ч 31м",
    image: onthewavesImage,
  },
];
