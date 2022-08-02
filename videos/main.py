from sqlalchemy import true
import uvicorn
from typing import Union
from fastapi import FastAPI
from routers import posts

from models.posts import PostsModel
from models.main import engine

app = FastAPI()
app.include_router(posts.router)

PostsModel.metadata.create_all(bind=engine)

# hehed
if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True, workers=3)


