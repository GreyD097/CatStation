document.getElementById('submitBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');

    if (messageInput.value.trim() === '') {
        alert('请写入您的留言。');
        return;
    }

    const messageDiv = document.createElement('div');
    messageDiv.textContent = messageInput.value;
    messageDiv.style.borderBottom = '1px solid #ccc';
    messageDiv.style.padding = '5px 0';

    messagesContainer.appendChild(messageDiv);
    messageInput.value = '';
});
