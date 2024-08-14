"use client";
import React from "react";
import { Modal, ModalTrigger } from "./AnimatedModal";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoMailOutline } from "react-icons/io5";

export function Button() {
  return (
    <div className=" flex items-center justify-center align">
      <a href="/contact">
        <Modal>
          <ModalTrigger className="bg-[#ffffff] dark:bg-[#ffffff] dark:text-[#135200] text-[#135200] flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Contact Us
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <IoMailOutline className="text-[1.5rem] text-[#135200] " />
            </div>
          </ModalTrigger>
        </Modal>
      </a>
    </div>
  );
}
