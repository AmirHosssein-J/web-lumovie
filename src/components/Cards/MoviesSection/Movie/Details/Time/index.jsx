import styles from "../details.module.scss";

export default function Time({ time }) {
  return <a className={`${styles["time"]}`}>{time}</a>;
}
