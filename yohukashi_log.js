// 要素
const mc1_kagen    = new Audio('./music/下弦の月.mp3');
const mc2_tsukiyo  = new Audio('./music/プレギエーラの月夜に.mp3');
const mc3_inori    = new Audio('./music/祈りのヴィオレット.mp3');
const mc4_hisui    = new Audio('./music/翡翠のカヴィリエーレ.mp3');
const mc5_uruwashi = new Audio('./music/麗しきセデュース.mp3');
const mc6_mikkyou  = new Audio('./music/密教の首飾り.mp3');
const mc7_zaika    = new Audio('./music/罪過に契約の血を.mp3');
const mc8_gessyoku = new Audio('./music/月蝕のヴァニタス.mp3');
const mc9_tugunai  = new Audio('./music/EUPHORIA_償いのレクイエム.mp3');

const play1 = document.getElementById('play1');
const play2 = document.getElementById('play2');
const play3 = document.getElementById('play3');
const play4 = document.getElementById('play4');
const play5 = document.getElementById('play5');
const play6 = document.getElementById('play6');
const play7 = document.getElementById('play7');
const play8 = document.getElementById('play8');
const play9 = document.getElementById('play9');

// 再生中の音楽
var music = mc1_kagen;
var play;

// 再生・停止
function maya_music(plID,mcNO) {
    if (play !== plID) {
        if (!music.paused) {
            play.innerHTML = '<i class="fa-solid fa-music fa-sm"></i>';
            music.pause();
        }
        play = plID;
        music = mcNO;
        music.currentTime = 0;
    }

    if (!music.paused) {
        play.innerHTML = '<i class="fa-solid fa-music fa-sm"></i>';
        music.pause();
    } else {
        play.innerHTML = '<i class="fa-solid fa-pause fa-sm"></i>';
        music.play();
    }
};

// 再生ボタン
function playMc1() {maya_music(play1,mc1_kagen);};
function playMc2() {maya_music(play2,mc2_tsukiyo);};
function playMc3() {maya_music(play3,mc3_inori);};
function playMc4() {maya_music(play4,mc4_hisui);};
function playMc5() {maya_music(play5,mc5_uruwashi);};
function playMc6() {maya_music(play6,mc6_mikkyou);};
function playMc7() {maya_music(play7,mc7_zaika);};
function playMc8() {maya_music(play8,mc8_gessyoku);};
function playMc9() {maya_music(play9,mc9_tugunai);};
// play1.addEventListener('click',function() {maya_music(play1,mc1_kagen);});
// play2.addEventListener('click',function() {maya_music(play2,mc2_tsukiyo);});
// play3.addEventListener('click',function() {maya_music(play3,mc3_inori);});
// play4.addEventListener('click',function() {maya_music(play4,mc4_hisui);});
// play5.addEventListener('click',function() {maya_music(play5,mc5_uruwashi);});
// play6.addEventListener('click',function() {maya_music(play6,mc6_mikkyou);});
// play7.addEventListener('click',function() {maya_music(play7,mc7_zaika);});
// play8.addEventListener('click',function() {maya_music(play8,mc8_gessyoku);});
// play9.addEventListener('click',function() {maya_music(play9,mc9_tugunai);});

// function play1() {
//     maya_music();
//     if (play !== document.getElementById('play1')) {
//         play = document.getElementById('play1');
//         music = mc1_kagen;
//         maya_music();
//     }
// };

// /*++++ オーディオ要素のリスト ++++*/
// var audios = document.querySelectorAll( "audio" );

// /*++++ イベント ++++*/
// for(var i=0;i<audios.length;i++){
// audios[ i ].addEventListener( "play", function(){
// for(var j=0;j<audios.length;j++){
// if( audios[ j ]!=this ){ audios[ j ].pause() }
// }
// }, false );
// }

