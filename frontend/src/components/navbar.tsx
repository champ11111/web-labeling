import { Button } from "antd";

interface NavbarProps {
  username: string;
}

const handleLogout = () => {
  // Implement logout logic
};

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="flex justify-end bg-gray-200 p-4">
      <div>
        <span className="mr-4 text-black">Username: {username}</span>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </nav>
  );
};
export default Navbar;
