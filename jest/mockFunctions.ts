jest.mock('@apollo/client', () => ({
  gql: jest.fn(),
  useQuery: jest.fn(() => ({
    data: {
      listZellerCustomers: {
        items: [
          {
            name: 'TestCustomer1',
            email: 'test1@test.com',
            role: 'Manager',
            id: '1',
          },
        ],
      },
    },
    loading: false,
    refetch: jest.fn(),
    error: null,
  })),
}));
jest.mock('react-native/Libraries/Lists/FlatList', () => 'FlatList');
