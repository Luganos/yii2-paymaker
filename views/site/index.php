<?php
use yii\helpers\Url;
use yii\grid\GridView;
use yii\helpers\Html;

/* @var $this yii\web\View */
$this->title = Yii::t('app', Yii::$app->name);
?>
<?php 
use app\assets\IndexAsset;
IndexAsset::register($this);
?>
<div class="site-index">
	
    <div class="body-content">
         <div class="col-lg-15">
             <h3> <p class="text-center">List of customers</p> </h3>     
         </div>
        
        <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'summary'=>"",     
        'columns' => [
 
            'user:ntext',
            'balance',
            'status:ntext',
            
           [
            'class' => 'yii\grid\ActionColumn',
            'visible' => false,
           ],
        ],
    ]); ?>  
        

    </div>
</div>

