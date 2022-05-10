const daily = document.getElementById('daily');
const monthly = document.getElementById('monthly');
const weekly = document.getElementById('weekly');
const current = document.querySelectorAll("#current")
const previous = document.querySelectorAll("#previous")
const Data = [{
  "title": "Work",
  "timeframes": {
    "daily": {
      "current": 5,
      "previous": 7
    },
    "weekly": {
      "current": 32,
      "previous": 36
    },
    "monthly": {
      "current": 103,
      "previous": 128
    }
  }
},
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }]
function timeline(time) {
  let timeframes = []
  let previousTime = []

  if (time == "daily") {
    Data.forEach((item)=> {
      timeframes.push(item.timeframes.daily.current)
      previousTime.push(item.timeframes.daily.previous)
    })
    current.forEach((res, index)=> {
      res.innerText = timeframes[index]+"Hrs"
    })
    previous.forEach((res, index)=> {
      res.innerText = `Last day - ${previousTime[index]}hrs`
    })
    // console.log('daily');
  } else if (time == "monthly") {
   // console.log("monthly");
    Data.forEach((item)=> {
      timeframes.push(item.timeframes.monthly.current)
      previousTime.push(item.timeframes.monthly.previous)
    })
    current.forEach((res, index)=> {
      res.innerText = timeframes[index]+"Hrs"

    })
    previous.forEach((res, index)=> {
      res.innerText = `Last month -${previousTime[index]}hrs`
    })

  } else if (time == "weekly") {
    // console.log("weekly");
    Data.forEach((item)=> {
      timeframes.push(item.timeframes.weekly.current)
      previousTime.push(item.timeframes.weekly.previous)
    })
    current.forEach((res, index)=> {
      res.innerText = timeframes[index]+"Hrs"
      previous.forEach((res, index)=> {
        res.innerText = `Last week - ${previousTime[index]}hrs`

      })
    })
  }
}
daily.onclick = ()=> {
  timeline("daily")
}
monthly.onclick = ()=> {
  timeline("monthly")
}
weekly.onclick = ()=> {
  timeline("weekly")
}
// Aaaaaaaaaaaaaaaawwwwwwwwaaaaaaaaaaaaaaaaaaaaaawwwaaaaaqaqaaawwwwwwwwaaaaaaaaaaaaawwwwaaaaaaaaa // Ups -_-