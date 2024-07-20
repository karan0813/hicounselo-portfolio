"use client";

import { validationSchemaForm } from "@/schema/validation";
import { useFormik } from "formik";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
const Contact = () => {
  const [launch, setLaunch] = useState(false);
  const [loader, setLoader] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      organ: "",
      describe: "",
    },
    validationSchema: validationSchemaForm,
    onSubmit: (values) => {
      submitContactForm(values);
    },
  });

  const submitContactForm = (data) => {
    setLoader(true);
    setLaunch(false);
    axios
      .post("/api/sendEmail", {
        body: data,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then(() => {
        setLoader(false);
        setLaunch(true);
        formik.resetForm({});
        setTimeout(() => {
          toast("Message sent successfully");
        }, 4000);
      })
      .catch((err) => {
        formik.resetForm({});
        toast("Something went wrong ! Not configure to Backend");
        setLaunch(true);
        setLoader(false);
      });
  };

  const [observerVisible, setObserverVisible] = useState(false);
  const myRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setObserverVisible(true);
        observer.disconnect();
      }
    });

    observer.observe(myRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="contact"
      className={`aboutme ${observerVisible ? "fadeScroll" : "obfade"}`}
      ref={myRef}
    >
      <p className="aboutHeader dark:text-white">Contact</p>
      <div className="mt-[40px] lg:mt-[50px]">
        <div className="flex justify-between items-start md:flex-col md:justify-start md:items-start lg:justify-between lg:items-center lg:flex-row flex-col ">
          <form className="relative" onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-x-[12px] lg:gap-x-[16px] mb-[16px] lg:mb-[16px]">
              <div className="flex flex-col">
                <label htmlFor="name" className="label-text dark:text-white">
                  Name <span>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  autoComplete="off"
                  className="input-feild dark:bg-white"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && (
                  <p className="error-message">{formik.errors.name}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="label-text dark:text-white">
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Enter email"
                  value={formik.values.email}
                  className="input-feild dark:bg-white"
                  name="email"
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="error-message">{formik.errors.email}</p>
                )}
              </div>
            </div>
            <div className="flex  flex-col mb-[16px] lg:mb-[16px]">
              <label htmlFor="organ" className="label-text dark:text-white">
                Organisation
              </label>
              <input
                type="text"
                id="organ"
                autoComplete="off"
                value={formik.values.organ}
                placeholder="Enter organisation"
                className="input-feild dark:bg-white"
                name="organ"
                onChange={formik.handleChange}
              />
              {formik.errors.organ && formik.touched.organ && (
                <p className="error-message">{formik.errors.organ}</p>
              )}
            </div>
            <div className="flex flex-col mb-[16px] lg:mb-[16px]">
              <label htmlFor="mess" className="label-text dark:text-white">
                Message <span>*</span>
              </label>
              <textarea
                type="text"
                id="mess"
                autoComplete="off"
                value={formik.values.describe}
                placeholder="Enter message"
                className="text-feild dark:bg-white"
                name="describe"
                onChange={formik.handleChange}
              />
              {formik.errors.describe && formik.touched.describe && (
                <p className="error-message">{formik.errors.describe}</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="send-Btn flex justify-center items-center dark:bg-white  dark:text-black"
                style={{ background: `${loader ? "black" : ""}` }}
              >
                {loader ? (
                  <CircularProgress size={18} sx={{ color: "white" }} />
                ) : (
                  "Send"
                )}
              </button>
              <span className={`${launch ? "animateRocket" : ""}`}>
                <RocketLaunchRoundedIcon
                  className="dark:text-white"
                  sx={{ fontSize: "30px", color: "black" }}
                />
              </span>
            </div>
          </form>
          <div className="support-me mt-[15px] lg:mt-[0px] flex flex-col gap-y-[20px] dark:bg-white ">
            <p className="message-text">Message me here</p>

            <a
              aria-label="message-sub-text flex items-center"
              href="https://wa.me/7892794449/?text=Hi karan,"
              target="_blank"
              className="message-sub-text flex items-center"
            >
              <svg
                className="mr-[6px] lg:mr-[5px]"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ABB2BF"
                  d="M16.001 2.667c7.364 0 13.334 5.969 13.334 13.333S23.365 29.333 16 29.333a13.272 13.272 0 01-6.706-1.806l-6.622 1.806 1.803-6.624A13.27 13.27 0 012.668 16c0-7.364 5.97-13.333 13.333-13.333zm-4.544 7.066l-.266.011a1.28 1.28 0 00-.496.133 1.722 1.722 0 00-.392.304c-.16.151-.251.282-.348.408a3.64 3.64 0 00-.755 2.238c.003.653.173 1.289.44 1.884.545 1.202 1.443 2.476 2.627 3.656.285.284.565.569.866.834a12.597 12.597 0 005.12 2.728l.758.116c.246.014.493-.005.741-.017.388-.02.768-.125 1.11-.308a6.42 6.42 0 00.511-.293s.058-.038.167-.12c.18-.134.29-.228.44-.384.11-.115.207-.25.28-.403.104-.217.208-.632.25-.977.033-.264.023-.408.02-.498-.006-.142-.125-.29-.254-.353l-.776-.348s-1.16-.505-1.87-.828a.665.665 0 00-.234-.055.644.644 0 00-.504.17c-.007-.003-.096.073-1.06 1.241a.467.467 0 01-.49.173 1.91 1.91 0 01-.255-.088c-.166-.069-.223-.096-.336-.144a8.03 8.03 0 01-2.1-1.337c-.168-.147-.324-.307-.484-.461a8.396 8.396 0 01-1.36-1.691l-.079-.127a1.23 1.23 0 01-.136-.273c-.05-.196.081-.353.081-.353s.324-.355.475-.547a5.7 5.7 0 00.35-.497c.158-.254.207-.514.125-.715-.374-.912-.76-1.82-1.158-2.721-.078-.179-.312-.307-.524-.332a5.91 5.91 0 00-.216-.022 4.512 4.512 0 00-.537.006l.268-.011.001.001z"
                ></path>
              </svg>
              <p className="hover-underline-animation">7892794449</p>
            </a>

            <a
              aria-label="message-sub-text flex items-center"
              className="message-sub-text flex items-center"
              href="mailto:karanbandekar0813@gmail.com"
              target="_blank"
            >
              <svg
                className="mr-[6px] lg:mr-[5px]"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 32 32"
              >
                <path
                  fill="#ABB2BF"
                  d="M5.072 9.203a2.829 2.829 0 011.01-1.585C6.592 7.218 7.224 7 7.875 7h17.25c.651 0 1.283.218 1.793.618.509.4.865.96 1.01 1.585L16.5 16.087 5.072 9.203zM5 10.82v10.064l8.342-5.04L5 10.82zm9.719 5.855L5.275 22.38c.233.485.601.894 1.062 1.18.46.288.993.44 1.538.439h17.25c.544 0 1.078-.152 1.538-.439.46-.287.828-.697 1.061-1.182l-9.444-5.705-1.78 1.073-1.781-1.073v.002zm4.94-.83L28 20.885V10.82l-8.342 5.023v.002z"
                ></path>
              </svg>
              <p className="hover-underline-animation">
                Karanbandekar@gmail.com
              </p>
            </a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;
