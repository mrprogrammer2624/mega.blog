import { Avatar, Dropdown, Layout } from "antd";
import { useTitle } from "../../App";
import clsx from "clsx";
import { Icons } from "@/constants";
import { useNavigate } from "react-router-dom";
import { MBButton, HMInput } from "@/components/";
import styles from "./MBHeader.module.css";

const { Header } = Layout;

export const MBHeader = () => {
  const navigate = useNavigate();
  const { headerText } = useTitle();
  return (
    <Header className={clsx(styles.header, "d-flex align-items-center justify-content-between")}>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <MBButton
          // icon={collapsed ? Icons.NotificationBall : Icons.AllEmployees}
          className={"d-md-none"}
        />
        <h1 className="clr-dark fw-semibold">{headerText}</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-xl">
        <HMInput placeholder={"Search"} prefix={Icons.Search} />
        <MBButton icon={Icons.NotificationBall} onClick={() => navigate("/notifications")} />
        {/* <HMDropdown items={menuItems}>children</HMDropdown> */}
        <Dropdown
          overlayStyle={{
            background: "#1f1f1f",
            borderRadius: "8px",
          }}
        >
          <a onClick={(e) => e.preventDefault()} className="d-flex align-items-center justify-content-start gap-xs">
            <Avatar src="A" alt="Lucifer" />
            <div className="d-flex flex-column">
              <span className="font-semibold p d-block lh-base clr-white">Lucifer</span>
              <span className="text-xs text-gray-400 p d-block lh-base clr-gray">HR Manager</span>
            </div>
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};
