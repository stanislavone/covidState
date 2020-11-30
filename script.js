$(document).ready(function() {
  $.ajax({
    url:
      "https://covid-api.com/api/reports?date=" +
      data() +
      "&iso=RUS&region_province=Sverdlovsk%20Oblast",
    success: function(data) {
      $(".newConf").text(data.data[0].confirmed_diff);
      $(".сonf").text(data.data[0].confirmed);
      $(".active").text(data.data[0].active);
      $(".lastUpdate").text(data.data[0].last_update);
      $(".death").text(data.data[0].deaths_diff);
      $(".deathDiff").text(data.data[0].deaths);
      $(".recovery").text(data.data[0].recovered_diff);
      $(".recoveryDiff").text(data.data[0].recovered);
      $(".region").text(data.data[0]["region"].province)
    }
  });

  function data() {
    let now = new Date();
    let mon = now.getMonth() + 1;
    let day = now.getFullYear() + "-" + mon + "-" + (now.getDate() - 1);
    return day;
  }
});
