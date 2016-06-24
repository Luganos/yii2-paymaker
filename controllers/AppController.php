<?php
namespace app\controllers;

use yii\web\Controller;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use Yii;

/**
 * AppController extends Controller and implements the behaviors() method
 * where you can specify the access control ( AC filter + RBAC) for
 * your controllers and their actions.
 */
class AppController extends Controller
{
    /**
     * Returns a list of behaviors that this component should behave as.
     * Here we use RBAC in combination with AccessControl filter.
     *
     * @return array
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'controllers' => ['user'],
                        'actions' => ['index', 'view', 'create', 'update', 'delete', 'admin'],
                        'allow' => true,
                        'roles' => ['admin'],
                    ],
                    [
                        'controllers' => ['account'],
                        'actions' => ['index', 'view', 'pay', 'reject', 'loan', 'transfer'],
                        'allow' => true
                    ],
                    [
                        // other rules
                    ],

                ], // rules

            ], // access

            'account' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'pay' => ['get'],
                    'reject' => ['get'],
                ],
            ], // verbs

        ]; // return

    } // behaviors

} // AppController
