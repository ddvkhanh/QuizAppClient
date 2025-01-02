import { Box, Heading, Text, Container } from "@chakra-ui/react";
import QuestionsForm from "components/QuestionsForm";

export default function CreateQuiz() {
  return (
      <Box bg="white" color="black" maxW="xl" mx="auto" mt={8} p={4}>
            <Heading as="h1" size="xl" mb={4}>
              Create a New Quiz
            </Heading>
            <Text mb={6}>
              Fill in the details below to create a new quiz.
            </Text>

            <QuestionsForm />
      </Box>
  );
}
