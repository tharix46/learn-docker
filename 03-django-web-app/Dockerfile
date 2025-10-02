FROM python:3.12.11-slim-trixie

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY devops .

RUN adduser --system --group --uid 1000 appuser && \
chown -R appuser:appuser .

USER appuser

EXPOSE 8000

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "devops.wsgi:application"]

