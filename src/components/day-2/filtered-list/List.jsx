import { people } from "./data.js";
import { getImageUrl } from "../../../utils/script.js";

// export default function List() {
//   const chemists = people.filter((person) => person.profession === "chemist");
//   const listItems = chemists.map((person) => (
//     <li>
//       <img src={getImageUrl(person)} alt={person.name} />
//       <p>
//         <b>{person.name}:</b>
//         {" " + person.profession + " "}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   ));
//   return <ul>{listItems}</ul>;
// }

const List = () => {
  return (
    <ul>
      {people.map(
        (item) =>
          item.profession === "chemist" && (
            <li key={item.id}>
              <div>name: {item.name}</div>
              <img src={getImageUrl(item)} alt={item.name} />
            </li>
          )
      )}
    </ul>
  );
};
export default List;
