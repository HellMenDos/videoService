
FROM python:3.9
RUN mkdir /videos

WORKDIR /videos

COPY . .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

CMD ["python", "main.py"]

