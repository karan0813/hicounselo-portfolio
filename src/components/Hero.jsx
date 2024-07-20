const Hero = () => {
  return (
    <div className="hero">
      <div className="heroLeft">
        <p className="mainName dark:text-white">Karan</p>
        <p className="heroIntroText dark:text-white">
          I create responsive web applications that blend technology and
          creativity. I am committed to bringing your digital ideas to life.
        </p>
        {/* desktop */}
        <div className=" heroicons">
          <a
            href="mailto:Karanbandeakr@0813@gmail.com"
            target="_blank"
            aria-label="mmailto:Karanbandeakr@0813@gmail.com"
          >
            <svg
              className="hero1 dark:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 32 32"
            >
              <path
                fill="white"
                d="M5.072 9.203a2.829 2.829 0 011.01-1.585C6.592 7.218 7.224 7 7.875 7h17.25c.651 0 1.283.218 1.793.618.509.4.865.96 1.01 1.585L16.5 16.087 5.072 9.203zM5 10.82v10.064l8.342-5.04L5 10.82zm9.719 5.855L5.275 22.38c.233.485.601.894 1.062 1.18.46.288.993.44 1.538.439h17.25c.544 0 1.078-.152 1.538-.439.46-.287.828-.697 1.061-1.182l-9.444-5.705-1.78 1.073-1.781-1.073v.002zm4.94-.83L28 20.885V10.82l-8.342 5.023v.002z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            href="www.linkedin.com/in/
karan-bandekar
"
            aria-label="www.linkedin.com/in/
karan-bandekar
"
          >
            <svg
              className="hero2"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M21.333 0A2.667 2.667 0 0124 2.667v18.666A2.667 2.667 0 0121.333 24H2.667A2.667 2.667 0 010 21.333V2.667A2.667 2.667 0 012.667 0h18.666zm-.666 20.667V13.6a4.347 4.347 0 00-4.347-4.347c-1.133 0-2.453.694-3.093 1.734v-1.48h-3.72v11.16h3.72v-6.574a1.86 1.86 0 011.853-1.866 1.866 1.866 0 011.867 1.866v6.574h3.72zM5.173 7.413a2.24 2.24 0 002.24-2.24c0-1.24-1-2.253-2.24-2.253A2.253 2.253 0 002.92 5.173c0 1.24 1.013 2.24 2.253 2.24zm1.854 13.254V9.507H3.333v11.16h3.694z"
              ></path>
            </svg>
          </a>
          <a
            href="https://wa.me/7892794449/?text=Hi Karan,"
            target="_blank"
            aria-label="hero3"
          >
            <svg
              className="hero3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path
                fill="white"
                d="M14.001.667C21.365.667 27.335 6.636 27.335 14S21.365 27.333 14 27.333a13.272 13.272 0 01-6.706-1.806L.673 27.333l1.803-6.624A13.27 13.27 0 01.668 14C.668 6.636 6.638.667 14.001.667zM9.457 7.733l-.266.011c-.173.01-.342.056-.496.133a1.724 1.724 0 00-.392.304c-.16.151-.251.282-.348.408a3.64 3.64 0 00-.755 2.238c.003.653.173 1.289.44 1.884.545 1.202 1.443 2.476 2.627 3.656.285.284.565.569.866.834a12.597 12.597 0 005.12 2.728l.758.116c.246.014.493-.005.741-.017.388-.02.768-.125 1.11-.308a6.42 6.42 0 00.511-.293s.058-.038.167-.12c.18-.134.29-.228.44-.384.11-.115.207-.25.28-.403.104-.217.208-.632.25-.977.033-.264.023-.408.02-.498-.006-.142-.125-.29-.254-.353l-.776-.348s-1.16-.505-1.87-.828a.665.665 0 00-.234-.055.644.644 0 00-.504.17c-.007-.003-.096.073-1.06 1.241a.467.467 0 01-.49.173 1.91 1.91 0 01-.255-.088c-.166-.069-.223-.096-.336-.144a8.03 8.03 0 01-2.1-1.337c-.168-.147-.324-.307-.484-.461a8.396 8.396 0 01-1.36-1.691l-.079-.127a1.23 1.23 0 01-.136-.273c-.05-.196.081-.353.081-.353s.324-.355.475-.547a5.7 5.7 0 00.35-.497c.158-.254.207-.514.125-.715-.374-.912-.76-1.82-1.158-2.721-.078-.179-.312-.307-.524-.332a5.91 5.91 0 00-.216-.022 4.512 4.512 0 00-.537.006l.268-.011.001.001z"
              ></path>
            </svg>
          </a>
        </div>
        <div className="heroBtnSection">
          {/* <a href="#contact" className="heroBtnContact" aria-label="Contact">
            Contact
          </a> */}

          <a
            className="heroBtnContact"
            aria-label="Resume"
            href="karanBandekarResume.pdf"
            download="karanBandekarResume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
