from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import sessionmaker


DATABASE_URL = 'postgresql://app:example@db/app'

engine = create_engine(DATABASE_URL)
Base = declarative_base()

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()