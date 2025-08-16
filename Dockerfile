FROM ubuntu:noble

WORKDIR /webscrapingautomatic

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    unzip \
    build-essential \
    python3 \
    python3-pip \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Instalar Playwright y sus dependencias
RUN npm install -g playwright

# Configurar Playwright para instalar navegadores
RUN npx playwright install


CMD ["sleep", "infinity"]



