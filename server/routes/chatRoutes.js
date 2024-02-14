const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  accessChat,
  fetchChats,
  fetchGroups,
  createGroupChat,
  exitGroupChat,
  addSelfToGroupChat,
} = require("../controllers/chatController");

router.post("/", authMiddleware, accessChat);
router.get("/", authMiddleware, fetchChats);
router.get("/groups", authMiddleware, fetchGroups);
router.post("/create-group", authMiddleware, createGroupChat);
router.put("/join-group", authMiddleware, addSelfToGroupChat);
router.put("/exit-group", authMiddleware, exitGroupChat);

module.exports = router;
