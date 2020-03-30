<template>
	<div id="app">
		<!-- ROUTER-VIEW显示的是不同路由地址加载不同的组件 -->
		<el-container v-if="$route.name !== 'login'" style="border: 1px solid #eee">
			<!-- 左侧 -->
			<el-aside width="auto">
				<Aside />
			</el-aside>
			<!-- 内容展示区 -->
			<el-container>
				<!-- 顶部区 -->
				<el-header style="text-align: right; font-size: 12px">
					<Head />
				</el-header>
				<!-- 中间内容区 -->
				<el-main>
					<router-view />
				</el-main>
			</el-container>
		</el-container>
		<router-view v-else />
	</div>
</template>
<script>
import Aside from './components/head/Aside'
import Head from './components/head/Index'
export default {
	name: 'App',
	components: { Aside, Head }
}
</script>
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
.el-header {
	background-color: #b3c0d1;
	color: #333;
	line-height: 60px;
}
@import url('./assets/index.css');
</style>
