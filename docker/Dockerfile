FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN apt-get update && \
apt-get install gdal-bin postgresql-client -y

RUN apt-get update && apt-get install nodejs npm -y

RUN mkdir /code

WORKDIR /code

COPY ./mozart/requirements.txt /code/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

COPY . /code

EXPOSE 8000