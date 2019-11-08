var a = document.querySelector('iframe');

// 定位导航栏再 找出有多少门课程
var c = document.querySelectorAll("ul.nav>li.top")[3].querySelectorAll("ul.sub>li").length;

status = false;

// callback

function b() {

if (status == "true")

return;

status = true;

if (c == 0) {

a.setAttribute('onload', "javascript:dyniframesize('iframeautoheight');");

a.contentDocument.getElementById("Button2").click();

alert("完成");

return;

}

var selects = a.contentDocument.querySelectorAll('table.datelist>tbody>tr>td>select');

for (var i = 0; i < selects.length; i++) {

selects[i].selectedIndex = 1

}

var index = Math.round(Math.random()*(selects.length - 1));

selects[index].selectedIndex = 2;

a.contentDocument.getElementById("Button1").click();

c--;

status = false;

}

a.setAttribute('onload', "javascript:dyniframesize('iframeautoheight');b();");

// start

b();
