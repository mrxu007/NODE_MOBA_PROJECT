<template>
	<view class="home">
		<!-- 游戏下载 -->
		<down-load></down-load>
		<!-- swiper -->
		<swiper :autoplay="autoplay" :circular="circular" :duration="duration" :indicator-dots="indicatorDots">
			<swiper-item><image src="../../static/image/swiperImg/swi01.jpeg" class="swiper_image"></image></swiper-item>
			<swiper-item><image src="../../static/image/swiperImg/swi02.jpeg" class="swiper_image"></image></swiper-item>
			<swiper-item><image src="../../static/image/swiperImg/swi03.jpg" class="swiper_image"></image></swiper-item>
			<swiper-item><image src="../../static/image/swiperImg/swi04.jpeg" class="swiper_image"></image></swiper-item>
		</swiper>
		<!-- 中间导航 -->
		<view class="mid_wrap">
			<!-- 导航 -->
			<view class="navigation_wrap">
				<view v-for="(item, index) in sprite" :key="index" class="nav_item">
					<i :class="'sprite sprite_' + item.name"></i>
					<text class="text">爆料站</text>
				</view>
			</view>
			<!-- 收起按钮 -->
			<view class="up" @click="upDownData">
				<i class="sprite sprite_up"></i>
				<span class="text" v-if="sprite.length <= 4">展开</span>
				<span class="text" v-else>收起</span>
			</view>
		</view>
		<card-list icon="iconquanbuxinwen" title="新闻资讯">
			<view slot="body">
				<nav-component :navData="newsData" :isFlex="true" :bgnormal="true" @selectIndex="selectNewsIndex" :changeIndexAfter="changeNewsIndexAfter"></nav-component>
				<swiper :current.sync="swiper_current_news" @change="changeNewsIndex">
					<swiper-item v-for="(m, index) in 5" :key="index">
						<view v-for="(m, index) in 5" class="news_info" :key="index">
							<span class="news_tag">[新闻]</span>
							<span class="news_title">夏日炎炎有你真甜啊</span>
							<span class="news_date">06/2020</span>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</card-list>
		<card-list icon="iconquanbuxinwen" title="英雄信息">
			<view slot="body">
				<nav-component :navData="newsData" :isFlex="true" :bgnormal="true" @selectIndex="selectHeroIndex" :changeIndexAfter="changeHeroIndexAfter"></nav-component>
				<swiper :current.sync="swiper_current_hero" @change="changeHeroIndex">
					<swiper-item v-for="(m, index) in 5" :key="index">
						<view v-for="(m, index) in 5" class="news_info" :key="index">
							<span class="news_tag">[新闻]</span>
							<span class="news_title">夏日炎炎有你真甜啊</span>
							<span class="news_date">06/2020</span>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</card-list>
	</view>
</template>

