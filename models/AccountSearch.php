<?php

namespace app\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Account;

/**
 * AccountSearch represents the model behind the search form about `app\models\Account`.
 */
class AccountSearch extends Account
{
    
    public function __construct($name){
       
        parent::$dbName = $name;

    }
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['balance', 'transfer'], 'number'],
            [['type', 'user', 'data'], 'safe'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }
    
    /**
     * Insert record about new payment
     * @string $user - name current user
     * @int $transfer - amount of transfer
    */
    public function payBill($name, $transfer, $balance, $user)
    {
        $query = new AccountSearch($name);
        $query->user = $user;
        $query->balance = $balance;
        $query->transfer = $transfer;
        $query->type = 'Pay bill';
        $query->data = date("Y-m-d H:i:s");
        return $query->insert();
        
    }
    
    /**
     * Insert record about new payment
     * @string $name - name current user
     * @int $transfer - amount of transfer
     * @int $balance - current balance
     * @string $user - name sender user
    */
    public function transferMoney($name, $transfer, $balance, $user)
    {
        $query = new AccountSearch($name);
        $query->user = $user;
        $query->balance = $balance;
        $query->transfer = $transfer;
        $query->type = 'Transfer from';
        $query->data = date("Y-m-d H:i:s");
       
        return  $query->insert();
    }
   
    
    
    

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Account::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'balance' => $this->balance,
            'transfer' => $this->transfer,
            'user' => $this->user,
            'data' => $this->data,
        ]);

        $query->andFilterWhere(['like', 'type', $this->type]);

        return $dataProvider;
    }
}
