// JavaScript Document

/* 按钮跟随窗体滚动 */
window.onscroll = function() {
	var top_btn = document.getElementById("top");		// 返回按钮
	// 判断网页当前是否为最顶端
	if (document.documentElement.scrollTop > 0 || document.body.scrollTop > 0) {
		top_btn.style.display = "block";
	} else {
		top_btn.style.display = "none";
	}
	top_btn.style.marginTop = 500 + document.documentElement.scrollTop + document.body.scrollTop + "px";		// 累加外边距
}

/* 滚动返回页面顶端 */
function scroll_return_top() {
	window.scrollBy(0, -10);		// 页面滚动条递减
	var scroll_time = setTimeout("scroll_return_top()", 1);		// 每 1 毫秒调用一次本方法
	// 判断页面是否已返回最顶端
	if (document.documentElement.scrollTop == 0 && document.body.scrollTop == 0) {
		clearTimeout(scroll_time);
	}
}

/* 鼠标悬浮改变边框色 */
function change_border_color(id_1, id_2, id_3) {
	document.getElementById(id_1).style.border = "0px";		// 隐藏内边框		
	document.getElementById(id_2).style.borderColor = "#AF1258";		// 改变外边框颜色
	document.getElementById(id_3).style.marginLeft = "12px";
}

/* 鼠标离开恢复边框色 */
function recover_border_color(id_1, id_2, id_3) {
	document.getElementById(id_1).style.border = "1px solid";		// 显示内边框
	// 恢复颜色
	document.getElementById(id_1).style.borderColor = "#CCC";	
	document.getElementById(id_2).style.borderColor = "#CCC";	
	document.getElementById(id_3).style.marginLeft = "10px";
}

/* 鼠标进入图片时去掉外边框 */
function over_main_img() {
	var imgs = document.getElementById("main").getElementsByTagName("img");		// 图片数组
	// 循环绑定事件
	for (var i = 0; i < imgs.length; i++) {
		imgs.item(i).onmouseover = function() {
			
		}
	}
}