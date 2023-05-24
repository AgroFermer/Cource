import {Context} from "../../pages/index";
import Image from "next/image";
import { BsPeople } from "react-icons/bs";
import {
  AiOutlineApartment,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineSearch,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdLogout, MdOutlineAnalytics, MdAdminPanelSettings  } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { useRouter } from "next/router";



const sidebarItems = [
  {
    name: "Home",
    href: "/Home/HomePage",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/About/about",
    icon: MdOutlineAnalytics,
  },
  {
    name: "Mails",
    href: "/Mails/mails",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/Contact/contact",
    icon: BsPeople,
  },
];

const secondaryLinksArray = [
    {
        name: "AdminPanel",
        icon: MdAdminPanelSettings,
        href: "/admin",
    },
  {
      name: "Settings",
      icon: AiOutlineSetting,
      href: "/Setting/setting",
  },
  {
      name: "Logout",
      icon: MdLogout,
  },
];
const Sidebar = () => {
  const {store} = useContext(Context);
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.png"
            alt="logo"
          />
         <h1 className="logo__name">Piven_service</h1>
        </div>
        <hr></hr>
        <div className="icon_side">
        <ul className="sidebar__list">
  {sidebarItems.map(({ name, href, icon: Icon }) => {
    return (
      <li className="sidebar__item" key={name}>
        <Link
          className={`sidebar__link ${
            router.pathname === href ? "sidebar__link--active" : ""
          }`}
          href={href}
        >
          <span className="sidebar__icon">
            <Icon />
          </span>
          <span className="sidebar__name">{name}</span>
        </Link>
      </li>
    );
  })}
          </ul>
          <hr></hr>
          <ul className="secondary_sidebar__list">
            {secondaryLinksArray.map(({ icon: Icon, href, name, onClick }) => {
              return (
                <li className="secondary_sidebar__item" key={name}>
                {href ? (
                  <Link
                    className={`secondary_sidebar__link ${
                      router.pathname === href ? "sidebar__link--active" : ""
                    }`}
                    href={href}
                  >
                    <span className="sidebar__icon">
                      <Icon />
                    </span>
                    <span className="sidebar__name">{name}</span>
                  </Link>
                ) : (
                  <button className="secondary_sidebar__btn" onClick={() => store.logout()}>
                    <span className="sidebar__icon">
                      <Icon />
                    </span>
                    <span className="sidebar__name">{name}</span>
                  </button>
                )}
              </li>
              );
            })}
          </ul>
        </div> 
       </aside>
    </div>
  );
};

export default Sidebar;
