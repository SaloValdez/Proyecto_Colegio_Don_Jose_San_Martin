<!--
function imprSelec(nombre)
{
  var ficha = document.getElementById(nombre);
  var ventimp = window.open('preceptorship.html', 'popimpr');
  ventimp.document.write( ficha.innerHTML );
  ventimp.document.close();
  ventimp.print( );
  ventimp.close();
}

function agregar(){
if (document.all)
window.external.AddFavorite(url,titulo)
}

function agregar(){
   if ((navigator.appName=="Microsoft Internet Explorer") && (parseInt(navigator.appVersion)>=4)) {
      var url="../index.html";
      var titulo="Colegio Alpamayo";
      window.external.AddFavorite(url,titulo);
   }
   else {
      if(navigator.appName == "Netscape")
         alert ("Presione Crtl+D para agregar este sitio en sus Bookmarks");
   }
}

//-->

<!--
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
//-->




(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "../../connect.facebook.net/es_LA/sdk.js#xfbml=1&appId=207837582589409&version=v2.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


window.console = window.console || function(t) {};
window.open = function(){ console.log('window.open is disabled.'); };
window.print = function(){ console.log('window.print is disabled.'); };
// Support hover state for mobile.
if (false) {
  window.ontouchstart = function(){};
}


if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage('resize', "*");
}






var ww = document.body.clientWidth;
$(document).ready(function () {
$('.nav li a').each(function () {
    if ($(this).next().length > 0) {
        $(this).addClass('parent');
    }
    ;
});
$('.toggleMenu').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.nav').toggle();
});
adjustMenu();
});
$(window).bind('resize orientationchange', function () {
ww = document.body.clientWidth;
adjustMenu();
});
var adjustMenu = function () {
if (ww < 959) {
    if (!$('.more')[0]) {
        $('<div class="more">&nbsp;</div>').insertBefore($('.parent'));
    }

    $('.toggleMenu').css('display', 'inline-block');
    if (!$('.toggleMenu').hasClass('active')) {
        $('.nav').hide();
    } else {
        $('.nav').show();
    }
    $('.nav li').unbind('mouseenter mouseleave');
    $('.nav li a.parent').unbind('click');
    $('.nav li .more').unbind('click').bind('click', function () {
        $(this).parent('li').toggleClass('hover');
    });
 $('.nav li .more2').unbind('click').bind('click', function () {
        $(this).parent('li').toggleClass('hover');
    });
 $('.nav li .more3').unbind('click').bind('click', function () {
        $(this).parent('li').toggleClass('hover');
    });

} else if (ww >= 959) {
    $('.more').remove();
$('.more2').show();
$('.more3').show();
    $('.toggleMenu').css('display', 'none');
    $('.nav').show();
    $('.nav li').removeClass('hover');
    $('.nav li a').unbind('click');
    $('.nav li').unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
        $(this).toggleClass('hover');
    });
}
};
