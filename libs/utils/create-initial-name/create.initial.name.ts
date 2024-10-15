export const createInitialName = (name: string) => {
  return (
    name?.split(" ")[0][0] + (name?.split(" ")[1] ? name?.split(" ")[1][0] : "")
  );
};
