<?php


namespace App\Models\Base;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Schema;

abstract class BaseModel extends Model
{

    protected static function KeyName()
    {
        return (new static)->getKeyName();
    }
    public static function TableName()
    {
        return (new static)->getTable();
    }
    protected static function findPrimaryAndData($validatedData)
    {
        $primary = [];
        $data = [];
        $primary_key = self::KeyName();
        foreach ($validatedData as $k => $v) {

            if ($k === $primary_key) {
                $primary[$k] = $v;
            } else {
                $data[$k] = $v;
            }
        }

        return array($primary, $data);
    }
    protected static function replace($validatedData)
    {
        list($primary, $data) = self::findPrimaryAndData($validatedData);
        return self::updateOrCreate($primary, $data);
    }
    protected static function toggleField($field, $id)
    {

        $result = self::find($id);
        $result->{$field} = !$result->{$field};
        if (Schema::hasColumn(self::TableName(), 'publish')) {
            $result->publish = 0;
        }

        $result->save();
        return (int)$result->{$field};
    }
    protected static function massToggleField($field, $status, $id)
    {

        $arr[$field] = $status;

        if (Schema::hasColumn(self::TableName(), 'publish')) {
            $arr['publish'] = 0;
        }
        return self::whereIn('id', $id)->update($arr);
    }
    public static function saveReorder($id, $s_order)
    {

        $result = self::find($id);

        if ($result->s_order === $s_order) {
            return false;
        }

        $result->s_order = $s_order;

        if (Schema::hasColumn(self::TableName(), 'publish')) {
            $result->publish = 0;
        }
        $result->save();

        return true;

    }
    protected static function doPublish($id)
    {

        $result = self::find($id);
        if ($result->publish === 1) {
            return 'publish';
        }

        if ($result->mark_delete === 1) {
            $result->delete();
            return 'delete';
        }

        $result->publish = 1;
        $result->save();
        return 'publish';
    }
    public static function publish($id)
    {
        $arr = [];
        if (is_array($id)) {

            foreach ($id as $v) {
                $arr[$v] = self::doPublish($v);
            }

        } else {
            $arr[$id] = self::doPublish($id);

        }
        return $arr;
    }


}
