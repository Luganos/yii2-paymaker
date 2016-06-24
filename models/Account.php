<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tbl_user2".
 *
 * @property integer $id
 * @property double $balance
 * @property double $transfer
 * @property string $type
 * @property string $user
 * @property string $data
 */
class Account extends \yii\db\ActiveRecord
{
   public static $dbName;
    
    
   public function __construct($name = null){
       
        if ($name){
          self::$dbName = $name;
        }

    }
   
   
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return  '{{%'.self::$dbName.'}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['balance', 'transfer'], 'number'],
            [['data'], 'safe'],
            [['type', 'user'], 'string', 'max' => 25],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'balance' => 'Balance',
            'transfer' => 'Transfer',
            'type' => 'Type',
            'user' => 'User',
            'data' => 'Data',
        ];
    }
    
   /**
     * Update record about bill
     * @string $user - name current user
     * @int $transfer - amount of transfer
    */
    public function updateBill($name, $id, $action)
    {
        

        $connection = \Yii::$app->db;
        $command = $connection->createCommand("UPDATE {{%$name}} SET `type` = '$action' WHERE `id` = $id");
        $command->execute();
        
        return true;
  
    }
    
    public function createTransfer($recever, $balanceUp, $transfer)
    {
        //Get data
        $user = Yii::$app->user->identity->username;
        
        $query = new Account($recever);
        $query->user = $user;
        $query->balance = $balanceUp;
        $query->transfer = $transfer;
        $query->type = 'Transfer from';
        $query->data = date("Y-m-d H:i:s");
       
        return  $query->insert();
        
        
    }
    
        
    public function createPaid($recever, $balanceDown, $transfer)
    {
        //Get data
        $name = Yii::$app->user->identity->username;
        
        $query = new Account($name);
        $query->user = $recever;
        $query->balance = $balanceDown;
        $query->transfer = $transfer;
        $query->type = 'Transfer to';
        $query->data = date("Y-m-d H:i:s");
       
        return  $query->insert();
        
        
    }
    
    public function createLoan($recever, $balanceDown, $transfer)
    {
        //Get name of loaner
        $name = Yii::$app->user->identity->username;
        
        $query = new Account($recever);
        $query->user = $name;
        $query->balance = $balanceDown;
        $query->transfer = $transfer;
        $query->type = 'Bill unpaid';
        $query->data = date("Y-m-d H:i:s");
       
        return  $query->insert();
        
        
    }

    /**
     * @inheritdoc
     * @return AccountQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new AccountQuery(get_called_class());
    }
}
