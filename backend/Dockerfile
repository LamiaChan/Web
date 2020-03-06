FROM python:3
ENV PYTHONUNBUFFERED 1
COPY . /code/
WORKDIR /code
RUN pip install -r requirements.txt
RUN python manage.py migrate
CMD ["gunicorn", "--chdir", "lamia_django", "--bind", ":8000", "lamia_django.wsgi:application"]
