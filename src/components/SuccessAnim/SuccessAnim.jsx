import style from "./Success.module.css";

const SuccessAnim = ({ ...other }) => {
  return (
    <div
      className={`${style.successAnimation} ${
        other.className === "offline" ? style.offline : ""
      }`}
    >
      <svg
        className={style.checkmark}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 52 52"
      >
        <circle
          className={style.checkmarkCircle}
          cx="26"
          cy="26"
          r="25"
          fill="none"
        />
        <path
          className={style.checkmarkCheck}
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </svg>
    </div>
  );
};

export default SuccessAnim;
