import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Works = ({ title, projectData }) => {
  const [loadMore, setLoadMote] = useState(false);

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
      className={`workssection ${observerVisible ? "fadeScroll" : "obfade"}`}
      id="works"
      ref={myRef}
    >
      <p className="aboutHeader ">{title}</p>
      <div className="grid-layout mt-[40px]  lg:mt-[50px]">
        {loadMore
          ? projectData.map((item, index) => {
              return (
                <div key={index} className="project-box">
                  <div className="overflow-hidden relative">
                    <img className="project_image" src={item.image} alt="..." />
                  </div>
                  <div className="project-content">
                    <p className="project-title">{item.title || "-"}</p>
                    <p className="project-sub-text">
                      {item.description || "-"}
                    </p>
                    <a
                      aria-label="Live <~>"
                      className="live-btn"
                    >{`Live <~>`}</a>
                  </div>
                </div>
              );
            })
          : projectData.map((item, index) => {
              if (index <= 2) {
                return (
                  <div key={index} className="project-box">
                    <div className="overflow-hidden">
                      <img
                        className="project_image"
                        src={item.image}
                        alt="..."
                      />
                    </div>
                    <p
                      className="tech-stack-text text-gray-500"
                      style={{ color: "gray" }}
                    >
                      {item.subtitle || "-"}
                    </p>
                    <div className="project-content">
                      <p
                        className="project-title animate-bounce dark:text-white "
                        style={{ fontSize: "bold" }}
                      >
                        {item.title || "-"}
                      </p>
                      <p className="project-sub-text">
                        {item.description || "-"}
                      </p>
                      {item.isDisabled && (
                        <div className="flex justify-between items-center w-full gap-[25px] ">
                          <button
                            className={`live-btn dark:bg-white hover:text-red-300`}
                            onClick={() => {
                              if (!item.isDisabled) {
                                toast(
                                  "Whoops! Sorry got busy at work, I will Update this sooner!"
                                );
                              } else {
                                window.open(item.link);
                              }
                            }}
                          >
                            Go live
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              }
            })}
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

export default Works;
