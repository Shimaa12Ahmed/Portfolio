import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Icon,
} from "@chakra-ui/react";

const SkillsCard = (title, categories) => (
  <Box mb={16}>
    <Heading
      size="lg"
      color="brand.600"
      mb={8}
      textAlign="center"
      fontWeight="700"
    >
      {title}
    </Heading>

    {categories.map((category) => (
      <Box key={category.id} mb={9}>
      
        <Heading
          size="md"
          mb={5}
          fontWeight="600"
          pl={3}
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "3px",
            height: "18px",
            borderRadius: "full",
            bg: "brand.600",
          }}
        >
          {category.title}
        </Heading>

        <SimpleGrid
          columns={{
            base: 3,
            sm: 4,
            md: 5,
            lg: 6,
          }}
          spacing={{ base: 5, md: 7 }}
          justifyItems="center"
        >
          {category.skills.map((skill) => (
            <Card
              key={skill.name}
              role="group"
              w="85px"
              h="85px"
              borderRadius="full"
              border="1px solid"
              borderColor="gray.300"
              bg="white"
              boxShadow="sm"
              transition="all 0.25s ease"
              cursor="pointer"
              _hover={{
                transform: "translateY(-5px) scale(1.06)",
                boxShadow: "0 8px 18px rgba(0, 0, 0, 0.12)",
                borderColor: skill.color,
              }}
            >
              <CardBody
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={2}
              >
                <VStack spacing={1}>
                  {/* Icon */}
                  <Icon
                    as={skill.icon}
                    boxSize={6}
                    color={skill.color}
                    transition="all 0.25s ease"
                    _groupHover={{
                      transform: "scale(1.15)",
                    }}
                  />

                  {/* Skill Name */}
                  <Text
                    fontSize="10px"
                    fontWeight="500"
                    textAlign="center"
                    color="gray.600"
                    lineHeight="1.1"
                    maxW="70px"
                  >
                    {skill.name}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    ))}
  </Box>
);

export default SkillsCard;