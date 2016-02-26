FROM node

RUN mkdir /app
WORKDIR /app

RUN \
    git clone https://github.com/etsy/statsd.git && \
    cd statsd && \ 
    npm install git://github.com/markkimsal/statsd-elasticsearch-backend.git

ADD config.js ./statsd/ 

CMD node /app/statsd/stats.js /app/statsd/config.js
