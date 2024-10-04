import { Link } from "react-router-dom";import clsx from "clsx";
import { Icons } from "@/constants";
import { MBButton, HMInputOtp } from "@/components";
import styles from "../Authentication.module.css";

export const Otp = () => {
  return (
    <div className={clsx(styles.ForgotWrapper)}>
      <div className={styles.AuthLinkWrapper}>
        <Link to={"/forgot-password"}>{Icons.BackButton}Back</Link>
      </div>
      <div>
        <h1 className={clsx(styles.ForgotTitle)}>Enter OTP</h1>
        <p className={clsx(styles.ForgotText)}>
          We have share a code of your registered email address econev666@gmail.com
        </p>
      </div>
      <form action="" className={styles.FromWrapper}>
        <HMInputOtp length={6} size={"large"} />
        <MBButton variant={"primary"} block>
          Verify
        </MBButton>
      </form>
    </div>
  );
};
