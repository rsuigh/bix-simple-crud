FROM python:3
RUN apt-get update
ENV PYTHONUNBUFFERED=1
WORKDIR /code
COPY  requirements.txt /code/
RUN pip install -r requirements.txt  
