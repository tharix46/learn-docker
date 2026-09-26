# stage 1: builder
FROM golang:1.25 AS builder

WORKDIR /src

COPY calculator.go .

ENV GO111MODULE=off

# build statically linked binary
# go build automatically compiles the binary with 755 (rwxr-xr-x) permissions. This allows the binary to be executed by any user
RUN CGO_ENABLED=0 go build -o app .

# stage 2: final image
FROM scratch

# copy the compiled binary from the build stage
COPY --from=builder /src/app /app

USER 10001:10001

ENTRYPOINT ["/app"]

