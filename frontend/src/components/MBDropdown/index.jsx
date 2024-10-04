import { Dropdown } from "antd";
import clsx from "clsx";
import { Icons } from "@/constants";
import { MBButton } from "@/components/";
import styles from "./MBDropdown.module.css";

export const MBDropdown = ({
  onClick,
  dropdownMenu,
  children,
  className,
  rootClassName,
  placement,
  trigger,
  expandIcon,
  ...rest
}) => {
  return (
    <Dropdown
      menu={{
        items: dropdownMenu,
        expandIcon: expandIcon ? expandIcon : Icons.DropdownArrowRight,
        onClick: onClick,
        className: styles.dropdownMenu,
        rootClassName: styles.dropdownSubMenu,
      }}
      trigger={trigger}
      className={className}
      rootClassName={clsx(styles.dropdown, rootClassName)}
      {...rest}
      placement={placement}
    >
      <MBButton>{children}</MBButton>
    </Dropdown>
  );
};
