import React from "react";
import HomeIcon from "@mui/icons-material/Home";

import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import LoginIcon from '@mui/icons-material/Login';
import BuildIcon from '@mui/icons-material/Build';

export const SidebarData = [
  {
    title: <Typography sx={{ color: '#1976d2' ,marginTop: '19px'}}>ホーム</Typography>,  // 文字色を白に設定
    icon: <HomeIcon sx={{ color: '#1976d2' ,marginTop: '19px'}}/>,
    link: "/home",
  },
  {
    title: <Typography sx={{ color: '#1976d2' ,marginTop: '19px'}}>作る</Typography>, // 文字色を白に設定
    icon: <BuildIcon sx={{ color: '#1976d2' ,marginTop: '19px'}}/>,
    link: "/make",
  },
  {
    title: <Typography sx={{ color: '#1976d2' ,marginTop: '19px'}}>編集</Typography>,  // 文字色を白に設定
    icon: <EditIcon sx={{ color: '#1976d2' ,marginTop: '19px'}}/>,
    link: "/edit",
  },
  {
    title: <Typography sx={{ color: '#1976d2' ,marginTop: '19px'}}>ログイン</Typography>, // 文字色を白に設定
    icon: <LoginIcon sx={{ color: '#1976d2' ,marginTop: '19px'}}/>,
    link: "/login",
  },
];