FROM python:3.11

# Install required dependencies
RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    python3-pip

ENV PYTHONUNBUFFERED True

ENV APP_HOME /app

ENV PORT 4200

WORKDIR $APP_HOME

COPY . ./

RUN pip install --no-cache-dir -r requirements.txt

CMD exec gunicorn --bind :$PORT --workers 2 --threads 8 --timeout 0 main:app