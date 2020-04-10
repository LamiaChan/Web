FROM python:3
ENV PYTHONUNBUFFERED 1
COPY . /srv/www/lamiachan/backend/
WORKDIR /srv/www/lamiachan/backend
RUN pip install -r requirements.txt
CMD ["gunicorn", "--chdir", "lamia_django", "--bind", ":8000", "lamia_django.wsgi:application"]
