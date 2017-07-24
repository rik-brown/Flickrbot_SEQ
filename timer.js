module.exports = {
  milliseconds: 1000,
  seconds: 60,
  minutes: 10,
  hours: 1
}

// Always keep milliseconds: 1000
// Always keep seconds: 60 (it is unlikely you want an interval < 1 minute)
// For intervals < 1 hour, keep hours: 1 and vary the number of minutes
