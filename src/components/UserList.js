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
    <div className="p-6 bg-gradient-to-r from-sky-100 to-sky-300">
      <h1 className="text-4xl font-bold mb-4 text-neutral-800 text-center">Listed Users</h1>
      <input
        type="text"
        placeholder="Search users"
        onChange={handleSearch}
        className="mb-4 p-2 border text-stone-600 font-semibold bg-slate-100 border-gray-300 rounded"
      />
      {userStore.loading && <p className="text-blue-500">Loading...</p>}
      {userStore.error && <p className="text-red-500">{userStore.error}</p>}
      <ul className="space-y-4">
        {userStore.filteredUsers.map((user, index) => (
          <li key={index} className="flex items-center space-x-4">
            <img src={user.picture.thumbnail} alt="User Thumbnail" className="w-10 h-10 rounded-full" />
            <p className='text-black text-lg font-medium'>{user.name.first} {user.name.last}</p>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={() => handlePageChange(userStore.currentPage - 1)}
          disabled={userStore.currentPage === 1}
          className="px-4 py-2 bg-gray-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg text-stone-700"> Page {userStore.currentPage} </span>
        <button
          onClick={() => handlePageChange(userStore.currentPage + 1)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default UserList;
