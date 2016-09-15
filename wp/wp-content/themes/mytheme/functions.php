<?php
register_sidebar();
add_theme_support('post-thumbnails');
function hide_default_widget() {
unregister_widget('WP_Widget_Pages'); // 固定ページ
unregister_widget('WP_Widget_Calendar'); // カレンダー
unregister_widget('WP_Widget_Archives'); // アーカイブ
unregister_widget('WP_Widget_Meta'); // メタ情報
unregister_widget('WP_Widget_Search'); // 検索
unregister_widget('WP_Widget_Text'); // テキスト
unregister_widget('WP_Widget_Categories'); // カテゴリー
unregister_widget('WP_Widget_Recent_Posts'); // 最近の投稿
unregister_widget('WP_Widget_Recent_Comments'); // 最近のコメント
unregister_widget('WP_Widget_RSS'); // RSS
unregister_widget('WP_Widget_Tag_Cloud'); // タグクラウド
unregister_widget('WP_Nav_Menu_Widget'); // カスタムメニュー
}
add_action( 'widgets_init', 'hide_default_widget' );

// add_action('init', 'create_post_type');
// function create_post_type() {
// 	register_post_type('news', 
// 		array('labels' => 
// 			array( 'name' => __('新着情報'), 'shingular_name' => __('新着情報'))
// 		,'public' => true
// 		,'menu_position' => 5
// 		)
// 	);
// }
?>