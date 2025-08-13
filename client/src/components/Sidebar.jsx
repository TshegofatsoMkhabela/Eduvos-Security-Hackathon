import React, { useState, useContext } from "react";
import {
  Box,
  ChevronDown,
  Home,
  Menu,
  MessageSquare,
  User,
  Wrench,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { user } = useContext(UserContext);
  const [activeDropdown, setActiveDropdown] = useState("");

  const navItems = [
    { title: "Home", icon: Home, hasDropdown: false, path: "/home" },
    {
      title: "Profile",
      icon: User,
      hasDropdown: true,
      dropdownItems: [
        { title: "Personal Info", path: "/profile/personal-info" },
        { title: "Account Settings", path: "/profile/account-settings" },
        { title: "Billing", path: "/profile/billing" },
      ],
    },
    {
      title: "Messages",
      icon: MessageSquare,
      hasDropdown: true,
      dropdownItems: [
        { title: "Inbox", path: "/messages/inbox" },
        { title: "Sent", path: "/messages/sent" },
        { title: "Drafts", path: "/messages/drafts" },
        { title: "Archived", path: "/messages/archived" },
      ],
    },
    { title: "Analytics", icon: Box, hasDropdown: false, path: "/analytics" },
    {
      title: "Settings",
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: [
        { title: "Preferences", path: "/settings/preferences" },
        { title: "Security", path: "/settings/security" },
        { title: "Notifications", path: "/settings/notifications" },
      ],
    },
  ];

  return (
    <div
      className={`bg-white text-black transition-all duration-300 ease-in-out text-sm border-2 rounded-md border-[rgba(0,0,0,0.08)]
        ${isOpen ? "w-64" : "w-16"}`}
    >
      <div className="p-4 flex justify-between items-center">
        <h1
          className={`font-bold overflow-hidden transition-all duration-300 text-lg whitespace-nowrap text-[#3B40E8]
          ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          Hi, {user.firstName}
        </h1>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hover:bg-[#F3F5F7] p-2 rounded-lg"
        >
          {isOpen ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Menu size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      <nav className="mt-6">
        {navItems.map((item) => (
          <div key={item.title}>
            <Link
              to={item.hasDropdown ? "#" : item.path}
              onClick={(e) => {
                if (item.hasDropdown && isOpen) {
                  e.preventDefault(); // Prevent navigation
                  setActiveDropdown(
                    activeDropdown === item.title ? "" : item.title
                  );
                }
              }}
              className="px-4 py-3 hover:bg-[#F3F5F7] cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center">
                <item.icon size={20} strokeWidth={1.5} color="#000" />
                <span
                  className={`ml-4 whitespace-nowrap overflow-hidden transition-all duration-300
                  ${isOpen ? "w-32 opacity-100" : "w-0 opacity-0"}`}
                >
                  {item.title}
                </span>
              </div>
              {item.hasDropdown && isOpen && (
                <ChevronDown
                  size={16}
                  strokeWidth={1.5}
                  className={`transition-transform duration-200 ${
                    activeDropdown === item.title ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>

            {item.hasDropdown && isOpen && activeDropdown === item.title && (
              <div className="bg-[#f5f5f5] overflow-hidden transition-all duration-200">
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    to={dropdownItem.path}
                    key={dropdownItem.title}
                    className="block px-11 py-2 hover:bg-[#f1f1f1] cursor-pointer text-sm"
                  >
                    {dropdownItem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
