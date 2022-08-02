from fastapi import APIRouter,Depends
from sqlalchemy.orm import Session
from models.main import get_db
from models.posts import PostsModel
import datetime
router = APIRouter()


@router.get("/posts/", tags=["posts"])
async def all_posts(session: Session = Depends(get_db)):
    posts = PostsModel(title='hello', date=datetime.datetime.today())
    session.add(posts)
    session.commit()
    session.refresh(posts)
    return posts

@router.get("/posts/{id}", tags=["post"])
async def get_posts(id: int):
    return id