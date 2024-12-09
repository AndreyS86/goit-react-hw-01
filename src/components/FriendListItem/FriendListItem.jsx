import styles from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <li className={styles.card}>
      <img className={styles.avatar} src={avatar} alt={`${name}'s avatar`} />
      <p className={styles.name}>{name}</p>
      <span
        className={clsx(styles.status, isOnline ? styles.green : styles.red)}
      >
        {isOnline ? "Online" : "Offline"}
      </span>
    </li>
  );
};

export default FriendListItem;
