const db = require("../db/query");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini Message Board", messages });
}

async function getMessageById(req, res) {
  const { messageId } = req.params;
  console.log(messageId);
  const message = (await db.getMessageById(messageId)).rows.find(
    (message) => message.id == messageId
  );
  if (message) {
    res.render("messageDetails", {
      title: `Messages from ${message.username}`,
      message: message,
    });
  } else {
    res.status(404).send("User not found");
  }
}

async function createMessageGet(req, res) {
  res.render("form", { title: "Add a New Message" });
}

async function createMessage(req, res) {
  const { username, text } = req.body;
  await db.createMessage(username, text, new Date());
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  createMessageGet,
  getMessageById,
  createMessage,
};
