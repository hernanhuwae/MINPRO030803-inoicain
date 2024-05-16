import { MdAccountCircle } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { MdOutlineRateReview } from 'react-icons/md';
import { FaClipboardList } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { Sidebar } from '@/components/Sidebar';
import Link from 'next/link';

export default function UserEditAccount() {
  return (
    <>
      <div className="flex w-full">
        {/* Bagian Kiri */}
        <div className="flex w-[35%] h-screen max-md:hidden flex-col bg-[#240750]">
          <h1 className="text-white font-bold text-[35px] text-center">
            INOICAIN
          </h1>
          <p className="text-gray-500 p-3">User Dashboard</p>
          <div className="flex items-center p-3">
            <MdSpaceDashboard size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 ">
              <Link href={'/userdashboard'}>Dashboard</Link>
            </p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500 ">
              <Link href={'/useraccount'}>Account</Link>
            </p>
          </div>
          <div className="flex items-center p-3">
            <FaClipboardList size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">
              Wishlist
            </p>
          </div>
          <div className="flex items-center p-3">
            <MdAccountCircle size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">
              My event
            </p>
          </div>
          <div className="flex items-center p-3">
            <MdOutlineRateReview size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">
              Review
            </p>
          </div>
          <div className="flex items-center p-3">
            <MdPayment size={25} color="white" />
            <p className="text-white text-[20px] px-2 hover:text-green-500">
              Transaction
            </p>
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="flex w-[65%] max-md:w-full flex-col items-center p-8">
          <MdAccountCircle size={200} color="blue" />
          
          <div className='border-2 border-blue-700 p-2 rounded-lg font-semibold my-2'>
            <input type="text" className='text-black outline-none' placeholder='Username'/>
          </div>
          <div className='border-2 border-blue-700 p-2 rounded-lg font-semibold my-2'>
            <input type="text" className='text-black outline-none' placeholder='Email'/>
          </div>
          <div className='border-2 border-blue-700 p-2 rounded-lg font-semibold my-2'>
            <input type="text" className='text-black outline-none' placeholder='Phone Number'/>
          </div>
          <div className='border-2 border-blue-700 p-2 rounded-lg font-semibold my-2'>
            <input type="text" className='text-black outline-none' placeholder='Address'/>
          </div>
          <button className='my-8 p-4 bg-green-700 text-white font-semibold rounded-md'>Save Profile</button>
          
        </div>
      </div>
    </>
  );
}
