import { Center } from "@chakra-ui/react";
import { RingLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <Center h="100vh">
      <RingLoader
        color="#741E34"
        speedMultiplier={2}
      />
    </Center>
  );
};

export default LoadingPage;