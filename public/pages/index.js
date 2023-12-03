const chatForm = document.querySelector("#chat-form");
const messageInput = document.getElementById("message-input");
const chatLog = document.getElementById("chat-log");

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = messageInput.value;

  const messageEl = document.createElement("div");
  messageEl.className = "message msg-user";
  messageEl.textContent = message;
  chatLog.appendChild(messageEl);

  const response = await fetch("https://codex-a2ni.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: message }),
  });

  if (response.ok) {
    try {
      const data = await response.json();
      const parsedData = data.bot.trim();

      const replyEl = document.createElement("div");
      replyEl.className = "msg left-msg";
      const botReply = `
        <div class="msg-img" style="background-image: url(bot.png)"></div>
        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">BOT</div>
            <div class="msg-info-time">00:00</div>
          </div>
          <div class="msg-text">
            ${parsedData}
          </div>
        </div>
      `;
      replyEl.innerHTML = botReply;
      chatLog.appendChild(replyEl);

      chatLog.scrollTop = chatLog.scrollHeight;
      messageInput.value = "";
    } catch (error) {
      console.error("Error fetching bot  response:", error);
    }
  } else {
    console.error("Request  failed:", response.status);
  }
});

function goBack() {
  window.history.back();
}

function startChat() {
  location.reload();
}
