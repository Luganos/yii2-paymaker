<?php


use yii\db\Schema;
use yii\db\Migration;


class m130524_201443_create_table extends Migration
{
    public function up()
    {

        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }
		
	  //Create table User	
	  $this->createTable('{{%User}}', [
				 
					 'id' => Schema::TYPE_PK,
					 'username' => Schema::TYPE_STRING . '(255) NOT NULL',
					 'email' => Schema::TYPE_STRING . '(255) NOT NULL',
					 'password_hash' => Schema::TYPE_STRING . '(255) NOT NULL',
					 'password_reset_token' => Schema::TYPE_STRING . '(255)',
					 'auth_key' => Schema::TYPE_STRING . '(32)',
					 'status' => Schema::TYPE_INTEGER . '(5)',
					 'account_activation_token' => Schema::TYPE_STRING . '(255)',
					 'created_at' => Schema::TYPE_INTEGER . '(11)',
					 'updated_at' => Schema::TYPE_INTEGER . '(11)',
				 
		           ], $tableOptions);
				   
	 //Create table auth_assignment	
	  $this->createTable('{{%auth_assignment}}', [
				 
					 'item_name' => Schema::TYPE_STRING . '(64) DEFAULT NULL',
					 'user_id' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
					 'created_at' => Schema::TYPE_INTEGER . '(11)',
				 
		           ], $tableOptions);
				   
      //Create table auth_item	
	  $this->createTable('{{%auth_item}}', [
				 
					 'name' => Schema::TYPE_STRING . '(64) NOT NULL',
					 'type' => Schema::TYPE_INTEGER . '(11) NOT NULL',
					 'description' => Schema::TYPE_TEXT . ' DEFAULT NULL',
					 'rule_name' => Schema::TYPE_STRING . '(64) DEFAULT NULL',
					 'data' => Schema::TYPE_TEXT . ' DEFAULT NULL',
					 'created_at' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
					 'updated_at' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
				 
		           ], $tableOptions);
				   
	  //Create table auth_item_child	
	  $this->createTable('{{%auth_item_child}}', [
				 
					 'parent' => Schema::TYPE_STRING . '(64) NOT NULL',
					 'child' => Schema::TYPE_STRING . '(64) NOT NULL',

				  ], $tableOptions);
				  
	  //Create table auth_rule	
	  $this->createTable('{{%auth_rule}}', [
				 
					 'name' => Schema::TYPE_STRING . '(64) NOT NULL',
					 'description' => Schema::TYPE_TEXT . ' DEFAULT NULL',
					 'created_at' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
					 'updated_at' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
				 
		           ], $tableOptions);
				   
	  //Create table customer	
	  $this->createTable('{{%customer}}', [
				 
				     'id' => Schema::TYPE_PK,
					 'user' => Schema::TYPE_STRING . '(64) DEFAULT NULL',
					 'balance' => Schema::TYPE_INTEGER . '(11) DEFAULT NULL',
					 'status' => Schema::TYPE_STRING . '(64) NOT NULL',
				 
		           ], $tableOptions);

     				   
		
        $this->insert('{{%auth_item}}', [
            'name' => 'admin',
			'type' => '1',
			'description' => 'Administrator of this application',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	    $this->insert('{{%auth_item}}', [
            'name' => 'editor',
			'type' => '1',
			'description' => 'Editor of this application',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	    $this->insert('{{%auth_item}}', [
            'name' => 'member',
			'type' => '1',
			'description' => 'Registered users, members of this site',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_item}}', [
            'name' => 'premium',
			'type' => '1',
			'description' => 'Premium members. They have more permissions than normal members',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_item}}', [
            'name' => 'support',
			'type' => '1',
			'description' => 'Support staff',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	  $this->insert('{{%auth_item}}', [
            'name' => 'theCreator',
			'type' => '1',
			'description' => 'You!',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_item}}', [
            'name' => 'manageUsers',
			'type' => '2',
			'description' => 'Allows admin+ roles to manage users',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_item}}', [
            'name' => 'adminArticle',
			'type' => '2',
			'description' => 'Allows admin+ roles to manage articles',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	  $this->insert('{{%auth_item}}', [
            'name' => 'createArticle',
			'type' => '2',
			'description' => 'Allows editor+ roles to create articles',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	 $this->insert('{{%auth_item}}', [
            'name' => 'deleteArticle',
			'type' => '2',
			'description' => 'Allows admin+ roles to delete articles',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
		 $this->insert('{{%auth_item}}', [
            'name' => 'updateArticle',
			'type' => '2',
			'description' => 'Allows editor+ roles to update articles',
			'created_at' => time(),
			'updated_at' => time(),
        ]);	
		
		$this->insert('{{%auth_item}}', [
            'name' => 'usePremiumContent',
			'type' => '2',
			'description' => 'Allows premium+ roles to use premium content',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_item}}', [
            'name' => 'updateOwnArticle',
			'type' => '2',
			'description' => 'Update own article',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	   $this->insert('{{%auth_rule}}', [
            'name' => 'isAuthor',
			'description' => 'O:25:"app\rbac\rules\AuthorRule":3:{s:4:"name";s:8:"isAuthor";s:9:"createdAt";i:1447192522;s:9:"updatedAt";i:1447192522;}',
			'created_at' => time(),
			'updated_at' => time(),
        ]);
		
	  $this->insert('{{%auth_item_child}}', [
            'parent' => 'theCreator',
			'child' => 'admin',
        ]);
		
	  $this->insert('{{%auth_item_child}}', [
            'parent' => 'editor',
			'child' => 'adminArticle',
        ]);	
		
		  $this->insert('{{%auth_item_child}}', [
            'parent' => 'theCreator',
			'child' => 'admin',
        ]);
		
	  $this->insert('{{%auth_item_child}}', [
            'parent' => 'support',
			'child' => 'member',
        ]);	
    
     $this->insert('{{%auth_item_child}}', [
            'parent' => 'support',
			'child' => 'premium',
        ]);	
		
	 $this->insert('{{%auth_item_child}}', [
            'parent' => 'editor',
			'child' => 'support',
        ]);	
		
	$this->insert('{{%auth_item_child}}', [
            'parent' => 'updateOwnArticle',
			'child' => 'updateArticle',
        ]);	

    $this->insert('{{%auth_item_child}}', [
            'parent' => 'editor',
			'child' => 'updateOwnArticle',
        ]);	

    $this->insert('{{%auth_item_child}}', [
            'parent' => 'premium',
			'child' => 'usePremiumContent',
        ]);		
			
		

    }
    public function down()
    {
        $this->dropTable('{{%User}}');
        $this->dropTable('{{%auth_assignment}}');
        $this->dropTable('{{%auth_item}}');
        $this->dropTable('{{%auth_item_child}}');
		$this->dropTable('{{%auth_rule}}');
		$this->dropTable('{{%customer}}');
    }
}
