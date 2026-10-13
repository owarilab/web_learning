# FastAPI Backend Setup

このディレクトリでは、Python + FastAPI を使った最小構成のバックエンドを構築します。

この構成は `pyproject.toml` を使い、`uv` で依存関係を管理する実務向けの形です。

## 1. 前提条件

- Python 3.10 以上
- `uv`（推奨）
- Git

## 2. uv のインストール

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

インストール後、シェルを再読み込みします。

```bash
source ~/.bashrc
```

確認:

```bash
uv --version
```

## 3. プロジェクトの初期化

```bash
cd /home/owari/web_learning/backend
uv init --app
```

`uv init --app` により、`pyproject.toml` とアプリの雛形が作成されます。

## 4. 依存関係の追加

```bash
uv add fastapi uvicorn
```

これにより `pyproject.toml` に依存関係が追加され、`uv.lock` も自動生成されます。

## 5. ディレクトリ構成

```text
backend/
├── app/
│   ├── __init__.py
│   └── main.py
├── pyproject.toml
├── uv.lock
├── README.md
└── .python-version
```

`.python-version` は必要に応じて作成します。

```bash
echo "3.12" > .python-version
```

## 6. pyproject.toml の例

```toml
[project]
name = "web-learning-backend"
version = "0.1.0"
description = "FastAPI backend for the web learning project"
readme = "README.md"
requires-python = ">=3.10"
dependencies = [
    "fastapi>=0.115.0",
    "uvicorn[standard]>=0.30.0",
]
```

## 7. FastAPI の最小実装

`app/main.py` を作成または更新し、次を記述します。

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="My API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}


@app.get("/api/message")
def get_message():
    return {"message": "Hello from FastAPI"}


@app.get("/api/items")
def get_items():
    return [
        {"id": 1, "name": "item-1"},
        {"id": 2, "name": "item-2"},
    ]
```

`app/__init__.py` は空でOKです。

```python
# app/__init__.py
```

## 8. 依存関係のインストール

```bash
cd /home/owari/web_learning/backend
uv sync
```

`uv sync` で `pyproject.toml` と `uv.lock` から仮想環境を生成し、必要な依存関係を入れます。

## 9. サーバー起動

```bash
cd /home/owari/web_learning/backend
uv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

起動後、ブラウザまたは curl で確認します。

```bash
curl http://localhost:8000/health
```

返却例:

```json
{"status": "ok"}
```

## 10. API ドキュメント確認

FastAPI は自動的に API ドキュメントを生成します。

- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

## 11. frontend からの呼び出し例

React からバックエンドを呼ぶ例です。

```js
fetch("http://localhost:8000/api/message")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

## 12. CORS の意味

ブラウザの制約上、`localhost:5173`（frontend）から `localhost:8000`（backend）へ直接 API を呼ぶには CORS を許可する必要があります。

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 13. 実務向けの運用観点

`pyproject.toml` を使うメリットは次の通りです。

- 依存関係管理が明示的
- `uv` による高速な環境構築
- 実務プロジェクトでもそのまま使いやすい
- `uv.lock` により環境の再現性が高い

## 14. よくある注意点

- FastAPI の dev server は 8000 番を使う
- frontend も 5173 を使うので、ポートが重ならない
- 本番環境では `allow_origins` を特定ドメインに限定する
- `pyproject.toml` と `uv.lock` を Git 管理対象にする

## 15. 次の一歩

最小構成のバックエンドが作れたら、次のような機能を追加できます。

- POST API の作成
- SQLite でデータ保存
- JWT 認証
- Docker 化
- frontend との連携

これで `pyproject.toml` を使った最小の FastAPI 環境を構築できます。
