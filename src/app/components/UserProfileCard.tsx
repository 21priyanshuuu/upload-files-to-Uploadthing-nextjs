// components/UserProfileCard.tsx

const UserProfileCard = () => {
    return (
      <div className="bg-white rounded-lg p-4 shadow-lg w-1/4 h-40">
        {/* Background image */}
        <div className="relative h-20">
          <img
            className="w-full h-20 object-cover rounded-t-lg mb-2"
            src="/image/background.jpg" // Replace with your background image URL
            alt="Background"
          />
          {/* Profile image */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-full"
              src="/image/image.jpeg" // Replace with your profile image URL
              alt="Profile"
            />
          </div>
        </div>
        {/* Name and description */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">John Doe</h2>
          <p className="text-sm text-gray-600">Frontend Developer</p>
        </div>
      </div>
    );
  };
  
  export default UserProfileCard;
  