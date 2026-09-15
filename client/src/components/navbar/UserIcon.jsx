import { useUser } from "@clerk/react";
import { UserRound } from "lucide-react";

const UserIcon = () => {
  const { user } = useUser();
  if (user) return <img src={user.imageUrl} className="w-6 h-6 object-cover rounded-2xl"/>;
  return <UserRound />;
};
export default UserIcon;
