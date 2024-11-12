import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EditIcon from "@mui/icons-material/Edit";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export const SidebarData = [
  {
    title: "ホーム",
    link: "/home",
  },
  {
    title: "作る",
    icon: <AttachEmailIcon />,
    link: "/make",
  },
  {
    title: "使い方",
    icon: <HelpOutlineIcon />,
    link: "/howto",
  },
  {
    title: "編集",
    icon: <EditIcon />,
    link: "/edit",
  },
  {
    title: "ログイン",
    icon: <HelpOutlineIcon />,
    link: "/login",
  },

];