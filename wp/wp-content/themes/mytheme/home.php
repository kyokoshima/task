<?php get_header(); ?>
	<div id="contents">
	<p>ホーム</p>
	<img src="<?php echo get_template_directory_uri(); ?>/yotousanndotcom.png" />
	<?php get_sidebar(); ?>
		<?php if(have_posts()) : ?>
			<?php while(have_posts()) : ?>
				<?php the_post(); ?>
				<?php the_post_thumbnail(); ?>
				<a href="<?php the_permalink(); ?>">
				<img src="<?php echo $imgdir; ?>/logo.png" />
					<?php the_title(); ?>
				</a>
				<p><?php echo get_the_date(); ?></p>
				<p><?php the_category(); ?></p>
				<p><?php the_tags(); ?></p>
				<p><?php the_content(); ?></p>
			<?php endwhile; ?>
		<?php endif; ?>
	</div>
<?php get_footer(); ?>
