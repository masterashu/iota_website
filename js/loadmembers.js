$(document).ready(function(){

  var members = jQuery.parseJSON(member_data);
  var i;
  for (i = 0; i < members.length; i++) {
    var i_member = members[i];
    var txt = $('<div/>', { 'class': 'card' }).append(
      $('<div/>', { 'class': 'content' }).append(
        $('<div/>', { 'class': 'front' }).append(
          $('<img/>', { 'class': 'card_profile_pic', 'src': i_member.profilePicture, alt: "profile picture" })
        )
        .append(
          $('<div/>', { 'class': 'card_details' }).append(
            $('<h1/>', { 'class': 'name_title' }).append(i_member.name)
          )
          .append('<p/>', { 'class': 'description' }).append(i_member.position)
        )
      )
      .append(
        $('<div/>', { 'class': 'back' }).append(
          $('<div/>').append(
            $('<a/>', { 'href': 'mailto:' + i_member.email }).append(i_member.email)
          )
        )
        .append(
          $('<a/>', { 'href': 'mailto:' + i_member.email }).append('<img src="img/email.png" alt="">')
        )
      )
    );
    $(".members:first").append(txt);
  }

});

