import { Center, Text } from "@chakra-ui/react";
import Layout from "@/components/templates/Layout";

function Dashboard() {
  return (
    <Layout>
      <Center flex={1}>
        <Text fontSize={{ base: '40px' }}>Página no encontrada</Text>
      </Center>
    </Layout>
  );
}

export default Dashboard;
