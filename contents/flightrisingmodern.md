---
layout: master/base.njk
permalink: flightrisingmodern.html
title: Flight Rising Breeding Tool (Modern Breeds) | Nam Lemonade's Website
script: js/flight-rising-modern-scripts.js
---

<div class="col-12">
	<div class="content">
		<div class="content-content">
			<div class="text">
				<h1>Nam's Flight Rising Breeding Stats Checker</h1>
				<!-- <p><strong>This is a tool for modern breeds only. Ancients coming at some
						point.</strong></p> -->
				<p>Welcome! This is a simple breeding stats calculator for the online game Flight Rising! You are currently using the Modern version of the tool! The version for ancients will come at a later date!</p>
				<p>This tool was built with the goal of being mobile friendly and easy to use!</p>
				<p>I made it for myself, but please, feel free to use it! Linking back is not required, but would be very appreciated!</p>
				<p>If you want to report a bug, an edit to do or a new gene to add, please contact me on <a href="https://bsky.app/profile/nam.cervine.tech" target="_blank">Bluesky</a>, <a href="https://www1.flightrising.com/clan-profile/434329" target="_blank">Flight Rising</a> or by sending me an email at <a href="mailto:namconade@gmail.com">namconade@gmail.com</a>!</p>
				<p>Last updated: December 11th 2024</p>

				<div class="accordion" id="faq">
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button"
								data-bs-toggle="collapse" data-bs-target="#faqCollapse"
								aria-expanded="false" aria-controls="faqCollapse">
								FAQ
							</button>
						</h2>
						<div id="faqCollapse" class="accordion-collapse collapse"
							data-bs-parent="#faq">
							<div class="accordion-body">
								<p><strong>Will this be kept up-to-date?</strong></p>
								<p>Depends on how active I am! I made this for myself. In between life, my job, and my interest coming and going, I might not keep this 100% up-to-date, but I'll do my best. I also have wrist pains that I am working on treating. So, I try to reduce my time coding to give them a rest. Thank you for understanding!</p>

								<p><strong>When will ancients come?</strong></p>
								<p>To be honest, when I'm motivated enough ^^' This is a side-project for me. I'll get to it eventually though!</p>
								
								<p><strong>Any future projects / updates?</strong></p>
								<p>Well, first I want to make a version for ancients of course! And in the far future, I do want to take a crack at generating random offspring using links to the Scrying Workshop "Predict morphology" feature. I wouldn't be using the pictures link, since it would go against their policy on concurrent connections and damaging site stability. And hurting FR is not something I intend to do.</p>
							
								<p><strong>How did you make this?</strong></p>
								<p>This is entirely built in HTML, CSS and JS. I use a few libraries to make my work easier, but everything in managed in Javascript. Hey, if you're interested in seeing the code, my website's code is all on <a href="https://github.com/NamLemonade/namlemonade.neocities.org" target="_blank">my Github</a>!</p>

								<p><strong>Does this use content from the website? / Will this use content from the website?</strong></p>
								<p><strong>No</strong>. As per point 13 of the Conduct sections of the terms of use, we're not allowed to use the website's infrastructure on third party software. Everything here is hosted directly on my website, namlemonade.com. This is why you can't put your dragon's ID or link anywhere to add their icon, or why the (future) generator (will) only generate links, and not images. I would've probably abstained either way, if they wanted us to use it on third party platforms, they would've made some sort of API (which they don't have).</p>
							</div>
						</div>
					</div>
				</div>
				<div class="accordion mt-3" id="changelog">
					<div class="accordion-item">
						<h2 class="accordion-header">
							<button class="accordion-button collapsed" type="button"
								data-bs-toggle="collapse" data-bs-target="#changelogCollapse"
								aria-expanded="false" aria-controls="changelogCollapse">
								Changelog
							</button>
						</h2>
						<div id="changelogCollapse" class="accordion-collapse collapse"
							data-bs-parent="#changelog">
							<div class="accordion-body">
								<p><strong>December 11th 2024</strong></p>
								<p>Added Loam and Soil. Early findings lead to believe that they are Limited rarities. Will adjust as time goes on.</p>
								<p>I also changed some stuff from the FAQ and added the changelog section.</p>
								<hr>
								<p><strong>December 6th 2024</strong></p>
								<p>We are now online! Woohoo!</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="row justify-content-between">
				<div class="col-12 col-lg-6 p-3">
					<div class="parent-block block">
						<div class="block-head">
							<p>Parent 1</p>
						</div>
						<div class="block-content">
							<div class="row">
								<div class="col-12 p-3">
									<div class="form-group">
										<input type="text" id="parent-one-name" name="parent-one-name">
										<label for="parent-one-name">Name</label>
									</div>
								</div>
								<div class="col-12 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-specie"></label>
										<div class="inner-form-group">
											<select name="parent-one-specie" id="parent-one-specie">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-primary-color"></label>
										<div class="inner-form-group">
											<select name="parent-one-primary-color"
												id="parent-one-primary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-primary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-one-primary-gene"
												id="parent-one-primary-gene">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-secondary-color"></label>
										<div class="inner-form-group">
											<select name="parent-one-secondary-color"
												id="parent-one-secondary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-secondary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-one-secondary-gene"
												id="parent-one-secondary-gene">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-tertiary-color"></label>
										<div class="inner-form-group">
											<select name="parent-one-tertiary-color"
												id="parent-one-tertiary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-one-tertiary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-one-tertiary-gene"
												id="parent-one-tertiary-gene">
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-6 p-3">
					<div class="parent-block block">
						<div class="block-head">
							<p>Parent 2</p>
						</div>
						<div class="block-content">
							<div class="row">
								<div class="col-12 p-3">
									<div class="form-group">
										<input type="text" id="parent-two-name" name="parent-two-name">
										<label for="parent-two-name">Name</label>
									</div>
								</div>
								<div class="col-12 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-specie"></label>
										<div class="inner-form-group">
											<select name="parent-two-specie" id="parent-two-specie">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-primary-color"></label>
										<div class="inner-form-group">
											<select name="parent-two-primary-color"
												id="parent-two-primary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-primary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-two-primary-gene"
												id="parent-two-primary-gene">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-secondary-color"></label>
										<div class="inner-form-group">
											<select name="parent-two-secondary-color"
												id="parent-two-secondary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-secondary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-two-secondary-gene"
												id="parent-two-secondary-gene">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-tertiary-color"></label>
										<div class="inner-form-group">
											<select name="parent-two-tertiary-color"
												id="parent-two-tertiary-color">
											</select>
										</div>
									</div>
								</div>
								<div class="col-12 col-lg-6 p-3">
									<div class="form-group form-group-select">
										<label for="parent-two-tertiary-gene"></label>
										<div class="inner-form-group">
											<select name="parent-two-tertiary-gene"
												id="parent-two-tertiary-gene">
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="d-flex justify-content-center mt-5">
						<button id="generateBreedingChart" class="btn big-btn">Generate breeding chart</button>
						<!-- <button class="ms-3 btn big-btn">Generate random offspring (NOT WORKING)</button> -->
					</div>
				</div>
				<div id="breedingStats" class="col-12 mt-5 d-none">
					<div class="block">
						<div class="block-head">
							<p>Result</p>
						</div>
						<div class="block-content">

							<div class="results-rows">
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one">
											<p class="name text-center"><strong></strong></p>
											<div class="d-flex justify-content-center">
												<img src="" alt="">
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="d-flex align-items-center justify-content-between">
												<div class="parentOneSpecie text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
												
												<div class="parentTwoSpecie text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
											</div>
											<div class="speciesOddsBar">
												<div class="progress" role="progressbar" aria-label="Species odds" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
													<div class="progress-bar progress-bar-striped bg-info" style="width: 0%;"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two">
											<p class="name text-center"><strong></strong></p>
											<div class="d-flex justify-content-center">
												<img src="" alt="">
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="primary-color">
												<p><strong>Primary color</strong></p> 
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="colors-list primary d-flex justify-content-center flex-wrap"></div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="primary-color">
												<p><strong>Primary color</strong></p>
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="primary-gene">
												<p><strong>Primary gene</strong></p> 
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="d-flex align-items-center justify-content-between">
												<div class="parentOnePrimaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
												<div class="parentTwoPrimaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
											</div>
											<div class="primaryGenesOddsBar">
												<div class="progress" role="progressbar" aria-label="Primary genes odds" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
													<div class="progress-bar progress-bar-striped bg-success" style="width: 0%;"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="primary-gene">
												<p><strong>Primary gene</strong></p>
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="secondary-color">
												<p><strong>Secondary color</strong></p> 
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="colors-list secondary d-flex justify-content-center flex-wrap"></div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="secondary-color">
												<p><strong>Secondary color</strong></p>
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="secondary-gene">
												<p><strong>Secondary gene</strong></p> 
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="d-flex align-items-center justify-content-between">
												<div class="parentOneSecondaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
												<div class="parentTwoSecondaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
											</div>
											<div class="secondaryGenesOddsBar">
												<div class="progress" role="progressbar" aria-label="Secondary genes odds" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
													<div class="progress-bar progress-bar-striped bg-warning" style="width: 0%;"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="secondary-gene">
												<p><strong>Secondary gene</strong></p>
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="tertiary-color">
												<p><strong>Tertiary color</strong></p> 
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="colors-list tertiary d-flex justify-content-center flex-wrap"></div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="tertiary-color">
												<p><strong>Tertiary color</strong></p>
												<div class="d-flex justify-content-center">
													<div class="color-square" style=""></div> 
												</div>
												<p class="color-name"></p>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="row justify-content-center align-items-center">
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-one text-center">
											<div class="tertiary-gene">
												<p><strong>Tertiary gene</strong></p> 
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-6 p-2">
										<div class="results-block">
											<div class="d-flex align-items-center justify-content-between">
												<div class="parentOneTertiaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
												<div class="parentTwoTertiaryGene text-center">
													<p class="name"><strong></strong></p>
													<p class="odd"></p>
												</div>
											</div>
											<div class="tertiaryGenesOddsBar">
												<div class="progress" role="progressbar" aria-label="Tertiary genes odds" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
													<div class="progress-bar progress-bar-striped bg-danger" style="width: 0%;"></div>
												</div>
											</div>
										</div>
									</div>
									<div class="col-12 col-md-3 p-2">
										<div class="parent-result-block parent-two text-center">
											<div class="tertiary-gene">
												<p><strong>Tertiary gene</strong></p>
												<p class="gene-name"></p>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="col-12">
					<p class="text-end"><em>Tool made by <a href="https://www1.flightrising.com/clan-profile/434329" target="blank">NamLemonade</a></em></p>
				</div>
				<div class="col-12">
					<div class="accordion" id="credits">
						<div class="accordion-item">
							<h2 class="accordion-header">
								<button class="accordion-button collapsed" type="button"
									data-bs-toggle="collapse" data-bs-target="#creditsCollapse"
									aria-expanded="false" aria-controls="creditsCollapse">
									Credits
								</button>
							</h2>
							<div id="creditsCollapse" class="accordion-collapse collapse"
								data-bs-parent="#credits">
								<div class="accordion-body">
									<p><strong>Dragon emojis assets</strong></p>
									<p><a href="https://www1.flightrising.com" target="_blank">Flight Rising</a></p>

									<p><strong>Species / Genes rarities</strong></p>
									<p><a href="https://www1.flightrising.com/forums/gde/3109561#post_3109561" target="_blank">DarkPuffin on Flight Rising</a></p>

									<p><strong>Colors list + hexadecimal values</strong></p>
									<p><a href="https://www1.flightrising.com/forums/gde/3295373" target="_blank">Oncorhynchus on Flight Rising</a></p>

									<p><strong>Inspirations</strong></p>
									<p><a href="https://jiyoumcc.github.io/FlightRisingTool/" target="_blank">jiyoumcc's Flight Rising breeding tool</a> and <a href="https://keelanrosa.com/fr/" target="_blank">Keelanrosa's Flight Rising breeding stats card</a></p>

									<p><strong>Code libraries used</strong></p>
									<p><a href="https://jquery.com" target="_blank">JQuery</a>, <a href="https://getbootstrap.com" target="_blank">Bootstrap 5</a>, <a href="https://select2.org" target="_blank">Select2</a></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>