// ページトップボタン
// スクロールした際の動きを関数でまとめる
function pagetopAnime() {
	var scroll = $(window).scrollTop();
	if (scroll >= 600){//上から200pxスクロールしたら
		$('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
		$('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
	}else{
		if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
			$('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
			$('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
		}
	}
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	pagetopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});

// ログ
// スクロールすると表示される
$windowWidth = window.innerWidth;
$breakPointA = 768;

isMobileSize = ($windowWidth < $breakPointA);
isPcSize = ($windowWidth > $breakPointA);


if (isPcSize) {
    //PCの場合

    //visibility:byousha
    $(function () {
        $(window).scroll(function () {
            $(".byousha").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).addClass('LtoR-early');
                }
            });
        });
    });

    //visibility:left
    $(function () {
        $(window).scroll(function () {
            $(".left").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    //visibility:right
    $(function () {
        $(window).scroll(function () {
            $(".right").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 6) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('RtoL-delay');
                    $(this).children('p').addClass('RtoL');
                }
            });
        });
    });


    function opacityON() {
        $(".log div").css({ opacity: "0" });
        var end = $(window).height();
        var count = 0;

        $(".log div").each(function () {
            var position = $(this).offset().top;
            if (position <= end) {
                count++
            }
        });
        for (i = 0; i <= count - 2; i++) {
            var classname = $('.log div').eq(i).attr('class');
            if (classname.indexOf('byousha') !== -1) {
                $('.log div').eq(i).addClass('LtoR-early');
            }
            else {
                $('.log div').eq(i).css({ opacity: "1" });
                if (classname.indexOf('left') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else if (classname.indexOf('right') !== -1) {
                    $('.log div').eq(i).children('span').addClass('RtoL-delay');
                    $('.log div').eq(i).children('p').addClass('RtoL');
                }
                else {
                    $('.log div').eq(i).css({ 'opacity': '1' });
                }
            }
        }
    }
    opacityON();

}

else if (isMobileSize) {
    //スマホ用

    //visibility:byousha
    $(function () {
        $(window).scroll(function () {
            $(".byousha").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).addClass('LtoR-early');
                }
            });
        });
    });


    //visibility:left
    $(function () {
        $(window).scroll(function () {
            $(".left").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    //visibility:right
    $(function () {
        $(window).scroll(function () {
            $(".right").each(function () {
                var ePos = $(this).offset().top;
                var scroll = $(window).scrollTop();
                var windowHeight = $(window).height();
                if (scroll > ePos - windowHeight + windowHeight / 10) {
                    $(this).children('span').addClass('hide');
                    $(this).children('p').addClass('hide');
                    $(this).css({ 'opacity': '1' });
                    $(this).children('span').css({ 'opacity': '0' });
                    $(this).children('p').css({ 'opacity': '0' });
                    $(this).children('span').removeClass('hide');
                    $(this).children('p').removeClass('hide');
                    $(this).children('span').addClass('LtoR-delay');
                    $(this).children('p').addClass('LtoR');
                }
            });
        });
    });

    function opacityON() {
        $(".log div").css({ opacity: "0" });
        var end = $(window).height();
        var count = 0;

        $(".log div").each(function () {
            var position = $(this).offset().top;
            if (position <= end) {
                count++
            }
        });
        for (i = 0; i <= count - 2; i++) {
            var classname = $('.log div').eq(i).attr('class');
            if (classname.indexOf('byousha') !== -1) {
                $('.log div').eq(i).addClass('LtoR-early');
            }
            else {
                $('.log div').eq(i).css({ opacity: "1" });
                if (classname.indexOf('left') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else if (classname.indexOf('right') !== -1) {
                    $('.log div').eq(i).children('span').addClass('LtoR-delay');
                    $('.log div').eq(i).children('p').addClass('LtoR');
                }
                else {
                    $('.log div').eq(i).css({ 'opacity': '1' });
                }
            }
        }
    }

    $(function() {
        $('body').attr('ontouchstart', '');
    });

    opacityON();

};
