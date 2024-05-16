import React from "react";
import { MdAccountCircle } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import Image from 'next/image';
import Link from "next/link";

interface ISidebar{
    desc?:string
}
export const Sidebar: React.FC<ISidebar>=({
    desc
})=>{
    return(
        <>
        <div className="flex w-[25%] max-lg:hidden flex-col bg-[#240750]">
          <h1 className="text-white font-bold text-[35px] text-center cursor-pointer">
            <Link href={"/"}>INOICAIN</Link>
          </h1>
          <p className="text-gray-500 p-3">User Dashboard</p>
          <div className="flex items-center p-3">
            <MdSpaceDashboard size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 "><Link href={"/userdashboard"}>Dashboard</Link></p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 "><Link href={"/useraccount"}>Account</Link></p>
          </div>
          <div className="flex items-center p-3">
            <FaClipboardList size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">Wishlist</p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">My event</p>
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
        </>
    )
}