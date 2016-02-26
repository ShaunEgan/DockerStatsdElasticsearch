# Docker statsd elasticsearch

An ultra simple `statsd` setup using `elasticsearch` as a backend. The 
backend comes from [markkimsal/statsd-elasticsearch-backend](https://github.com/markkimsal/statsd-elasticsearch-backend).

## Usage

This has been set up with the intension of using it on AWS, with ECS 
providing services to keep tasks running. The basic environmental 
variables required to keep this running are as follows:

* STATSD_DEBUG - 0 || 1 - Run `statsd` in debug mode
* ES_HOST - URL - Where to find the `elasticsearch` instance
* ES_PORT - Integer - The port exposing `elasticsearch`

## Licence

MIT
