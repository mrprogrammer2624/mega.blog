import { HeaderLink, Icons } from "@/constants";
import { Container, MBInput } from "@/components";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import styles from "./MBHeader.module.css";

export const MBHeader = () => {
  let location = useLocation();

  // const headerMenuLinks = [
  //   {
  //     key: 1,
  //     data: "Profile",
  //     link: "/profile",
  //     icons: Icons.userIcon,
  //   },
  //   {
  //     key: 2,
  //     data: "Logout",
  //     link: "/",
  //     icons: Icons.ExitIcons,
  //     // handleClickMenu: async () => {
  //     //   try {
  //     //     await axios.get("");
  //     //     router.push("/authentication");
  //     //   } catch (error) {
  //     //     console.log(error.message);
  //     //   }
  //     // },
  //   },
  // ];

  return (
    <header className="py-5">
      <Container>
        <div
          className={clsx(styles.headerWrapper, "d-grid align-items-center")}
        >
          <div className={clsx(styles.headerLeft, "d-flex align-items-center")}>
            <Link to="/" className="h2 fw-semibold">
              MEGA.news
            </Link>
            <ul
              className={clsx(
                styles.headerLeftListing,
                "d-flex list-style-none"
              )}
            >
              {HeaderLink.map((content, index) => {
                let removedSpacesText = content.link
                  .split(" ")
                  .join("")
                  .toLowerCase();
                const isActive =
                  removedSpacesText === location.pathname.toLowerCase();
                return (
                  <li key={index}>
                    <Link
                      to={content.link}
                      className={clsx(
                        styles.headerLink,
                        isActive ? styles.active : ""
                      )}
                    >
                      {content.title}
                      {content.children && (
                        <span className="ms-1">{Icons.arrowIcon}</span>
                      )}
                    </Link>
                    {content.children}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-flex justify-content-end align-items-center flex-wrap gap-3 w-100">
            <div className="w-100" style={{ maxWidth: "30rem" }}>
              <MBInput
                parentClassName="w-100"
                type="search"
                placeholder="Search anything"
              />
            </div>
            {/* <MBDropdown
              dropdownMenuClassName="d-flex align-items-center justify-start headerDropdownMenu"
              menuLinks={headerMenuLinks}
            >
              <div className="rounded-3 overflow-hidden" style={{ maxWidth: '50px' }}>
                <img src={avatar1} width="100%" height="100%" alt="avatar1" />
              </div>
              <div>Behzad</div>
            </MBDropdown> */}
          </div>
        </div>
      </Container>
    </header>
  );
};
