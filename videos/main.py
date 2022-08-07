from sqlalchemy import true
import uvicorn
from typing import Union
from fastapi import FastAPI, Request
from routers import posts
import time

from models.posts import PostsModel
from models.main import engine

app = FastAPI()
app.include_router(posts.router)



@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    print('Start request')
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response

PostsModel.metadata.create_all(bind=engine)

# hehed
if __name__ == '__main__':
    uvicorn.run("main:app", host="0.0.0.0", port=8888, reload=True, workers=3)


