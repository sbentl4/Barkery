var ycsdone;
function geovisit()
{
  var z;
  if (ycsdone)
    return;
  z="&r="+escape(document.referrer);
  z=z+"&b="+escape(navigator.appName+" "+navigator.appVersion);
  w=parseFloat(navigator.appVersion);
  if (w > 2.0) {
    z=z+"&s="+screen.width+"x"+screen.height;
    z=z+"&o="+navigator.platform;
    v="1.2";
    if (navigator.appName != "Netscape") {
      z=z+"&c="+screen.colorDepth;
    } else {
      z=z+"&c="+screen.pixelDepth
    }
    z=z+"&j="+navigator.javaEnabled();
  } else {
    v=1.0;
  }
  z=z+"&v="+v;
  document.writeln("<img border=\"0\" style=\"display:none\" src=\"http://visit.geocities.com/visit.gif?"+z+"\">");
  ycsdone=1;
}

/*
     FILE ARCHIVED ON 17:38:41 Oct 27, 2009 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:26:09 Jan 09, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 38.682 (3)
  esindex: 0.007
  captures_list: 170.193
  CDXLines.iter: 30.639 (3)
  PetaboxLoader3.datanode: 39.822 (4)
  exclusion.robots: 0.2
  exclusion.robots.policy: 0.185
  RedisCDXSource: 1.839
  PetaboxLoader3.resolve: 16.474
  load_resource: 32.572
*/