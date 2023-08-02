import SideBar from "./sidebar.js";
import Tasks from "./tasks.js";
import Notepad from "./notepad.js";
import BackgroundImage from "./backgroundImage.js";

// sections
const sidebarSection = document.getElementById("sidebar");
const tasksSection = document.getElementById("tasks");
const notepadSection = document.getElementById("notepad");
const textarea = document.getElementById("textarea")

// sidebar buttons
const bar = document.getElementById("bar");
const coverPic = document.getElementById("cover-picture");
const coverPicUploader = document.getElementById("cover-pic-uploader");
const profilePic = document.getElementById("profile-picture");
const profilePicUploader = document.getElementById("profile-pic-uploader");
const userName = document.getElementById("user-name");
const userTitle = document.getElementById("user-title");
const tasksButton = document.getElementById("tasks-button");
const notepadButton = document.getElementById("notepad-button");

// tasks buttons
const tasksCoverPic = document.getElementById("tasks-cover-pic");
const tasksCoverPicUploader = document.getElementById("tasksCoverPic-uploader");
const tasksInput = document.getElementById("tasks-input");
const tasksContainer = document.getElementById("tasks-container");
const tasksImage = document.getElementById("tasks-image");

// notepad buttons
const notepadCoverPic = document.getElementById("notepad-cover-pic");
const notepadCoverPicUploader = document.getElementById("notepadCoverPic-uploader");

const emojiButton = document.getElementById("emoji");
const emojiSelector = document.getElementById("emoji-selector");

const upload = document.getElementById("upload");
const fileUploader = document.getElementById("file-uploader");

const save = document.getElementById("save");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

const settings = document.getElementById("settings");
const settingsPanel = document.getElementById("settings-panel");
const xmark = document.getElementById("settings-panel-xmark");
const fontButton = document.getElementById("fonts");
const sizeButton = document.getElementById("size");
const alignmentButton = document.getElementById("alignment");


// set image
BackgroundImage.set(coverPic, coverPicUploader, "coverPic");
BackgroundImage.set(profilePic, profilePicUploader, "profilePic");
BackgroundImage.set(notepadCoverPic, notepadCoverPicUploader, "notepadCoverPic");
BackgroundImage.set(tasksCoverPic, tasksCoverPicUploader, "tasksCoverPic");

// load image
BackgroundImage.load(coverPic, "coverPic");
BackgroundImage.load(profilePic, "profilePic");
BackgroundImage.load(notepadCoverPic, "notepadCoverPic");
BackgroundImage.load(tasksCoverPic, "tasksCoverPic");


const sidebar = new SideBar(sidebarSection, bar, userName, userTitle, tasksButton, notepadButton);
sidebar.toggle();
sidebar.setUserName();
sidebar.setUserTitle();
sidebar.changeApp(tasksSection, notepadSection);

const tasks = new Tasks(tasksInput, tasksContainer, tasksImage);
tasks.loadTask();
tasks.addTask();

const notepad = new Notepad(textarea, emoji, upload, save, settings, wordCount, charCount);
notepad.emoji(emojiSelector);
notepad.uploadFile(fileUploader);
notepad.saveNotes();

notepad.toggleSettings(settingsPanel, xmark);
notepad.setFont(fontButton);
notepad.setFontSize(sizeButton);
notepad.setAlignment(alignmentButton);

notepad.setWordCount();
notepad.setCharCount();