// 메뉴 호버시
$(function () {
	$('.depth1').hover(
		function () {
			$(this)
				.find('.depth2')
				.stop()
				.slideDown()
		},
		function () {
			$(this)
				.find('.depth2')
				.stop()
				.slideUp()
		}
	)
})



// 이미지 슬라이드
$(function () {
	$('.slider li')
		.eq(0)
		.siblings()
		.css({left: '-1200px'})

	var slideImg = 0;
	setInterval(function () {
		if (slideImg < 2) {
			slideImg++;
		} else {
			slideImg = 0;
		}
		$('.slider li')
			.eq(slideImg)
			.siblings()
			.animate({left: '-1200px'},200),
			$('.slider li')
			.eq(slideImg)
			.animate({left: '0px'},200)

			console.log(slideImg)
	},3000)

})



// 탭 메뉴 notice 클릭시

$(function(){
	$('.notice-btn').click(
		function(){
			$('#notice')
			.addClass('on')
			$('.notice-btn')
			.addClass('on')
			$('#gallery')
			.removeClass('on')
			$('.gallery-btn')
			.removeClass('on')
		}
	)
})


// 탭 메뉴 gallery 클릭시

$(function(){
	$('.gallery-btn').click(
		function(){
			$('#gallery')
			.addClass('on')
			$('.gallery-btn')
			.addClass('on')
			$('#notice')
			.removeClass('on')
			$('.notice-btn')
			.removeClass('on')
		}
	)
})



// 모달창 메뉴 누를 시

$(function(){
	$('.click-modal').click(
		function(){
			$('.modal')
			.addClass('on')
		}
	)
})

// 모달창 닫기 버튼 누를 시

$(function(){
	$('.close').click(
		function(){
			$('.modal')
			.removeClass('on')
		}
	)
})