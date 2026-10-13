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