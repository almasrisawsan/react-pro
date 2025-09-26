const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "red",
    color: "pink",
  },
  img: "https://i.imgur.com/7vQD0fPs.jpg",
};

export default function TodoList() {
  const { name: personName, theme, img } = person;
  return (
    <div style={theme}>
      <h1>Person name = {personName}</h1>
      <img src={img} />
      <ul>
        <li>Item element 1</li>
        <li>Item element 2</li>
        <li>Item element 3</li>
      </ul>
    </div>
  );
}
