FROM library/python:3.6.3

RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt uwsgi
# CMD python manage.py runserver 0.0.0.0:80
CMD uwsgi uwsgi.ini

