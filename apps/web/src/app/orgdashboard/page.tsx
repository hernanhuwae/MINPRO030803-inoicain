import Image from 'next/image';
import background from '../../../public/cocnert.jpg';
import { Sidebar } from '@/components/Sidebar';
import Link from 'next/link';
import { MdAccountCircle } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';

export default function BerandaOrganizer() {
  return (
    <>
      <div className="flex w-full">
        {/* Bagian Dashboard kiri */}
        <div className="flex w-[25%] max-lg:hidden flex-col bg-[#240750]">
          <h1 className="text-white font-bold text-[35px] text-center cursor-pointer">
            <Link href={"/"}>INOICAIN</Link>
          </h1>
          <p className="text-gray-500 p-3">Organizer Dashboard</p>
          <div className="flex items-center p-3">
            <MdSpaceDashboard size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 "><Link href={"/userdashboard"}>Dashboard</Link></p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 "><Link href={"/useraccount"}>Account</Link></p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">Create event</p>
          </div>
          <div className="flex items-center p-3">
            <MdOutlineRateReview size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">Review</p>
          </div>
          <div className="flex items-center p-3">
            <MdPayment size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">Transaction</p>
          </div>
        </div>

        {/* Bagian Dashboard kanan */}
        <div className="flex w-[75%] max-lg:w-full flex-col">
          <div className="flex w-full bg-white border-2 drop-shadow-lg justify-between items-center">
            <h5 className='lg:hidden px-4 text-[#240750] font-semibold text-[30px] max-sm:text-[20px]'>INOICAIN</h5>

            <div className=" p-4 max-sm:hidden">
              <input
                type="text"
                placeholder="Search all events..."
                className="border-gray-600 rounded-lg border-2 outline-none py-4 px-8 max-sm:px-4"
              />
            </div>

            {/* Side Bar */}
            <div className="drawer-end lg:hidden block sm:hidden">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu  p-4 w-1/2 min-h-full bg-[#240750]  ">
                  <li>
                    <div className="flex flex-1 flex-col lg:mt-32 mt-20 lg:items-center items-start gap-5">
                      <Link href="/aboutUs">
                        <h1 className="font-black text-white text-xl">ABOUT</h1>
                      </Link>
                      <div className="flex flex-col gap-3 lg:items-center items-start">
                        <Link href="/aboutUs">
                          <h1 className="text-white hover:underline">JYPE</h1>
                        </Link>
                        <Link href="/aboutUs/history">
                          <h1 className="text-white hover:underline">
                            HISTORY
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-1 flex-col mt-4 lg:items-center items-start gap-5">
                      <Link href="/products">
                        <h1 className="font-black text-white text-xl">
                          PRODUCTS
                        </h1>
                      </Link>
                      <div className="flex flex-col gap-3">
                        <Link href="/products">
                          <h1 className="text-white hover:underline">
                            JYPSHOP
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex flex-1 flex-col mt-4 lg:items-center items-start gap-5">
                      <Link href="/teams">
                        <h1 className="font-black text-white text-xl ">
                          OUR TEAMS
                        </h1>
                      </Link>
                      <div className="flex flex-col gap-3">
                        <Link href="/teams">
                          <h1 className="text-white hover:underline">
                            CONTACT
                          </h1>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="max-sm:hidden m-4 p-4 border-2 text-white font-medium rounded-md bg-[#240750] hover:bg-red-500 cursor-pointer">
              Log Out
            </div>
          </div>
          <div
            className="hero min-h-screen z-[-10]"
            style={{
                backgroundColor:"blueviolet"
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content z-[1] text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl text-white font-bold ">NIkmatilah Acara Pilihan</h1>
                <p className="mb-5 ">
                  Kami hadir untuk anda membantu memilih acara menarik dan pilihan varian tiket yang banyak
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
