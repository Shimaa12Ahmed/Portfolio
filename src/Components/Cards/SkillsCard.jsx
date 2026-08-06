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
    >
      {title}
    </Heading>

    {categories.map((category) => (
      <Box key={category.id} mb={10}>
        <Heading
          size="md"
          mb={5}
        >
          {category.title}
        </Heading>

        <SimpleGrid
          columns={{
            base: 2,
            md: 3,
            lg: 4,
          }}
          spacing={6}
        >
          {category.skills.map((skill) => (
            <Card key={skill.name}>
              <CardBody>
                <VStack spacing={4}>
                  <Icon
                    as={skill.icon}
                    boxSize={10}
                    color={skill.color}
                  />

                  <Text
                    fontWeight="600"
                    textAlign="center"
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