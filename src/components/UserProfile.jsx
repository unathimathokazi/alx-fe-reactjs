function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img
        className="w-36 h-36 rounded-full mx-auto hover:scale-110 transition-transform duration-300 ease-in-out"
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe
      </h1>
      <p className="text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
