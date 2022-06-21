import figlet from "figlet";

const prova = figlet.text(
  "Node js",
  {
    font: "Alligator2",
    horizontalLayout: "universal smushing",
    verticalLayout: "fitted",
    width: 150,
    whitespaceBreak: true,
  },
  (err, data) => {
    if (err) {
      console.log("Something went wrong.....");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);

export { prova };
