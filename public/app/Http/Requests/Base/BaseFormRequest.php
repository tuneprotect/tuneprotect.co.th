<?php

namespace App\Http\Requests\Base;

use Illuminate\Foundation\Http\FormRequest;
use Waavi\Sanitizer\Laravel\SanitizesInput;

abstract class BaseFormRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    abstract public function rules();

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    abstract public function authorize();

    protected function calculateRule($rule){
        $arr = [];
        foreach ($this->all() as $k => $v) {
            if(isset($rule[$k])){
                $arr[$k] = $rule[$k];
            }
        }

        return $arr;
    }

}
