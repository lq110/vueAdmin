<template>
	<div>
		<div class="fl">
			<div style="margin-top: -15px;line-height: 5;text-align: left;">
				<i class="el-icon-s-fold" @click="handleClick"></i>
			</div>
			<!-- 面包屑导航 -->
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: routes.path }">{{routes.name}}</el-breadcrumb-item>
				<el-breadcrumb-item
					v-if="routes.children"
					:to="{ path: routes.children.path }"
				>{{routes.children.name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>

		<!-- yh -->
		<div>
			<el-dropdown>
				<i class="el-icon-setting" style="margin-right: 15px"></i>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item>查看</el-dropdown-item>
					<el-dropdown-item>新增</el-dropdown-item>
					<!-- events.native:强制绑定原生事件 -->
					<el-dropdown-item @click.native="outPut">退出登陆</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<span>{{ user.username }}</span>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import { loginApi } from '../../api/index'
import NavList from '../../router/sideNav'
export default {
	name: 'Index',
	computed: {
		...mapState(['user']),
		routes() {
			const path = this.$route.path
			// 数据只要放到vue实例上，就会被双向绑定；
			const sideNav = JSON.parse(JSON.stringify(NavList.sideNav))
			const data = sideNav.find(item => {
				// 有没有二级
				if (item.children && item.children.length) {
					const data = item.children.find(key => key.path === path)
					if (data) {
						return data
					}
				}
				// 一级的
				if (item.path === path) {
					delete item.children
					return item
				}
			})
			// 给返回值做判断---如果有children，需要将子级多余的删除掉
			if (data.children) {
				const item = data.children.find(item => item.path === path)
				data.children = item
			}
			// console.log(data)
			return data
		}
	},
	methods: {
		...mapMutations(['setCollapse']),
		...mapActions(['outPutAction']),
		handleClick() {
			this.setCollapse()
		},
		outPut() {
			this.$alert('您确定要退出账户吗？', '退出提示', {
				confirmButtonText: '确定',
				callback: action => {
					// 请求一个退出登陆的接口吧；
					const { uid, token } = this.user
					this.outPutAction({ uid, token })
					// this.$message({
					//   type: "info",
					//   message: `action: ${action}`
					// });
				}
			})
		}
	}
}
</script>

<style></style>
