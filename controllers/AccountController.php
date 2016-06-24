<?php

namespace app\controllers;

use Yii;
use app\models\Account;
use app\models\AccountSearch;
use app\models\Customer;
use app\models\CustomerSearch;
use app\models\SignupForm;
use yii\web\NotFoundHttpException;


/**
 * AccountController implements the CRUD actions for Account model.
 */
class AccountController extends AppController
{

    /**
     * Lists all Account models.
     * @return mixed
     */
    public function actionIndex()
    {
        
        //Get name of current user
        $user = Yii::$app->user->identity->username;
        
        $listOfCustomer = $this->listOfCustomer();
        
        $searchModel = new AccountSearch($user);
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'listOfCustomer' => $listOfCustomer,
        ]);
    }
    
    public function listOfCustomer()
    {
        
           $searchModel = new CustomerSearch();
           $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
          
            return $dataProvider;  
    }
    
    
        
    /**
     * Transfer to customer
     * @string $recever - recever money
     * @string $transfer - sum of transfer
     * @string $sender - sender of transfer
    */
    private function transferToCustomer($recever, $transfer, $sender)
    {
        
              //Increase payment balance recever
              $balanceUp = $this->increaseBalanceCustomer($recever, $transfer);
           
              //Decrease payment balance sender
              $balanceDown = $this->decreaseBalanceCustomer($sender, $transfer);
       
              //Create transfer for recever
              $this->createTransfer($recever, $balanceUp, $transfer, $recever);
              
              //Create paid for sender
              $this->createPaid($recever, $balanceDown, $transfer, $sender);
        
    }
    
    
    /**
     * Create transfer to user
     * @string $recever - recever money
     * @string $balance - current balance of recever
     * @string $transfer - sum of transfer
     * @string $sender - sender of transfer
     * @return mixed
    */
    private function createTransfer($recever, $balance, $transfer, $sender)
    {
        //Create new model
        $model = new Account($sender);
        
        $model->createTransfer($recever, $balance, $transfer);
        
        
    }
    
    
    /**
     * Create transfer to user
     * @string $recever - recever money
     * @string $balance - current balance of sender
     * @string $transfer - sum of transfer
     * @string $sender - sender of transfer
     * @return mixed
    */
    private function createPaid($recever, $balance, $transfer, $sender)
    {
          //create new model
          $model = new Account($sender);
         
          $model->createPaid($recever, $balance, $transfer);
        
    }
    
    
    /**
     * Check existing user
     * @string $customer - name customer
     * @return boolean - true = customer existing, false = customer are not existing
    */
    private function existCustomer($customer)
    {
         // Create new Customer model
         $model = new Customer();
         
         return $model->existCustomer($customer);
        
    }
    
    /**
     * Increase current balance of customer
     * @string $recever - name customer
     * @int $transfer - sum of transfer
     * @return int - current balance of customer
    */
    private function increaseBalanceCustomer($recever, $transfer)
    {
         // Create new Customer model
         $model = new Customer();
        
         return $model->increaseBalanceCustomer($recever, $transfer);
        
    }
    
    
    /**
     * Decrease current balance of customer
     * @string $sender - name customer
     * @int $transfer - sum of transfer
     * @return int - current balance of customer
    */
    private function decreaseBalanceCustomer($sender, $transfer)
    {
         // Create new Customer model
         $model = new Customer();
         
         return $model->decreaseBalanceCustomer($sender, $transfer);
        
    }
    
    /**
     * Create table in DB for new customer
     * @string $recever - name customer
    */
    public static function createCustomerTable($recever)
    {
        
       // Create new Customer model
       $model = new Customer();
       
       $model->createCustomerTable($recever);
        
    }
    
    
   /**
     * Insert record t DB about new customer
     * @string $recever - name customer
    */
    public static function insertCustomer($recever)
    {
      
        // Create new Customer model
        $model = new Customer();
        
        $model->insertCustomer($recever);  
        
    }
    
   /**
     * Insert record t DB about new customer
     * @string $recever - name customer
    */
   public static function newCustomer($recever)
   {
        
        AccountController::createCustomerTable($recever);
        AccountController::insertCustomer($recever);
        
   }
    
    /**
     * Prerare data before use
     * @mix $input - raw input data
    */
    public static function validateDataFromForm($input)
    {
 
        if(is_array($input)){
            
           return array_map(__METHOD__, $input);
        }

        if(!empty($input) && is_string($input)){
            return str_replace(array('\\', "\0", "\n", "\r", "'", '"', "\x1a"), array('\\\\', '\\0', '\\n', '\\r', "\\'", '\\"', '\\Z'), $input);
        }

        return $input;
 
    }
    
    
   /**
     * Prerare data before use
     * @mix $input - raw input data
    */
    private function prepareDataForSignup($recever)
    {
           //Set list of parament
           $parameters = array();
              
           $parameters['SignupForm']['username'] = $recever;
           $parameters['SignupForm']['email'] = "not-user@com.ua";
           $parameters['SignupForm']['password'] = "123456789";
           $parameters['signup-button']= "";
        
        
        return $parameters;
    }
    
    
   /**
     * Public action for transfer money
     * @mix $input - raw input data
    */
    public function actionTransfer()
    {
        //Sender name
        $sender = Yii::$app->user->identity->username;
           
        if(Yii::$app->request->post()) {
        
           $post = Yii::$app->request->post();
           $recever = AccountController::validateDataFromForm($post['Account']['user']);
           $transfer = AccountController::validateDataFromForm($post['Account']['transfer']);
           
           if($this->existCustomer($recever)){  
               
               $this->transferToCustomer($recever, $transfer, $sender);
              
           } else{
             
              $model = new SignupForm();
              
              // collect and validate user data
              if ($model->load($this->prepareDataForSignup($recever)) && $model->validate()){
                  
                 $model->signup(); 
                 
                 AccountController::newCustomer($recever);

                 $this->transferToCustomer($recever, $transfer, $sender);
           
              } 
               
           }
           return $this->redirect('index');
           
        } else{
             
           $model = new Account($sender); 
           
           return $this->render('create', [
                'model' => $model,
            ]);
        }
    }
    
   /**
     * Public action for create of loan
     * 
    */
    public function actionLoan()
    {
      
        $currentUser = Yii::$app->user->identity->username;

        
        if(Yii::$app->request->post()) {
              
            //Get data from request
            $post = Yii::$app->request->post(); 
            $recever = AccountController::validateDataFromForm($post['Account']['user']);
            $transfer = AccountController::validateDataFromForm($post['Account']['transfer']); 
            
            // Create new Customer model
            $customer = new Customer();
             
            if($customer->existCustomer($recever)){
                
                //Create loan to customer
                $model = new Account($recever); 
                
                $balance = $customer->balanceCurrentCustomer($currentUser);
                
                $model->createLoan($recever, $balance, $transfer);
             }
              
            return $this->redirect('index'); 
            
          } else{
              
              $name .= Yii::$app->user->identity->username;
              
              $model = new Account($name); 
           

              return $this->render('create_loan', [
                'model' => $model,
               ]);      
          }
  
        
    }
    
   /**
     * Public action for reject of bill
     * @mix $input - raw input data
    */
    public function actionReject($id)
    {
        //Sender name
        $sender = Yii::$app->user->identity->username;
        
        $userId = AccountController::validateDataFromForm($id);
        
        //Update bill
        $updateBill = new Account();
        
        $message = 'Bill rejected';
        
        $updateBill->updateBill($sender, $userId, $message);
        
        $listOfCustomer = $this->listOfCustomer();
        
        $searchModel = new AccountSearch($sender);
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'listOfCustomer' => $listOfCustomer,
        ]);
        
    }

    /**
     * Pay bill
     * @param integer $id
     * @param integer $transfer
     * @param string $user
     * @return mixed
     */
    public function actionPay($user, $transfer, $id)
    {
        
        $userName = AccountController::validateDataFromForm($user);
        $transferSum = AccountController::validateDataFromForm($transfer);
        $idUser = AccountController::validateDataFromForm($id);

        //Increase payment balance recever
        $balanceUp = $this->increaseBalanceCustomer($userName,  $transferSum);
        
        //Sender name
        $sender = Yii::$app->user->identity->username;
        
        //Decrease payment balance sender
        $balanceDown = $this->decreaseBalanceCustomer($sender,  $transferSum);
        
        //New transaction
        $newTransaction = new AccountSearch($sender);
        
        //Create payment
        $newTransaction->payBill($sender, $transfer, $balanceDown, $userName);
        
        
        //Update bill
        $updateBill = new Account();
        
        $message = 'Bill';
        
        $updateBill->updateBill($sender, $idUser, $message);
        
        //New transaction
        $takeMoney = new AccountSearch($userName);
        
        //Create receive money
        $takeMoney->transferMoney($userName, $transfer, $balanceUp, $sender);
        
        $listOfCustomer = $this->listOfCustomer();
        
        $searchModel = new AccountSearch($sender);
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);

        return $this->render('index', [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
            'listOfCustomer' => $listOfCustomer,
        ]);

    }


    /**
     * Finds the Account model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param integer $id
     * @return Account the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Account::findOne($id)) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
