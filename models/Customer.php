<?php

namespace app\models;


use yii\base\Model;
use Yii;


/**
 * This is the model class for table "customer".
 *
 * @property integer $id
 * @property string $user
 * @property integer $balance
 * @property string $status
 */
class Customer extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%customer}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['user', 'balance', 'status'], 'required'],
            [['user', 'status'], 'string'],
            [['balance'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user' => 'User',
            'balance' => 'Balance',
            'status' => 'Status',
        ];
    }
     
     
   /**
     * Insert record about new customer
     * @string $user - name current user
    */
    public function insertCustomer($user){
        
        
        $query = new Customer;
        $query->user = $user;
        $query->balance = 0;
        $query->status = 'Offline';
       
        return  $query->insert();
    }
    
    /**
     * Change status to Online for current user
     * @string $user - name current user
    */
    public function onlineCustomer($user){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                  
                  $post->status = "Online";
	          $post->save(); 
                  return true;
              }
              
              return false;
	        
    }
    
   /**
     * Change status to Offline for current user
     * @string $user - name current user
    */
    public function offlineCustomer($user){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                  
                  $post->status = "Offline";
	          $post->save(); 
                  return true;
              }
              
              return false;
	        
    }
    
   /**
     * Increase payment balance of recever
     * @string $user - name recever 
    *  @int $transfer - amount of transfer
    */
    public function increaseBalanceCustomer($user, $transfer){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                  
                  $post->balance += $transfer;
                  $currentBalance = $post->balance;
	          $post->save(); 
                  return  $currentBalance;
              }
              
              return 0;
	        
    }
    
    /**
     * Decrease payment balance of sender
     * @string $user - name sender
    *  @int $transfer - amount of transfer
    */
    public function decreaseBalanceCustomer($user, $transfer){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                  
                  $post->balance -= $transfer;
                  $currentBalance = $post->balance;
	          $post->save(); 
                  return $currentBalance;
              }
              
              return 0;
	        
    }
    
    /**
     * Check existing customer
     * @string $user - name customer
    *  @return boolean 0 - customer does not exist 1- customer exists 
    */
    public function existCustomer($user){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                 
                  return true;
              }
              
              return false;
	        
    }
    
   /**
     * Get balance current customer
     * @string $user - name customer
    *  @return int current balance of customer
    */
    public function balanceCurrentCustomer($user){
        
        
	      $post = Customer::find()->select("*")->where(array('user' => $user))->one();
              if($post->status){
                 
                  return $post->balance;
              }
              
              return 0;
	        
    }
    
        

   
   /**
     * Create customer table for current user
     * @string $user - name current user
    */
    public function createCustomerTable($user){
        
        $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        
        Yii::$app->db->createCommand()->createTable("{{%$user}}", [
                     'id' => 'pk',
                     'balance' => 'float(9)',
                     'transfer' => 'float(9)',
                     'type' => 'string(25)',
                     'user' => 'string(25)',
                     'data' => 'datetime'
        ], $tableOptions  )->execute();
       
           
        return true;
	        
    }
    
    
    
    

    /**
     * @inheritdoc
     * @return CustomerQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new CustomerQuery(get_called_class());
    }
}
