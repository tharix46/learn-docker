FROM python:3.12.11-slim-trixie

WORKDIR /app

COPY requirements.txt .

# --no-cache-dir: do not copy downloaded requirements to "cache" folder
RUN pip install --no-cache-dir -r requirements.txt

COPY devops .

RUN adduser --system --group --uid 999 appuser && \
chown -R appuser:appuser .

USER appuser

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "devops.wsgi:application"]

