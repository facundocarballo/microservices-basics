export const Container = {
  variants: {
    microserviceCard: () => ({
      borderRadius: 15,
      p: 2,
      border: "1px solid #aaa",
      minW: "400px",
      maxW: "400px",
      minH: "220px",
      _hover: {
        boxShadow: "md",
        transform: "scale(1.05)",
      },
    }),
  },
};
