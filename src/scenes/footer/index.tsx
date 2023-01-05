import React from "react";
import Logo from "@/assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            omnis in deleniti magni voluptate odio modi, maiores ut debitis
            placeat dignissimos expedita soluta illo provident! Corporis quas
            eius commodi enim.
          </p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">About Us</p>
          <p className="my-5">Customer Service`</p>
          <p>Help</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
