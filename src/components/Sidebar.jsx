import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router";
import Dashboard from "../Pages/Dashboard";
import Members from "../Pages/Members";
import Events from "../Pages/Events";
import DuePayments from "../Pages/DuePayments";
import { FiMenu, FiUser } from "react-icons/fi";
import { FaChartPie } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { BsCalendar2Event } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Open sidebar</span>
                  <FiMenu size={24} />
                </button>
                <a href="#" className="flex ml-2 md:mr-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="h-8 mr-3"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    GMSA
                  </span>
                </a>
              </div>

              <div className="flex items-center">
                <div className="flex items-center ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="user photo"
                      />
                    </button>
                  </div>

                  <div
                    className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                    id="dropdown-user"
                  >
                    <div className="px-4 py-3" role="none">
                      <p
                        className="text-sm text-gray-900 dark:text-white"
                        role="none"
                      >
                        Executive Name
                      </p>
                      <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                        role="none"
                      >
                        Executive@email.com
                      </p>
                    </div>

                    <div className="py-1" role="none">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Settings
                      </a>

                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <div className="flex flex-col gap-5 space-y-2 font-medium">
              <div>
                <NavLink
                  to="/"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FaChartPie />
                  <span className="ml-3">Dashboard</span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/members"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FiUser />
                  <span className="flex-1 ml-3 whitespace-nowrap">Members</span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/dues"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <MdOutlinePayments />
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Due Payments
                  </span>
                </NavLink>
              </div>
              <div>
                <NavLink
                  to="/events"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsCalendar2Event />
                  <span className="flex-1 ml-3 whitespace-nowrap">Events</span>
                </NavLink>
              </div>
            </div>
          </div>
        </aside>

        <div className="p-4 mt-16 sm:ml-64">
          <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            {/* routes */}
            <div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/members" element={<Members />} />
                <Route path="/dues" element={<DuePayments />} />
                <Route path="/events" element={<Events />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
