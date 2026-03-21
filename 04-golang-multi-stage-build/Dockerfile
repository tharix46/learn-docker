# stage 1: builder
FROM golang:1.25 AS builder

WORKDIR /src

COPY calculator.go .

ENV GO111MODULE=off

# build statically linked binary
RUN CGO_ENABLED=0 go build -o app .

RUN adduser --system --group --uid 999 appuser

# stage 2: final image
FROM scratch

# Copy the user and group files from the builder stage
COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group

# copy the compiled binary from the build stage
COPY --from=builder /src/app /app

USER appuser

ENTRYPOINT ["/app"]

