'use client';
import React from 'react';
import { SlUser } from 'react-icons/sl';

const Modal = () => {
  // Function to open the modal
  const openModal = () => {
    const modal = document.getElementById('my_modal_3');
    if (modal) {
      (modal as HTMLDialogElement).showModal();
    }
  };

  return (
    <div>
      <button className="btn bg-transparent border-none hover:bg-[#2370F4] text-white" onClick={openModal}>
        <div className="flex items-center gap-2">
          <SlUser size={25} />
          <h1 className="font-medium text-sm lg:block hidden">SIGN IN</h1>
        </div>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* Button inside form to close the modal */}
            <button
              type="submit"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;