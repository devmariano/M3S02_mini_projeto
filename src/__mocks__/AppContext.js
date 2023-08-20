export const mockContextValues = {
  cartItems: [],
  isCartVisible: false,
  setIsCartVisible: jest.fn(),
};

export const useContext = jest.fn(() => mockContextValues);
