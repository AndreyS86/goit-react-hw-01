import userData from "./userData.json";
import Profile from "./components/Profile/Profile";
import Friends from "./friends.json";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={Friends} />
    </>
  );
};

export default App;
