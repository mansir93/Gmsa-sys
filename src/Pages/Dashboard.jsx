import React from "react";
import {
  FaArrowRight,
  FaUsers,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import MiniNav from "../components/MiniNav";

const Dashboard = () => {
  return (
    <div>
      <MiniNav page="Dashboard"/>

      <div class="flex flex-wrap my-5 -mx-2">
        <div class="w-full lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex justify-center items-center text-indigo-500 dark:text-white bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
              <FaUsers />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total Members</div>
              <div class="">100</div>
            </div>
            <div class=" flex items-center flex-none text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex justify-center items-center text-indigo-500 dark:text-white bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
              <FaRegMoneyBillAlt />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Total DuesPaid</div>
              <div class="">15,000.00</div>
            </div>
            <div class=" flex items-center flex-none text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/3 p-2">
          <div class="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
            <div class="flex justify-center items-center text-indigo-500 dark:text-white bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
              <FaUsers />
            </div>
            <div class="flex flex-col justify-around flex-grow ml-5 text-white">
              <div class="text-xs whitespace-nowrap">Upcoming Events</div>
              <div class="">5</div>
            </div>
            <div class=" flex items-center flex-none text-white">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
      {/* chart js */}

      <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
        <div class="mb-4 flex items-center justify-between">
          <div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              Latest Transactions
            </h3>
            <span class="text-base font-normal text-gray-500">
              This is a list of latest transactions
            </span>
          </div>
          <div class="flex-shrink-0">
            <a
              href="#"
              class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
            >
              View all
            </a>
          </div>
        </div>
        <div class="flex flex-col mt-8">
          <div class="overflow-x-auto rounded-lg">
            <div class="align-middle inline-block min-w-full">
              <div class="shadow overflow-hidden sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transaction
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date & Time
                      </th>
                      <th
                        scope="col"
                        class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                        Payment from{" "}
                        <span class="font-semibold">Mansir Abdul Aziz</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Apr 23 ,2023
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        40.00GHS
                      </td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                        Payment from {" "}
                        <span class="font-semibold">Yakubu Mutallib</span>
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                        Apr 23 ,2023
                      </td>
                      <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        40.00GHS
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
