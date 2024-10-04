import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { MBHeader } from "@/components";
import clsx from "clsx";
import styles from "./DashboardLayout.module.css";

const { Content } = Layout;

export const MainLayout = () => {
  return (
    <Layout className={styles.main}>
      <MBHeader />
      <Content className={clsx(styles.content, "card")}>
        <Outlet />
      </Content>
      footer
    </Layout>
  );
};
