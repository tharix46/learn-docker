FROM python:3.12.11-slim-trixie

RUN adduser --system --group --uid 10001 appuser && \
    mkdir /app && \
    chown appuser:appuser /app

WORKDIR /app

COPY requirements.txt .

# --no-cache-dir: do not copy downloaded requirements to "cache" folder
RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=10001:10001 devops .

USER 10001

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "devops.wsgi:application"]

