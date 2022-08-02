from sqlalchemy import Column, Integer, String
from sqlalchemy.types import Date
from .main import Base


class PostsModel(Base):
    __tablename__ = "Posts"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date)
    title = Column(String(255), index=True)
