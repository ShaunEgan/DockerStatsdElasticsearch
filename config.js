{
  backends: ['statsd-elasticsearch-backend'],
  debug: false,
  elasticsearch: {
    port: process.env.ES_PORT,
    host: process.env.ES_HOST,
    path: "/",
    indexPrefix: "statsd",
    indexTimestamp: "day",
    countType: "counter",
    timerType: "timer",
    timerDataType: "timer_data",
    gaugeDataType: "gauge",
    formatter: "default_format"
  }
}
