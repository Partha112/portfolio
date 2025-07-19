import { useEffect, useState } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goto = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listenToScroll = () => {
    let height = 300;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={goto}
          className="bg-blue-500 p-2 rounded-full w-12 h-12 flex items-center justify-center ml-auto text-white animate-bounce fixed bottom-4 right-4 shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          <i className="ri-arrow-up-line font-semibold "></i>
        </button>
      )}
    </>
  );
};

export default GoToTop;
