import Avatar from "./Avatar";

// function Card({ children }) {
//   return <div className="card">{children}</div>;
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: "Katsuko Saruhashi",
//           imageId: "YfeOqp2",
//         }}
//       />
//     </Card>
//   );
// }

const Card = ({ name, size, children }) => {
  return (
    <>
      <div>
        This is {name} component called inside profile and size={size}
      </div>
      {children}
    </>
  );
};

const Profile = () => {
  return (
    <Card name="profile card" size="40">
      <h2>This is card children component</h2>
      <div>Some more info about the card</div>
    </Card>
  );
};
export default Profile;
