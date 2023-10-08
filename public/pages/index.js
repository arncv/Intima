const chatForm = document.getElementById('chat-form');
      const messageInput = document.getElementById('message-input');
      const chatLog = document.getElementById('chat-log');

      chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = messageInput.value;

        const messageEl = document.createElement('div');
        messageEl.className = 'message';
        messageEl.textContent = `You: ${message}`;
        chatLog.appendChild(messageEl);

        fetch('/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        })
          .then((res) => res.json())
          .then((data) => {
            const reply = data.reply;
            const replyEl = document.createElement('div');
            replyEl.className = 'reply';
            replyEl.textContent = `Chatbot: ${reply}`;
            chatLog.appendChild(replyEl);
            chatLog.scrollTop = chatLog.scrollHeight;
          });

        messageInput.value = '';
      });
      function goBack() {
        window.history.back();
      }
      
      function startChat() {
        location.reload();
      }
      
    