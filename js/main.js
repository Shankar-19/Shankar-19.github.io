import SideBar from "./sidebar.js";

// sections
const sidebar = document.getElementById("sidebar");
const textarea = document.getElementById("textarea")

// sidebar buttons
const bar = document.getElementById("bar");
const bgImage = document.getElementById("bg-image");
const profilePic = document.getElementById("profile-picture");
const imageUploader = document.getElementById("image-uploader");
const userName = document.getElementById("user-name");
const userTitle = document.getElementById("user-title");

// notepad buttons
const notepadHeader = document.getElementById("notepad-header");

SideBar.toggle(sidebar, bar);
SideBar.setImage(bgImage, profilePic, notepadHeader, imageUploader);
SideBar.setUserDetails(userName, userTitle);