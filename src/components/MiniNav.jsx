import React from "react"
import {
    FaHome,
    FaArrowRight,
  } from "react-icons/fa";

const MiniNav = ({page})=>{ return(
    <nav
    class="flex px-5 py-3 text-gray-700  rounded-lg bg-gray-200 dark:bg-[#294f8b] "
    aria-label="Breadcrumb"
  >
    <div class="inline-flex items-center space-x-1 md:space-x-3">
      <div class="flex items-center">
        <FaHome />{" "}
        <p class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          Home
        </p>
      </div>
      <div class="flex items-center">
        <FaArrowRight />{" "}
        <p class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
          {page}
        </p>
      </div>
    </div>
  </nav>
  )}

  export default MiniNav;