<script>
import DownLoad from '../../components/download/download.vue';
import NavComponent from '../../components/navigation/navigation.vue';
import CardList from '../../components/card/card.vue';
export default {
	components: {
		DownLoad,
		NavComponent,
		CardList
	},
	data() {
		return {
			autoplay: true,
			circular: true,
			indicatorDots: true,
			duration: 300,
			spliceData: [],
			swiper_current_hero: 0,
			swiper_current_news: 0,
			changeNewsIndexAfter: 0,
			changeHeroIndexAfter: 0,
			newsData: [
				{
					name: '热门'
				},
				{
					name: '新闻'
				},
				{
					name: '公告'
				},
				{
					name: '活动'
				},
				{
					name: '赛事'
				}
			],
			sprite: [
				{
					name: 'news'
				},
				{
					name: 'story'
				},
				{
					name: 'shopping'
				},
				{
					name: 'free'
				},
				{
					name: 'newperson'
				},
				{
					name: 'chuan'
				},
				{
					name: 'chuan'
				},
				{
					name: 'yingdi'
				},
				{
					name: 'gongzhong'
				},
				{
					name: 'release'
				},
				{
					name: 'envir'
				},
				{
					name: 'wangzhe'
				}
			]
		};
	},
	onLoad() {
		// this.fetchData();
	},
	computed: {},
	methods: {
		// async fetchData() {
		// 	const res = await this.$ajax.get('/crud/categories/list')
		// 	console.log(res);
		// },
		// 点击收起下拉
		upDownData() {
			// console.log('点击了')
			if (this.sprite.length > 4) {
				// console.log('收起')
				// this.spliceData
				this.spliceData = [];
				this.spliceData.push(...this.sprite.splice(4));
			} else {
				// console.log('展开')
				this.sprite.push(...this.spliceData);
			}
		},
		// selectIndex
		selectNewsIndex(index) {
			// console.log('收到子组件index', index);
			this.$nextTick(() => {
				this.swiper_current_news = index;
			});
		},
		selectHeroIndex(index) {
			// console.log('收到子组件index', index);
			this.$nextTick(() => {
				this.swiper_current_hero = index;
			});
		},
		// 滑块改变
		changeHeroIndex(e) {
			// console.log('父组件传递index', e.detail.current);
			this.$nextTick(() => {
				if ((e.detail.source = 'touch')) {
					this.changeHeroIndexAfter = e.detail.current;
				}
			});
		},
		changeNewsIndex(e) {
			// console.log('父组件传递index', e.detail.current);
			this.$nextTick(() => {
				if ((e.detail.source = 'touch')) {
					this.changeNewsIndexAfter = e.detail.current;
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	background: #ededed;
}

.swiper_image {
	height: 100%;
	width: 100%;
}
.mid_wrap {
	.navigation_wrap {
		//
		padding-top: 40rpx;
		box-shadow: 0 1rpx 1px #ededed;
		margin-top: 30rpx;
		color: #999999;
		font-size: 25rpx;
		background: white;
		// text-align: center;
		align-content: center;
		display: flex;
		flex-wrap: wrap;
		.nav_item {
			// text-align:center;
			box-sizing: border-box;
			width: 25%;
			margin-bottom: 40rpx;
			display: flex;
			// text-align: center ;
			align-items: center;
			flex-direction: column;
			border-left: 1px solid #c0c0c0;
			&:nth-child(4n + 1) {
				border-left: none;
			}
			.text {
				margin-top: 10rpx;
			}
		}
	}
	.up {
		padding-bottom: 20rpx;
		background: white;
		text-align: center;
		font-size: 26rpx;
		.text {
			margin-left: 10rpx;
			display: inline-block;
		}
	}
}

// sprite 精灵图  自动定位精灵图网址，www.spritecow.com
.sprite {
	background: url(http://game.gtimg.cn/images/yxzj/m/m201706/images/bg/index.png) no-repeat 0 0;
	display: inline-block;
	&.sprite_news {
		background-size: 750rpx 910rpx;
		width: 46rpx;
		height: 40rpx;
		background-position: 63.546% 15.517%;
	}
	&.sprite_story {
		width: 46rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 90.483% 15.614%;
	}
	&.sprite_shopping {
		width: 38rpx;
		height: 44rpx;
		background-size: 750rpx 910rpx;
		background-position: 36.746% 0.924%;
	}
	&.sprite_free {
		width: 40rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 10.408% 15.517%;
	}
	&.sprite_newperson {
		width: 40rpx;
		height: 42rpx;
		background-size: 750rpx 910rpx;
		background-position: 89.733% 1.266%;
	}
	&.sprite_chuan {
		width: 48rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 36.467% 15.287%;
	}
	&.sprite_yingdi {
		width: 48rpx;
		height: 48rpx;
		background-size: 750rpx 910rpx;
		background-position: 63.3% 0.927%;
	}
	&.sprite_gongzhong {
		width: 48rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 0 96.207%;
	}
	&.sprite_release {
		width: 48rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 0 96.207%;
	}
	&.sprite_envir {
		width: 48rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 0 96.207%;
	}
	&.sprite_wangzhe {
		width: 48rpx;
		height: 40rpx;
		background-size: 750rpx 910rpx;
		background-position: 0 96.207%;
	}
	&.sprite_up {
		background-position: 38.577% 52.076%;
		background-size: 750rpx 910rpx;
		width: 20rpx;
		height: 20rpx;
	}
}

.news_info {
	display: flex;
	margin: 20rpx;
	height: 36rpx;
	line-height: 36rpx;
	.news_title {
		font-size: 30rpx;
		margin-left: 8rpx;
	}
	.news_date {
		flex-grow: 1;
		// display: inline-block;
		text-align: right;
		font-size: 24rpx;
		color: #555555;
	}
}
</style>
