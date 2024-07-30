document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // シンプルなハードコードされた認証
    const validUsername = 'seijinkai';
    const validPassword = 'jimutoutyoku';

    if (username === validUsername && password === validPassword) {
        document.getElementById('message').textContent = 'ログイン成功！';
        document.getElementById('message').style.color = 'green';
        // main.htmlに遷移
        window.location.href = 'main.html';
    } else {
        document.getElementById('message').textContent = 'ユーザー名またはパスワードが正しくありません。';
        document.getElementById('message').style.color = 'red';
    }
});
