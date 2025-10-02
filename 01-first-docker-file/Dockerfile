FROM python:3.14.0rc3-alpine3.22

# set working directory inside the container
WORKDIR /app

# copy file from the host file system to the image file system
COPY hello.py .

# run a command to start the application
CMD ["python", "hello.py"]