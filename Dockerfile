FROM node

RUN mkdir /app
WORKDIR /app

RUN \
    git clone git@github.com:etsy/statsd.git && \
    npm install git://github.com/markkimsal/statsd-elasticsearch-backend.git

ADD config.js .

CMD node stats.js config.js
