import { makeObservable, observable, action, computed } from 'mobx';
import axios from 'axios';

class UserStore {
  users = [];
  searchQuery = '';
  currentPage = 1;
  usersPerPage = 25;
  loading = false;
  error = null;

  constructor() {
    makeObservable(this, {
      users: observable,
      searchQuery: observable,
      currentPage: observable,
      usersPerPage: observable,
      loading: observable,
      error: observable,
      fetchUsers: action,
      setSearchQuery: action,
      setCurrentPage: action,
      filteredUsers: computed,
    });
  }

  async fetchUsers() {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=${this.usersPerPage}&page=${this.currentPage}`);
      this.users = response.data.results;
    } catch (error) {
      this.error = 'Failed to fetch users';
    } finally {
      this.loading = false;
    }
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  setCurrentPage(page) {
    this.currentPage = page;
    this.fetchUsers();
  }

  get filteredUsers() {
    return this.users.filter(user =>
      `${user.name.first} ${user.name.last}`.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}

const userStore = new UserStore();
export default userStore;
