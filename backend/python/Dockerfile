FROM python:3.8-slim

WORKDIR /app

COPY main.py .

RUN pip install Flask

EXPOSE 3003

CMD ["python", "main.py"]
