import { Title, Container, RatioImages, MBInput, MBButton } from "@/components";
import {
  FooterCategories,
  footerCommit,
  footerInstagram,
  Icons,
} from "@/constants";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./MBFooter.module.css/";

export const MBFooter = () => {
  return (
    <footer className={clsx(styles.FooterExtraContainer, "position-relative")}>
      <Container>
        <div className={clsx(styles.footerWrapper, "d-grid position-relative")}>
          <div className={clsx(styles.footerWrapperFirst, "bg-gray")}>
            <div className={clsx(styles.footerWrapperFirstTop, "d-grid")}>
              <div>
                <Title>mega news</Title>
                <p className="text-justify lh-sm text-capitalize h5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do elusion tempo incipient ut labore et dolore magna aliqua.
                  Egestas purus viverra accumsan in Nils nisi. Arcu cursus vitae
                  congue mauris Rhodanus Aegean vel elit scelerisque. In egestas
                  erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                  tristique senectus et netus. Mattis pellentesque id nibh
                  tortor id aliquet lectus proin
                </p>
              </div>
              <div>
                <Title>Categories</Title>
                <ul className="d-grid gap-4 list-style-none">
                  {FooterCategories.map((content, index) => (
                    <li key={index}>
                      <Link
                        to={`categories/${content.children}`}
                        className="capitalize"
                      >
                        {content.children}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Title>Newsletters</Title>
                <MBInput
                  rootClassName={"bg-white"}
                  placeholder={"Write your email .."}
                  suffix={Icons.EmailIcon}
                />
              </div>
              <div>
                <Title>social network</Title>
                <div className="d-flex gap-3">
                  <MBButton
                    variant={"primary"}
                    className={styles.btnInstagram}
                    icon={Icons.Instagram}
                  >
                    instagram
                  </MBButton>
                  <MBButton
                    variant={"primary"}
                    className={styles.btnTwitter}
                    icon={Icons.twitter}
                  />
                </div>
              </div>
            </div>
            <div className={clsx(styles.copyright, "d-grid rounded-xl")}>
              <Link className="p-sm text-capitalize">
                privacy policy | terms & conditions
              </Link>
              <p className="p-sm text-capitalize text-black-75 justify-self-end">
                all copyright (c) 2022 reserved
              </p>
            </div>
          </div>
          <div className={styles.footerWrapperSecond}>
            <Title>new Comments</Title>
            <div className={clsx(styles.footerWrapperSecondContent, "d-grid")}>
              {footerCommit.map((content, index) => (
                <div
                  className="bg-gray text-capitalize p-4 rounded-xl"
                  key={index}
                >
                  <h5 className="font-medium mb-2">{content.title}</h5>
                  <p className="p-sm font-normal">{content.children}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footerWrapperLast}>
            <Title>Follow on Instagram</Title>
            <div className={clsx(styles.footerInstagramGrid, "d-grid gap-6")}>
              {footerInstagram.map((content, index) => (
                <RatioImages
                  key={index}
                  src={content.images}
                  RatioImagesClass="object-cover"
                  RatioImagesParentClass={styles.footerInstagramWrapper}
                  alt={content.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
