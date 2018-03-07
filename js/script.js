/*------------------------------------------
グローバルナビゲーション
------------------------------------------*/
$(function(){
	//自己紹介コンテンツ 非表示
	$('.profile').hide();
	
	//ナビゲーション 「PROFILE」をクリック時の処理
	$('.profile_btn').click(function(){
		//ナビゲーション内のclass削除
		$('.work_btn').removeClass("current");
		//ナビゲーション内のclass追加
		$('.profile_btn').addClass("current");
		
		//制作一覧 フェードアウト
		$('.work').fadeOut();
		//プロフィール フェードイン
		$('.profile').fadeIn();
	});
	
	//ナビゲーション「WORKS」クリック時の処理
	$('.work_btn').click(function(){
		//ナビゲーション内のclass削除
		$('.profile_btn').removeClass("current");
		//ナビゲーション内のclass追加
		$('.work_btn').addClass("current");
		
		//プロフィール フェードアウト
		$('.profile').fadeOut();
		//制作一覧 フェードイン
		$('.work').fadeIn();
	});
	
	
});

/*------------------------------------------
画像アニメーション
------------------------------------------*/
setTimeout('rect()'); //アニメーションを実行

function rect() {
	$('.rect').animate({
		'top': '-=10px'
	}, 800).animate({
		'top': '+=10px'
	}, 800);
	setTimeout('rect()', 1600); //アニメーションを繰り返す間隔
}

/*------------------------------------------
ヘッダー PC/SP切り替え
------------------------------------------*/
(function($) {
    $(function() {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);