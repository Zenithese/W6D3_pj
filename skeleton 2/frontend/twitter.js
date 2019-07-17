const FollowToggle = require('./follow_toggle');


$(function () {
  debugger
  $('button.follow-toggle').each((i, button) => new FollowToggle(button, {}));
});
