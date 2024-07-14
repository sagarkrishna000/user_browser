import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import userStore from '../stores/userStore';

const UserList = observer(() => {
  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore.currentPage]);

  const handleSearch = (event) => {
    userStore.setSearchQuery(event.target.value);
  };

  const handlePageChange = (newPage) => {
    userStore.setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Listed Users</h1>
      <input type="text" placeholder="Search users" onChange={handleSearch} />
      {userStore.loading && <p>Loading...</p>}
      {userStore.error && <p>{userStore.error}</p>}
      <ul>
        {userStore.filteredUsers.map((user, index) => (
          <li key={index}>
            <p>{user.name.first} {user.name.last}</p>
            <img src={user.picture.thumbnail} alt="User Thumbnail" />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handlePageChange(userStore.currentPage - 1)} disabled={userStore.currentPage === 1}>
          Previous
        </button>
        <span> Page {userStore.currentPage} </span>
        <button onClick={() => handlePageChange(userStore.currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
});

export default UserList;
