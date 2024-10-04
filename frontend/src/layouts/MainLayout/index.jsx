import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { MBFooter, MBHeader } from "@/components";
import clsx from "clsx";
import styles from "./MainLayout.module.css";

const { Content } = Layout;

export const MainLayout = () => {
  return (
    <Layout>
      <MBHeader />
      <Content className={clsx(styles.content)}>
        <Outlet />
      </Content>
      <MBFooter />
    </Layout>
  );
};
