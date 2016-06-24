<?php
use yii\helpers\Html;

$this->title = Yii::t('app', 'Verbs');
$this->params['breadcrumbs'][] = $this->title;
?>

<?php 
use app\assets\VerbsAsset;
VerbsAsset::register($this);
?>
<div class = "row"></div>
