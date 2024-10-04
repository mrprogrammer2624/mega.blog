import { Modal } from "antd";import { clsx } from "clsx";
import { Icons } from "@/constants";
import { MBButton } from "@/components";
import styles from "./HMModal.module.css";

export const HMModal = ({
  open,
  title,
  width,
  children,
  className,
  handleClose,
  handleOk,
  contentClassName,
  closeOnOutsideClick,
  handleCancel,
  handleContent,
  IsCloseIcon = false,
  IsFooter = false,
  ...rest
}) => {
  const finalClassName = {
    body: styles.body,
    content: clsx(styles.content, contentClassName),
    header: styles.header,
    footer: styles.footer,
    mask: styles.mask,
  };

  return (
    <Modal
      classNames={finalClassName}
      rootClassName={styles.modalParent}
      open={open}
      className={clsx(styles.modal, className)}
      title={title}
      onCancel={handleCancel}
      maskClosable={closeOnOutsideClick}
      width={width}
      footer={
        IsFooter &&
        (() => (
          <div className="d-flex align-items-center gap-xl justify-content-center">
            <MBButton block onClick={handleClose}>
              Cancel
            </MBButton>
            <MBButton block variant={"primary"} onClick={handleOk}>
              {handleContent}
            </MBButton>
          </div>
        ))
      }
      closeIcon={
        IsCloseIcon && (
          <div className={clsx(styles.closeBtn, "clr-black d-flex align-items-center")}>{Icons.CloseCircle}</div>
        )
      }
      centered
      {...rest}
    >
      {children}
    </Modal>
  );
};
