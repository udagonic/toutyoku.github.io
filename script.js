// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // シンプルなハードコードされた認証
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').textContent = 'ログイン成功！';
        document.getElementById('message').style.color = 'green';
        // ここでリダイレクトや次のアクションを実行できます
    } else {
        document.getElementById('message').textContent = 'ユーザー名またはパスワードが正しくありません。';
    }
});
