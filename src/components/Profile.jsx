import Avatar from "./Avatar";

const persons = [
  { name: "Sawsan", age: 50 },
  { name: "Ahmad", age: 70 },
  { name: "Rana", age: 20 },
  { name: "Ali", age: 60 },
];

const Profile = () => {
  return (
    <div>
      This is Profile component
      {persons.map((person) => (
        <Avatar {...person} childNum="40" status="single" />
      ))}
    </div>
  );
};
export default Profile;
// To add it to utils.js
// export function getImageUrl(person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }
