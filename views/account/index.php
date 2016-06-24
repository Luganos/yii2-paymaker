<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\AccountSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Accounts';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="account-index">
    <div class="col-lg-15">
        <h3> <p class="text-center">List of transactions</p> </h3>     
    </div>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?php //<?= Html::a('Create Account', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'summary' => '',
        'columns' => [

            'id',
            'balance',
            'transfer',
            'type',
            'user',
            'data',
            [
               'attribute'=>'active',
               'header'=>'Action',
               'headerOptions' => ['width' => 'auto'],
               'filter' => ['Bill unpaid'=>'Active', 'Transfer'=>'Deactive'], 
               'format'=>'raw',
               'value' => function($model, $key, $index)
               {   
                     if($model->type == 'Bill unpaid')
                     {
                        $view = Html::a('Pay bill', ['pay', 'user' => $model->user, 'transfer' => $model->transfer, 'id' => $model->id], ['class' => 'btn btn-success']); 
                        $view .= ' ';
                        $view .= Html::a('Reject bill', ['reject', 'user' => $model->user, 'id' => $model->id], ['class' => 'btn btn-warning']);
                        return $view;
                        
                     }
                     else
                     {   
                         return '';
                     }
                },
            ],
            

            [
               'class' => 'yii\grid\ActionColumn',
               'visible' => false,
                
            ],
        ],
    ]); ?>
   <div class="col-lg-15">
        <h3> <p class="text-center">List of customers</p> </h3>     
    </div>
   <?= GridView::widget([
        'dataProvider' => $listOfCustomer,
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
    <div class="col-lg-15">
        <h3> <p class="text-center">Create transaction</p> </h3>     
    </div>
      <div class="pull-right">
  
        <?= Html::a(Yii::t('app', 'Create transfer'), ['transfer'], ['class' => 'btn btn-success']) ?>
 
   
        <?= Html::a(Yii::t('app', 'Create loan'), ['loan'], ['class' => 'btn btn-success']) ?>
  
    
    </div>    
</div> 

