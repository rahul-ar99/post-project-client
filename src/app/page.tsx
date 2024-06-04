import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-black p-8 rounded shadow-md">
        <h1 className="text-2xl mb-4">Home Page</h1>
        <p>Welcome to the home page!</p>
      </div>
    </div>
  );
};

export default HomePage;
