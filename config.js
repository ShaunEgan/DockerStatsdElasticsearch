backends: [ 'statsd-elasticsearch-backend', 'other-backends'],
debug: true,
elasticsearch: {
  port:          process.env.ES_PORT,
  host:          process.env.ES_HOST,
  path:          "/",
  indexPrefix:   "statsd",
  indexTimestamp: "day",     //for index statsd-2015.01.01
  countType:     "counter",
  timerType:     "timer",
  timerDataType: "timer_data",
  gaugeDataType: "gauge",
  formatter:     "default_format"
}