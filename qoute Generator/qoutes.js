const qoutes = [
  {
    qoute:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",

    person: "Oprah Winfrey",
  },
  {
    qoute:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    person: "James Cameron",
  },
  {
    qoute:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    person: "-Thomas A. Edison",
  },
  {
    qoute:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    person: "Dr. Seuss",
  },
  {
    qoute:
      "Get to know the right, then you would know the people of right. Right Is not measured by its men, but men are measured by their right.",
    person: "Ali Ibn Abi Talib",
  },
  {
    qoute:
      "Justice is better than courage as if everyone is fair to others, then there will be no need for courage.",
    person: "Ali Ibn Abi Talib",
  },
];

const qouteText = document.querySelector(".text");
const qoutePerson = document.querySelector(".qoutes-person");
const qoute_btn = document.querySelector(".btn");

qoute_btn.addEventListener("click", () => {
  const randomQoute = Math.floor(Math.random() * qoutes.length);
  qouteText.innerText = qoutes[randomQoute].qoute;
  qoutePerson.innerText = qoutes[randomQoute].person;
});
