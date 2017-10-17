$(document).ready(function() {
  $("img#dogpic").click(function() {
    $("ul.dogtag").prepend("<li>WOOF WOOF!</li>");
    $("ul.cattag").prepend("<li>HISSSSsss!</li>");
  });
  $("img#catpic").click(function() {
    $("ul.cattag").prepend("<li>MrrroooWWooW!</li>");
    $("ul.dogtag").prepend("<li>Bark!</li>");
  });
  $(".boneclick").click(function() {
    $(".bone-showing").toggle();
    $(".bone-hidden").toggle();
  });
  $(".birdclick").click(function() {
    $(".bird-showing").toggle();
    $(".bird-hidden").toggle();
  });
  $("img#bonepic").click(function() {
    $("ul.dogtag").prepend("<li>*wags tail*</li>");
  });
  $("img#birdpic").click(function() {
    $("ul.cattag").prepend("<li>Prrrrrrr</li>");
  });
  $("img#bearpic").click(function() {
    $("li").remove();
    $(".bird-showing").toggle();
    $(".bird-hidden").toggle();
    $(".bone-showing").toggle();
    $(".bone-hidden").toggle();

  });
});
