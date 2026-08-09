import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TextAlignStart } from "lucide-react";
import UserIcon from "./UserIcon";
import { links } from "@/utils/links";
import { Link } from "react-router";
import { Show, useClerk } from "@clerk/react";
import SignOutMenuItem from "./SignOutMenuItem";

const DropdownListMenu = () => {
  const { openSignIn, openSignUp } = useClerk();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="cursor-pointer"
        render={<Button variant="outline" />}
      >
        <TextAlignStart />
        <UserIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          {links.map((item) => (
            <DropdownMenuItem
              key={item.href}
              className={"cursor-pointer"}
              render={<Link to={item.href} />}
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <Show when={"signed-in"}>
            <SignOutMenuItem />
          </Show>
          <Show when={"signed-out"}>
            <DropdownMenuItem onClick={() => openSignIn()}>
              Sign in
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => openSignUp()}>
              Sign up
            </DropdownMenuItem>
          </Show>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
