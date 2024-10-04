import clsx from "clsx";
import styles from "./Title.module.css/";

export const Title = ({ children, className, spacing }) => {
  return (
    <div
      className={clsx(
        className,
        {
          ["mb-5"]: spacing == true,
          ["mb-0"]: spacing == false,
        },
        "d-flex align-items-center mb-5"
      )}
    >
      <span className={clsx(styles.leftLine, "d-flex bg-primary")}></span>
      <h4 className="fw-medium text-capitalize">{children}</h4>
    </div>
  );
};
