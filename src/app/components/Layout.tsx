// components/Layout.tsx

import Navbar from './Navbar';
import UserProfileCard from './UserProfileCard';
import NewsFeed from './NewsFeed';
import PostUpload from './PostUpload';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar component */}
      <Navbar />

      {/* Main content section */}
      <main className="flex-grow flex justify-start items-start p-4">
        {/* User Profile */}
        <UserProfileCard />

        {/* News Feed */}
        <NewsFeed />

        {/* Post Upload */}
        <PostUpload />
      </main>
    </div>
  );
};

export default Layout;
