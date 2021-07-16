(function($) {
  $(document).ready(function () {
    let data = {
      mp3: "http://www.jplayer.org/audio/mp3/TSP-05-Your_face.mp3",
    }
    $('.play').on('click', function (){
      $("#jquery_jplayer_1").jPlayer("setMedia", data).jPlayer("play");
      return false;
    })
  });
})(jQuery);
