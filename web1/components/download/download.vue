<template>
	<view>
		<view class="header_wrap">
			<view class="left_content">
				<image src="../../static/image/log.jpg"></image>
			</view>	
			<view class="center_content">
				<view class="clcontent">
					王者荣耀
				</view>
				<view class="crcontent">
					团战成就更多
				</view>
			</view>
			<view class="right_content">
				<button type="button" class="h_btn" size="mini">立即下载</button>
			</view>
				
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" >
.header_wrap{
	display: flex;
	background: black;
	color: #C8C7CC;
	font-size: 30rpx;
	height: 90rpx;
	line-height: 45rpx;
	.left_content {
		image {
			width:60rpx;
			height: 60rpx;
			// display: block;
			padding: 15rpx;
		}
	}
	.center_content {
		padding: 5rpx 5rpx 0 5rpx;
		flex-grow: 1;
		.crcontent {
			font-size: 20rpx;
			color: gray;
		}
	}
	.right_content {
		width: 200rpx;
		height: 90rpx;
		line-height: 90rpx;
		margin-right: 0;
		.h_btn {
			background: orange;
			border: none;
			font-size: 25rpx;
		}
	}
}
</style>
