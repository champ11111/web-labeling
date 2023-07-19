import { Button } from "antd";
import { useRouter } from "next/navigation";

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/login");
  };

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
