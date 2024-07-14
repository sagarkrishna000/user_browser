import userStore from './userStore';
import axios from 'axios';

jest.mock('axios');

describe('UserStore', () => {
  it('fetches users successfully', async () => {
    const users = [{ name: { first: 'John', last: 'Doe' }, picture: { thumbnail: 'url' } }];
    axios.get.mockResolvedValue({ data: { results: users } });

    await userStore.fetchUsers();
    expect(userStore.users).toEqual(users);
  });

  it('handles fetch users failure', async () => {
    axios.get.mockRejectedValue(new Error('Failed to fetch'));

    await userStore.fetchUsers();
    expect(userStore.error).toBe('Failed to fetch users');
  });
});
