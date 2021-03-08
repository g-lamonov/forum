<template>
	<div class='index'>
		<div class='thread_sorting'>
			<div class='button button--orange'>New</div>
			<div class='button'>Most active</div>
			<div class='button'>No replies</div>
		</div>
		<div class='threads'>
			<div class='thread thread--header'>
				<div class='thread__section thread__section--header thread__section--width-title'>Title</div>
				<div class='thread__section thread__section--header thread__section--width-post'>Latest post</div>
				<div class='thread__section thread__section--header thread__section--width-replies'>Replies</div>
			</div>
			<div class='thread thread--hover'>
				<div class='thread__section thread__section--width-title'>.NET (C# and Visual Basic)</div>
				<div class='thread__section thread__section--width-post'>
					<div class='thread__user'>alex</div>
					<div class='thread__date'>10/02/2019 15:13</div>
				</div>
				<div class='thread__section thread__section--width-replies'>90</div>
			</div>
			<div class='thread thread--hover'>
				<div class='thread__section thread__section--width-title'>Java</div>
				<div class='thread__section thread__section--width-post'>
					<div class='thread__user'>quavo</div>
					<div class='thread__date'>02/03/2020 15:13</div>
				</div>
				<div class='thread__section thread__section--width-replies'>12</div>
			</div>
			<div class='thread thread--hover'>
				<div class='thread__section thread__section--width-title'>C and C++</div>
				<div class='thread__section thread__section--width-post'>
					<div class='thread__user'>justin</div>
					<div class='thread__date'>15/06/2021 15:13</div>
				</div>
				<div class='thread__section thread__section--width-replies'>44</div>
			</div>
			<div class='thread thread--hover'>
				<div class='thread__section thread__section--width-title'>Python</div>
				<div class='thread__section thread__section--width-post'>
					<div class='thread__user'>jabba</div>
					<div class='thread__date'>27/04/2020 15:13</div>
				</div>
				<div class='thread__section thread__section--width-replies'>15</div>
			</div>
			<div class='thread thread--hover'>
				<div class='thread__section thread__section--width-title'>Other programming languages</div>
				<div class='thread__section thread__section--width-post'>
					<div class='thread__user'>leonardo</div>
					<div class='thread__date'>01/05/2017 15:13</div>
				</div>
				<div class='thread__section thread__section--width-replies'>21</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'index'
	}
</script>

<style lang='scss' scoped>
	@import '../../assets/scss/variables.scss';
	.index {
		width: 80%;
		margin: 0 auto;
		margin-top: 2rem;
	}
	.thread_sorting {
		margin-bottom: 1rem;
	}
	.thread {
		display: flex;
		background-color: #fff;
		padding: 0.5rem 0;
		cursor: default;
		@at-root #{&}--hover {
			transition: background-color 0.2s;
			&:hover {
				background-color: $color__lightgray--primary;
			}
		}
		@at-root #{&}--header {
			border-bottom: thin solid $color__lightgray--darkest;
		}
		@at-root #{&}__section {
			padding: 0 0.5rem;
			@at-root #{&}--header {
				font-weight: 400;
			}
			@at-root #{&}--width-title {
				width: 60%;
			}
			@at-root #{&}--width-post {
				width: 30%
			}
			@at-root #{&}--width-replies {
				width: 10%;
			}
		}
		@at-root #{&}__user {
			display: inline-block;
		}
		@at-root #{&}__date {
			color: $color__text--secondary;
			display: inline-block;
		}
	}
</style>