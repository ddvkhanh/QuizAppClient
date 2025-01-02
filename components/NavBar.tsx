"use client";

import { Button } from "components/ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "components/ui/drawer";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import routes from "lib/routes";
import { RxHamburgerMenu } from "react-icons/rx";
import styles from "./NavBar.module.css";

const NavBar = () => {
  console.log("NAV_ITEMS:", NAV_ITEMS);
console.log("Routes:", routes);
  return (
    <DrawerRoot>
      <DrawerBackdrop/>
      <DrawerTrigger asChild>
        <Button aria-label="Open menu" colorPalette="teal" p="5" variant="solid" size="md">
          <RxHamburgerMenu />
          <Text textStyle="xl">QuizApp</Text>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Text textStyle="xl">Menu</Text>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <nav>
            <ul className={styles.navList}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label} className={styles.navItem}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerBody>
        <DrawerFooter>
          <DrawerActionTrigger asChild>
            <Button aria-label="Close menu" variant="outline">
              Cancel
            </Button>
          </DrawerActionTrigger>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default NavBar;

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: routes.home,
  },
  {
    label: "Quizzes",
    href: routes.quizzes.base,
  },
  {
    label: "Create New Quiz",
    href: routes.quizzes.create,
  },
];
