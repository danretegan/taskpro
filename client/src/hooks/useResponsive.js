import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isOnMobile = useMediaQuery({ maxWidth: 767 });
  const isOnTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isOnDesktop = useMediaQuery({ minWidth: 1280 });
  const isNotOnMobile = useMediaQuery({ minWidth: 768 });

  return {
    isOnMobile,
    isNotOnMobile,
    isOnTablet,
    isOnDesktop,
  };
};

export default useResponsive;
