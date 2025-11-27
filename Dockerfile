# -------------------------
# Build backend (bun)
# -------------------------
FROM oven/bun:1 AS builder-backend
WORKDIR /srv/api

COPY api/package.json api/bun.lockb* api/bun.lock* ./
COPY api/ ./

RUN bun install
RUN bun run build:ts

# -------------------------
# Build frontend (bun)
# -------------------------
FROM oven/bun:1 AS builder-frontend
WORKDIR /srv/app

COPY app/package.json app/bun.lockb* app/bun.lock* ./
COPY app/ ./

RUN bun install
RUN bun run build

# -------------------------
# Runtime: bun + nginx
# -------------------------
FROM oven/bun:1 AS runtime
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y nginx gettext-base && \
    rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/www/html /srv/api

COPY --from=builder-frontend /srv/app/dist /var/www/html
COPY --from=builder-backend /srv/api /srv/api

COPY nginx.conf.template /etc/nginx/conf.d/nginx.conf.template

EXPOSE 8080

CMD sh -c "\
    export PORT=3000 && \
    cd /srv/api && bun run start & \
    export PORT=${PORT:-8080} && \
    envsubst '\$PORT' < /etc/nginx/conf.d/nginx.conf.template > /etc/nginx/conf.d/default.conf && \
    nginx -g 'daemon off;' \
    "
