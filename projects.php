<?php include 'header.php';?>

<style type="text/css">
	.greybk {
		background: grey;
	}
	.bg-1 {
    /* The image used */
    
    background-image: url("web-images/hero.jpg");
    /* Full height */
    min-height: 500px;
    height: 100%;
    /* Center and scale the image nicely */
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.row-eq-height {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.project-text {
	position: absolute;
	top: 50%;
	left: 0;
	transform: translate(0, -50%);
	width: 100%;
	text-align: center;
	letter-spacing: 1px;
	text-transform: uppercase;

}
</style>


<?php include 'nav.php';?>





<section>
	<div class="container-fluid top-Margin-lg" id="div1">
		<div class="container">
			<div class="row row-eq-height">
				<div class="col-md-6 bg-1">
					<p></p>
				</div>
				<div class="col p-3">
					<div class="project-text">
						<h1>Project Title Goes Here</h1>
						<div class="col-md-8 offset-md-2">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
							<a href="#" class="btn btn-secondary btn-sm">Learn More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="row row-eq-height">
				<div class="col p-3">
					<div class="project-text">
						<h1>Project Title Goes Here</h1>
						<div class="col-md-8 offset-md-2">
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
							<a href="#" class="btn btn-secondary btn-sm">Learn More</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 bg-1">
					<p></p>
				</div>
			</div>
		</div>
	</div>
</section>






<?php include 'footer.php';?>