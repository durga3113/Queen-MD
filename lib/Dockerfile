FROM node:lts-buster

WORKDIR /root/AlienAlfa/

COPY ./ /root/AlienAlfa/

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

CMD ["node", "."]
