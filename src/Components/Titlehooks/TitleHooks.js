import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Lens Graphy`;
  }, [title]);
};

export default useTitle;
