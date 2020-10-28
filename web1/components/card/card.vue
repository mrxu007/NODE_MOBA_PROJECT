<template>
	<view class="card">
		<!-- header -->
			<view class="card">
				<view class="card-header">
					<span :class="'iconfont '+ icon"></span>
					<view class="title">
						{{title}}
					</view>
					<span class="iconfont icongengduo more"></span>
				</view>
			</view>
		<!-- body -->
			<slot name="body"></slot>
	</view>
</template>

<script>
	export default {
		props:{
			icon: {
				type: String,
				default: 'iconquanbuxinwen'
			},
			title: {
				type: String,
				default: '新闻资讯'
			}
		},
		data() {
			return {
			};
		}
	}
</script>
<style lang="scss" scoped>
.card {
	margin-top: 30rpx;
	background: white;
	.card-header {
		display: flex;
		height: 100rpx;
		line-height: 100rpx;
		padding-left:40rpx;
		border-bottom: 1rpx solid #C8C7CC;
		.title {
			font-weight: bold;
			font-size: 30rpx;
		}
		.iconfont {
			padding-right: 10rpx;
			&.more {
				flex-grow: 1;
				text-align: right;
				font-size: 60rpx;
				color: #808080;
			}
		}
	}
}
</style>
