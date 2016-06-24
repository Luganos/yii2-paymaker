<?php
use yii\helpers\Html;

$this->title = Yii::t('app', 'Adverbs');
$this->params['breadcrumbs'][] = $this->title;
?>

<?php 
use app\assets\WordsAsset;
WordsAsset::register($this);
?>
<div class = "row"></div>

