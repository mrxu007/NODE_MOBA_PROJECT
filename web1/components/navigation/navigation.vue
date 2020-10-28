<template>
	<view :class="{nav: true,isFlex: isFlex, bgnormal: bgnormal, bgreverse: bgreverse}" :style="'justify-content:'+align">
		<view v-for="(item, index) in navData" :key="index" @click="selectTag(index)" :class="{active: currentIndex === index}">
		{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			navData: {
				type: Array,
				default() {
					return {
					}
				}
			},
			changeIndexAfter: {
				type: Number,
				default: 0
			},
			isFlex: {
				type: Boolean,
				default: true
			},
			align: {
				type: String,
				default: 'space-between'
			},
			bgnormal: {
				type: Boolean,
				default: false
			},
			bgreverse: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				currentIndex: 0
			};
		},
		watch: {
			changeIndexAfter(newValue, oldValue) {
				// console.log(newValue, oldValue)
				this.currentIndex = newValue;
			}
		},
		methods: {
			selectTag(index) {
				this.currentIndex = index
				this.$emit('selectIndex', index);
			}
		}
	}
</script>

<style lang="scss" scoped>
.nav {
	&.isFlex {
		display: flex;
	}
	&.bgnormal {
		color: #555555;
		background: white;
		.active {
			color: #DB9E3F;
			border-bottom: 7rpx solid #DB9E3F;
		}
	}
	&.bgreverse {
		color: #FFFFFF;
		background: #DB9E3F;
		.active {
			color: #FFFFFF;
			border-bottom: 7rpx solid #FFFFFF;
		}
	}
	// margin: 30rpx;
	padding: 30rpx;
	font-size: 30rpx;
	font-weight: 400;
}

</style>
