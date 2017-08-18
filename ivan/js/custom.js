// VARIABELEN

//------SEARCH------
var searchbox = document.getElementsByClassName("search")[1];
var expandbox = document.getElementsByClassName("expandbox")[0];
var scheck = document.getElementsByClassName("scheck")[0];
//------------------

//-------FORM-------
var sub_form = document.getElementById("form_class");
var formclass = "#form_class";
var edit_btn = document.getElementsByClassName("edit")[0];
var wrap = document.getElementsByClassName("wrap")[0];
var sub_btn = document.getElementsByClassName('submit_btn');

//---INFO CLICK PERSON
var person_info = document.getElementsByClassName("person_info")[0];
var info_click = document.getElementsByClassName("info_click")[0];

//---HOVER HELP---
// var help_btn = document.getElementsByClassName("rad")[0];
var box = document.getElementsByClassName("box")[0];
var close = document.getElementsByClassName("close")[0];

// SEARCH
searchbox.addEventListener("click", function() {
  if (expandbox.classList.contains("searchClass")) {
    scheck.className = "hide";
    expandbox.classList.remove("searchClass");
  } else {
    expandbox.className = "searchClass";
    scheck.className = "show";
  }
});

//----FORM VALIDATION-----
function validate_form(e) {
  var form_is_valid = true;
  var $title = $("#fld-title");
  var $target = $("#fld-targetgroup");
  var $category = $("#fld-category");
  var $enddate = $("#fld-enddate");
  var $message = $("#fld-msg");

  // TITLE
  if ($title.val().trim() === "") {
    form_is_valid = false;
    $title.addClass("req_red");
    $title.removeClass("ok_green");
  } else {
    $title.removeClass("req_red");
    $title.addClass("ok_green");
  }

  // TARGET
  if ($target.val().trim() === "") {
    form_is_valid = false;
    $target.addClass("req_red");
    $target.removeClass("ok_green");
  } else {
    $target.removeClass("req_red");
    $target.addClass("ok_green");
  }

  // CATEGORY
  if ($category.val().trim() === "") {
    form_is_valid = false;
    $category.addClass("req_red");
    $category.removeClass("ok_green");
  } else {
    $category.removeClass("req_red");
    $category.addClass("ok_green");
  }

  // ENDDATE
  if ($enddate.val().trim() === "") {
    form_is_valid = false;
    $enddate.addClass("req_red");
    $enddate.removeClass("ok_green");
  } else {
    $enddate.removeClass("req_red");
    $enddate.addClass("ok_green");
  }

  // MESSAGE
  if ($message.val().trim() === "") {
    form_is_valid = false;
    $message.addClass("req_red");
    $message.removeClass("ok_green");
  } else {
    $message.removeClass("req_red");
    $message.addClass("ok_green");
  }
  return form_is_valid;
}

//FORM SHOW & HIDE
if (edit_btn) {
  edit_btn.addEventListener("click", function() {
    if (wrap.classList.contains("active")) {
      wrap.classList.remove("active");
    } else {
      wrap.classList.add("active");
    }
  });
}
// INFO CLICK
if (info_click) {
  info_click.addEventListener("click", function() {
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block'
  });
}

//POPUP INFORMATION
info_click.addEventListener("click", function() {
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
});

//CLOSING ACTION
if (close) {
  close.addEventListener("click", function() {
    // alert("test");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none'
  })
}

// JQUERY mouse enters & leaves
$('.info_announcements').on('mouseenter mouseleave', function() {
  $('.box.announcements, .line.announcements').toggleClass('open');
});
$('.info_roosters').on('mouseenter mouseleave', function() {
  $('.box.roosters, .line.roosters').toggleClass('open');
});
$('.info_mail').on('mouseenter mouseleave', function() {
  $('.box.mail, .line.mail').toggleClass('open');
});
$('.info_blackboard').on('mouseenter mouseleave', function() {
  $('.box.blackboard, .line.blackboard').toggleClass('open');
});
$('.info_studentservice').on('mouseenter mouseleave', function() {
  $('.box.studentservice, .line.studentservice').toggleClass('open');
});

// SUBMIT FORM -> VALIDATION CHECK
$(document).ready(function() {
  $(formclass).submit(validate_form);
});