import { useMediaQuery } from "@react-hooks-hub/use-media-query";

export default function useDevice() {
  const { device, orientation } = useMediaQuery({
    breakpoints: { desktop: 1100, tablet: 768, mobile: 0 },
  });

  return { device, orientation }
}