/**
 * @author Oliver Castelblanco
 */
var anchoMin = true;
var anchoMax = false;
ajustaNav('body');
$(window).resize(function(){
    ajustaNav('body');
});
function ajustaNav(obj) {
    if($(obj).width() < 768 && anchoMin){
        $('.btn-group-lg .btn.btn-primary').addClass('navbar-btn');
        $('.btn-group-lg .btn.btn-primary').wrap('<li></li>');
        $('.btn-group-lg').wrapInner('<ul class="nav navbar-nav grande"></ul>');
        //-
        $('.btn-group-sm .btn.btn-default').wrap('<li></li>');
        $('.btn-group-sm .btn.btn-default').removeClass('btn btn-default');
        $('.btn-group-sm').wrapInner('<ul class="nav navbar-nav peque"></ul>');
        //-
        $('.nav.navbar-nav').unwrap();
        anchoMin = false;
        anchoMax = true;
    }
    if($(obj).width() >= 768 && anchoMax){
        $('.btn.btn-primary.navbar-btn').unwrap();
        $('.btn.btn-primary.navbar-btn').removeClass('navbar-btn');
        $('.nav.navbar-nav.grande').wrapInner('<div class="btn-group btn-group-justified btn-group-lg"></div>');
        //-
        $('.nav.navbar-nav.peque a').unwrap();
        $('.nav.navbar-nav.peque a').addClass('btn btn-default');
        $('.nav.navbar-nav.peque').wrapInner('<div class="btn-group btn-group-justified btn-group-sm"></div>');
        //-
        $('.btn-group.btn-group-justified').unwrap();
        anchoMin = true;
        anchoMax = false;
    }
}
