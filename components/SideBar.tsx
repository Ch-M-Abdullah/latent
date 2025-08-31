import React, { Dispatch } from "react";
import { StyleSheet } from "react-native";
import SideBarItem from "./SideBarItem";
import SlidingSideBar from "./SlidingSideBar";

type sideBarProps = {
  isSideBarOpen: boolean;
  setIsSideBarOpen: Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({
  isSideBarOpen,
  setIsSideBarOpen,
}: sideBarProps) {
  return (
    <SlidingSideBar
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
    >
        <SideBarItem text="Settings" icon="settings" link={"/"} setIsSideBarOpen={setIsSideBarOpen} />
    </SlidingSideBar>
  );
}

const styles = StyleSheet.create({});
