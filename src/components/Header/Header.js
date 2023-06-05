
import React, { useEffect, useState } from "react";
import "../../css/header.css";
// import Logo from "../../stories/assets/TotoGuardianFinal.png";

// import Theme from "../../stories/Icon/theme.svg";
// import Meeting from "../../stories/Icon/meeting.svg";
// import DropdownIcon from "../../stories/Icon/arrowDown.svg";
// import Box from "../../stories/Box";
import styled from "styled-components";
// import Icon from "../../stories/Icon";
import { Link } from "react-router-dom";
// import Dropdown from "../../stories/ControlledDropdown";
// import StepSlider from "./components/StepSlider";
import DropDown from "../DropDown/DropDown";

const HeaderLeft = styled.div`
  margin: 55px;

  & > img {
    width: 100%;
    max-width: 84px;
  }
`;
const HeaderRight = styled.div`
  display: flex;
  align-items: baseline;
`;

const HeaderRightBottom = styled.div`
  display: flex;
  margin-right: 114px;
  top: 22px;
  position: relative;
`;

const LogoutButton = styled.div`
  background: #F15A25;
  border-radius: 19.5px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const UserProfileData = [
  {
    label: "Personal Details",
    value: "Personal Details",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: ""
  },
  {
    label: "Next Day Schedule",
    value: "Next Day Schedule",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: ""
  },
  {
    label: "Job Requisition",
    value: "Job Requisition",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: "/hr/add-job"
  },
  {
    label: "Internal Communication",
    value: "Internal Communication",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: ""
  },
  {
    label: "Schedule Meetings",
    value: "Schedule Meetings",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: ""
  },
  {
    label: "Refer Candidates",
    value: "Refer Candidates",
    icon: <i class="bi bi-1-circle-fill"></i>,
    href: ""
  },
  {
    label: <LogoutButton>Logout</LogoutButton>,
    value: "#",
    isLogout: true
  },
];

function Header() {
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);
  const openHamburgerMenu = () => {
    isHamburgerOpened === false
      ? setIsHamburgerOpened(true)
      : setIsHamburgerOpened(false);
  };

  const logoutHandle = (e) => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <header>
      <div className="wrapper">
        <HeaderLeft>
          {/* <img src={Logo} alt="" /> */}
        </HeaderLeft>
        <HeaderRight>
          <HeaderRightBottom>
            <div className="meeting">
              {/* <img src={Meeting} alt="" /> */}

              <div class="dropdown">
                <button
                  class="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="margin_x">Meeting Schedule</span>
                  {/* <img src={DropdownIcon} alt="" /> */}
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark menu-d"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <span className="d-flex justify-content-between">
                      <h6 class="dropdown-item" href="#">
                        Meeting with XYZ
                      </h6>
                      <b>6:30 PM</b>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ...
                    </p>
                  </li>
                  <li>
                    <span className="d-flex justify-content-between">
                      <h6 class="dropdown-item" href="#">
                        Meeting with XYZ
                      </h6>
                      <b>6:30 PM</b>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ...
                    </p>
                  </li>
                  <li>
                    <span className="d-flex justify-content-between">
                      <h6 class="dropdown-item" href="#">
                        Meeting with XYZ
                      </h6>
                      <b>6:30 PM</b>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ...
                    </p>
                  </li>
                  <li>
                    <span className="d-flex justify-content-between">
                      <h6 class="dropdown-item" href="#">
                        Meeting with XYZ
                      </h6>
                      <b>6:30 PM</b>
                    </span>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor ...
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile">
              <span className="profile_pic"></span>

              <DropDown
                // variant="guardianWithoutBorder"
                // defaultText="User Profile"
                options={UserProfileData}
                // styles={{
                //   list: {
                //   }
                // }}
                // leftIcon={
                //   <Icon
                //     iconName="userIcon"
                //     style={{ paddingRight: 5 }}
                //     color="#222222"
                //     height="26px"
                //     width="26px"
                //     noWrapper
                //   />
                // }
                width="260px"
                maxHeight="235px"
                height="42px"
              />

            </div>
          </HeaderRightBottom>

          <div>
            {isHamburgerOpened === true ? (
              <div className="toggle_bg">
                <div
                  className="toggle-menu"
                  onClick={() => openHamburgerMenu()}
                >
                  <img src="https://ik.imagekit.io/rzlzf40okya/etravego/noun-art-brush.svg" />
                  <span>Theme Settings</span>
                </div>
                <div className="list_item">
                  <ul>
                    <li className="icon_darkmode d-flex justify-content-between align-items-center">
                      <span className="d-flex">
                        <img src="https://ik.imagekit.io/rzlzf40okya/etravego/sunicon.svg" />
                        <p>Dark Mode</p>
                      </span>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </li>
                    <li>
                      <span className="d-flex">
                        <span className="blue_icon"></span>
                        <p>Primary Color</p>
                      </span>
                    </li>
                    <li>
                      <span className="d-flex">
                        <span className="orange_icon"></span>
                        <p>Secondary Color</p>
                      </span>
                    </li>
                    <li className="d-flex">
                      <span className="circle_icon">5</span>
                      <p>Border Radius</p>
                    </li>
                    <li>
                      {/* <img
                        src="https://ik.imagekit.io/rzlzf40okya/etravego/stebar_im.svg"
                        style={{ width: "100%" }}
                      /> */}
                      {/* <StepSlider /> */}
                    </li>
                    <li className="dash_border"></li>
                    <li className="d-flex icon_darkmode">
                      <img src="https://ik.imagekit.io/rzlzf40okya/etravego/table_ui.svg" />
                      <p>Table Customisation</p>
                    </li>

                    <li className="d-flex icon_darkmode justify-content-between align-items-center">
                      <p>Dense</p>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </li>
                    <li className="d-flex icon_darkmode justify-content-between align-items-center">
                      <p>Striped</p>
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className="header_theme_select"
                onClick={() => openHamburgerMenu()}
              >
                {/* <img src={Theme} alt="" /> */}
              </div>
            )}
          </div>
        </HeaderRight>
      </div>
    </header>
  );
}

export default Header;
