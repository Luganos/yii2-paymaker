<?php
use yii\helpers\Html;

$this->title = Yii::t('app', 'Dictionary');
$this->params['breadcrumbs'][] = $this->title

?>

<?php 
use app\assets\DictionaryAsset;
DictionaryAsset::register($this);
?>
<?php Yii::$app->view->registerJs('var status = "'. $result['status'].'"; var begin = "'. $result['begin'].'"; var end = "'. $result['end'].'";',  \yii\web\View::POS_HEAD);?>
<div class = "row"></div>

