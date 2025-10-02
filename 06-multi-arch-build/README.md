# Multi-Architecture Multi-Stage Docker Build

A simple example of a multi-arch multi-stage Docker build for a Go application.

The Dockerfile consists of two stages:

1. builds the Go application
2. creates a minimal Docker image containing only the compiled binary.

Application source code is originally from [Abhishek Veeramalla's github](https://github.com/iam-veeramalla/Docker-Zero-to-Hero/tree/main/examples/golang-multi-stage-docker-build) and has been slightly modified for this example.

---

### Docker Commands Used

```bash
# list current builders
docker builder ls

# build the Docker image for multiple architectures
docker buildx build --platform linux/arm64,linux/amd64 --push -t tharix46/go-cal-multi-arch:V1 .

# verify the image is created
docker images

# run the Docker container
docker run -it tharix46/go-cal-multi-arch:V1
```

---

### Extra Notes

Golang is a statically-typed programming language that does not require a runtime in the traditional sense. Unlike dynamically-typed languages like Python, Ruby, and JavaScript, which rely on a runtime environment to execute their code, Go compiles directly to machine code, which can then be executed directly by the operating system.

So the real advantage of multi stage docker builds can be understood with a drastic decrease in the Image size.

---
