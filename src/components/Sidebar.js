import GridViewIcon from "@mui/icons-material/GridView";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsightsIcon from "@mui/icons-material/Insights";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InventoryIcon from "@mui/icons-material/Inventory";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import Logo from "../images/logo.PNG";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Bouton pour ouvrir le menu mobile */}
      <button
        id="menu-btn"
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <MenuIcon />
      </button>
      <div className={`sidebar ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div class="top">
          <div class="logo">
            <img src={Logo} alt="" />
            <h2>
              NOM <span class="danger">LOGO</span>
            </h2>
          </div>
          <div
            className="close"
            id="close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <CloseIcon />
          </div>
        </div>

        <div>
          <a href="#">
            <span>
              <GridViewIcon />
            </span>
            <h3>Dashboard</h3>
          </a>
          <a href="#" className="active">
            <span>
              <PersonOutlineIcon />
            </span>
            <h3>Customers</h3>
          </a>
          <a href="#">
            <span>
              <PersonOutlineIcon />
            </span>
            <h3>Orders</h3>
          </a>
          <a href="#">
            <span>
              <InsightsIcon />
            </span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span>
              <MailOutlineIcon />
            </span>
            <h3>Messages</h3>
            <span className="message-count">14</span>
          </a>
          <a href="#">
            <span>
              <InventoryIcon />
            </span>
            <h3>Products</h3>
          </a>
          <a href="#">
            <span>
              <PersonOutlineIcon />
            </span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span>
              <SettingsIcon />
            </span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span>
              <AddIcon />
            </span>
            <h3>Add Products</h3>
          </a>
          <a href="#">
            <span>
              <LogoutIcon />
            </span>
            <h3>Logout</h3>
          </a>
        </div>
      </div>
    </>
  );
}
