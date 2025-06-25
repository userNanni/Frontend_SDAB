import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Menubar } from "@/components/ui/menubar";

import { ModeToggle } from "@/components/mode-toggle";
import { NavLink } from "react-router";

export function Header() {
  return (
    <Menubar className="bg-background border-b border-border p-6 rounded-full fixed top-6 z-50 drop-shadow-lg">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <NavLink to="/" end>
                <span className="text-lg font-bold text-black dark:text-white">
                  Início
                </span>
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <NavLink to="/Dados" end>
                <span className="text-lg font-bold text-black dark:text-white">
                  Dados
                </span>
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <NavLink to="/Facilidades" end>
                <span className="text-lg font-bold text-black dark:text-white">
                  Facilidades
                </span>
              </NavLink>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <ModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Menubar>
  );
}
