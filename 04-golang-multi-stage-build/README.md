# Multi Stage Docker Build

A simple example of a multi-stage Docker build for a Go application.

The Dockerfile consists of two stages:

1. builds the Go application
2. creates a minimal Docker image containing only the compiled binary.

Source code is originally from [Abhishek Veeramalla's github](https://github.com/iam-veeramalla/Docker-Zero-to-Hero/tree/main/examples/golang-multi-stage-docker-build) and has been slightly modified for this example.

---

### Docker Commands Used

```bash
# build the Docker image
docker build -t go-cal-multi-stage:V1 .

# verify the image is created
docker images

# run the Docker container
docker run -it --name go-cal go-cal-multi-stage:V1
```

---

### Statically linked binary

A binary that includes all required libraries inside the executable. No external system libs are needed. This makes it runnable in a scratch image with no OS. Like packing your entire runtime into one file.

`CGO_ENABLED=0` ensures the binary is fully self-contained.

---

### Extra Notes

Golang is a statically-typed programming language that does not require a runtime in the traditional sense. Unlike dynamically-typed languages like Python, Ruby, and JavaScript, which rely on a runtime environment to execute their code, Go compiles directly to machine code, which can then be executed directly by the operating system.

So the real advantage of multi stage docker builds can be understood with a drastic decrease in the Image size.

---
