import Description from "./Description"
import HeroButtons from "../Buttons/HeroButtons"
import { VStack } from "@chakra-ui/react"
const Content = () => {
  return (
    <>
 <VStack
    align="flex-start"
    spacing={2}
>

    <Description />

    <HeroButtons />

</VStack>
    </>
)}

export default Content