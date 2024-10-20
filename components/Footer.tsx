"use client";

import React from "react";
import ColouredLine from "./ColouredLine";
import Logo from "../public/images/newLogo.png";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Footer() {
  const router = useRouter();
  return (
    <footer className="bg-inherit">
      <ColouredLine />
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image src={Logo} alt="6-TEN" height={150} width={150} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                CONTACT US
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    +44 (0) 203 488 6212
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    hello@6tenmgt.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-auto">
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              6-TEN™
            </a>
            | Proudly built by
            <Link
              href="https://www.internly.org/"
              className="font-bold text-cyan-500 cursor-pointer"
            >
              {""} internly.org
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
