module.exports = function nicetime(duration, to) {
  if (to == null) {
    return niceify(duration);
  } else if (duration != null && to != null) {
    var from = duration;
    var to = to;
    return niceify(to - from);
  } else if (duration == null && to != null) {
    var from = new Date().getTime() / 1000;
    var to = to;
    return niceify(to - from);
  }
}

function niceify(duration) {
  var past = false;
  
  if (duration < 0) {
    past = true;
    duration = Math.abs(duration);
  }
  
  duration = new Number(duration).toFixed(2);
  
  var durstr = '';
  
  var second = 1,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  
  if (duration < minute) {
    durstr = 'less than a minute';
  } else if (duration < minute * 2) {
    durstr = 'about a minute';
  } else if (duration < hour) {
    durstr = Math.floor(duration / minute) + ' minutes';
  } else if (duration < hour * 2) {
    durstr = 'about an hour';
  } else if (duration < day) {
    durstr = 'about ' + Math.floor(duration / hour) + ' hours';
  } else if (duration < day * 2) {
    durstr = '1 day';
  } else if (duration < day * 365) {
    durstr = Math.floor(duration / day) + ' days';
  } else {
    durstr = 'over a year';
  }
  
  if (past == true) durstr += ' ago';
  return durstr;
}