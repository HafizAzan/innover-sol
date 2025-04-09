import React, { memo } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

function CustomDrawer({ title = "", btn = "", children }) {
  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>{btn}</DrawerTrigger>
      <DrawerContent className="ml-auto w-[300px] sm:w-[400px]">
        <DrawerHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{title}</DialogTitle>
          <DrawerClose asChild>
            <X className="cursor-pointer" />
          </DrawerClose>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default memo(CustomDrawer);
