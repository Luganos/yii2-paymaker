<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "tbl_visits".
 *
 * @property integer $visit_id
 * @property string $data
 * @property integer $hosts
 * @property integer $views
 */
class TblVisits extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'tbl_visits';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['data'], 'safe'],
            [['hosts', 'views'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'visit_id' => 'Visit ID',
            'data' => 'Data',
            'hosts' => 'Hosts',
            'views' => 'Views',
        ];
    }

    /**
     * @inheritdoc
     * @return TblVisitsQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TblVisitsQuery(get_called_class());
    }
}
