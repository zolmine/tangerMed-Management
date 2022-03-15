import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Error = ({ error  }) => {
  const [isShowing, setIsShowing] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsShowing(false);
    }, 2000);
    setIsShowing(true);
  }, []);

  return (
    <>
      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          {error && (
            <div
              className="p-2 pl-4  text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert"
            >
              <span className="font-medium">{error}</span>
            </div>
          )}
        </div>
      </Transition>
    </>
  );
};

export default Error;
