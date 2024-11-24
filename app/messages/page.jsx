const simulateDelay = async () => {
  return new Promise((resolve) => setTimeout(resolve, 3000));
};

const MessagesPage = async () => {
  await simulateDelay();

  return <div>Messages Page</div>;
};

export default MessagesPage;
