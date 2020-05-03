<template>
    <div class="head">
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
			<router-link class="navbar-brand" to="/">个人组学数据库</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<ul class="navbar-nav mr-auto"></ul>
				<span class="navbar-text">
				    <ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<router-link class="nav-link" to="/">主页 <span class="sr-only">(current)</span></router-link>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">帮助</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="">联系我们</a>
						</li>

					</ul>
				</span>
			</div>
		</nav>
	</div>
</template>

<script>

</script>

<style src='../../src/css/bootstrap.min.css'></style>

<style scoped>
.bg-dark {/*This part is for nav*/
	background-color:darkslategray !important;
	font-size: 15px;
	height: 50px;
}
</style>