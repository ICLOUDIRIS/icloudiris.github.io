var OriginTitile = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/avatar.gif");
         document.title = ' ( ఠൠఠ )ﾉ隐身' ;
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 来啦~' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
 });