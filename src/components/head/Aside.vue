<template>
	<!-- 左侧导航部分 -->
	<!-- 折叠导航 -->
	<el-menu
		unique-opened
		:default-openeds="[]"
		default-active="1"
		class="el-menu-vertical-demo"
		:collapse="isCollapse"
		router
		@open="open"
	>
		<!-- 首页嵌套的导航 -->
		<template v-for="item in navList">
			<!-- 二级的嵌套菜单 -->
			<el-submenu :index="item.path" v-if="item.children" :key="item.name">
				<template slot="title">
					<i :class="item.icon"></i>
					<span slot="title">{{ item.name }}</span>
				</template>
				<el-menu-item-group>
					<el-menu-item
						:index="child.path"
						v-for="child in item.children"
						:key="child.name"
					>{{ child.name }}</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<!-- 一级的菜单 -->
			<!-- 所有的都可以看见的 -->
			<el-menu-item
				:index="item.path"
				v-if="item.path !== '/account' && item.path !== '/'"
				:key="item.name"
			>
				<i :class="item.icon"></i>
				<span slot="title">{{ item.name }}</span>
			</el-menu-item>
			<!-- 账户管理 -->
			<el-menu-item
				:index="item.path"
				v-if="
          item.path === '/account' && (item.role === 'all' || user.role === '1')
        "
				:key="item.name"
			>
				<i :class="item.icon"></i>
				<span slot="title">{{ item.name }}</span>
			</el-menu-item>
		</template>
		<!-- template -->
	</el-menu>
</template>

<script>
import { mapState } from 'vuex'
import NavData from '../../router/sideNav'
export default {
	name: 'Aside',
	data() {
		return {
			navList: NavData.sideNav
		}
	},
	computed: {
		...mapState(['isCollapse', 'user'])
	},
	methods: {
		// 激活折叠菜单
		open(path) {
			// 防止重新进入
			if (this.$route.path !== '/') {
				this.$router.replace(path)
			}
		}
	}
}
</script>

<style>
/* 只有当展开的时候才宽度200 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 200px;
}
.el-menu-vertical-demo {
	min-height: 98vh;
}
</style>
