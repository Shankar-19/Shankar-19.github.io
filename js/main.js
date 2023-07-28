import SideBar from "./sidebar.js";

// sections
const sidebar = document.getElementById("sidebar");

// sidebar buttons
const bar = document.getElementById("bar");
const bgImage = document.getElementById("bg-image");
const profilePic = document.getElementById("profile-picture");
const imageUploader = document.getElementById("image-uploader");
const userName = document.getElementById("user-name");
const userTitle = document.getElementById("user-title");

SideBar.toggle(sidebar, bar);
SideBar.setImage(bgImage, profilePic, imageUploader);
SideBar.setUserDetails(userName, userTitle);
