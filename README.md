# test-push

Web通知の検証をしています。

## ローカルでの確認
```
% node app
server starting on http://localhost:6001
```
- URLにアクセスしてください。
- 「送信」ボタンをクリックすると通知されます。

## リモートでの確認
- IBM Cloud の Cloud Foundry にプッシュしてください。
  - package.json に login, target, push, stop コマンドを準備、ご自身の設定に変更してください。
- HTTPS でアクセス、「送信」ボタンをクリックすると通知されます。
