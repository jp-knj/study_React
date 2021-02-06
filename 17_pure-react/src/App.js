const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello World"),
    React.createElement(Pet, {
      name: "たま",
      animal: "猫",
      breed: "マタタビ",
    }),
    React.createElement(Pet, {
      name: "ポチ",
      animal: "犬",
      breed: "骨",
    }),
    React.createElement(Pet, {
      name: "ケンジ",
      animal: "ヒト",
      breed: "酒",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
