export const getById = (id: string) => {
  return element(by.id(id));
};

export const getByText = (text: string) => {
  return element(by.text(text));
};
