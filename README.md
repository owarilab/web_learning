# web_learning

Web開発の学習プロジェクトです。React + Viteを使用したフロントエンド環境構築です。

## 📋 プロジェクト構成

```
web_learning/
├── frontend/          # React + Vite フロントエンドアプリケーション
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 環境構築方法

### 前提条件

- Node.js (v18以上推奨)
- npm (Node.jsに付属)
- Git
- curl または wget

### Ubuntu 24.04での環境構築

Ubuntu 24.04に新しく環境を構築する場合の手順です。

#### 1. システムの更新

```bash
sudo apt update
sudo apt upgrade -y
```

#### 2. 必須パッケージのインストール

```bash
sudo apt install -y git curl build-essential
```

**インストール内容:**
- `git` - バージョン管理
- `curl` - ファイルダウンロード
- `build-essential` - Node.jsのネイティブモジュールコンパイル用

#### 3. Node.js と npm のインストール

**方法A: NodeSource公式リポジトリを使用（推奨）**

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
```

**方法B: nvm (Node Version Manager) を使用**

複数バージョンのNode.jsを管理したい場合に推奨：

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
```

**方法C: Ubuntuのデフォルトリポジトリから（最新版でない場合がある）**

```bash
sudo apt install -y nodejs npm
```

#### 4. インストール確認

```bash
node --version
npm --version
```

#### 5. リポジトリをクローン

```bash
git clone <repository-url>
cd web_learning
```

#### 6. frontendの依存関係をインストール

```bash
cd frontend
npm install
```

### インストール手順（既存のNode.js環境がある場合）

1. **リポジトリをクローン**

```bash
git clone <repository-url>
cd web_learning
```

2. **frontendの依存関係をインストール**

```bash
cd frontend
npm install
```

## 🔧 サーバー起動方法

### 開発サーバーの起動

frontendディレクトリで以下のコマンドを実行します：

```bash
npm run dev
```

ブラウザで **http://localhost:5173/** にアクセスしてください。

### 本番ビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### ビルド済みアプリのプレビュー

```bash
npm run preview
```

### コード品質チェック

```bash
npm run lint
```

ESLintによるコード静的解析を実行します。

## 📦 使用技術

- **React** ^19.2.5
- **React Router** ^7.18.3
- **React DOM** ^19.2.5
- **Vite** ^8.0.10
- **Babel** ^7.29.0
- **ESLint** ^10.2.1

## 🛠️ トラブルシューティング

### "vite: not found" エラー

依存関係がインストールされていません。以下を実行してください：

```bash
npm install
```

### ポート5173が既に使用されている場合

Viteは自動的に別のポートを使用します。または以下のように指定できます：

```bash
npm run dev -- --port 3000
```

## 📝 ライセンス

[LICENSE](./LICENSE) ファイルを参照してください。