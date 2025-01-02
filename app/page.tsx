import { Box, Image, Flex, Text, Heading } from "@chakra-ui/react";
import NavBar from "components/NavBar";

export default function Home() {
  return (
    <Box bg="white" minHeight="100vh">
      {/* Navigation Bar */}
      <Box bgColor="teal.700" height="4rem" display="flex" alignItems="center">
        <NavBar />
      </Box>

      {/* Main Content */}
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        minHeight="calc(100vh - 4rem)"
        p={4}
      >
        <Box
          bg="white"
          color="black"
          p={8}
          textAlign="center"
          maxWidth="600px"
        >
          <Text fontSize="3xl" mb={4}>
            Welcome to QuizApp
          </Text>
          <Text fontSize="lg" mb={6}>
            Start exploring quizzes now!
          </Text>
          <Image
            src="https://c.files.bbci.co.uk/15E07/production/_112970698_qt.jpg"
            alt="Quiz Illustration"
            maxWidth="100%"
          />
        </Box>
      </Flex>
    </Box>
  );
}
