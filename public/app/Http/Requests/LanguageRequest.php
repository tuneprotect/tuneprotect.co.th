<?php

namespace App\Http\Requests;

use App\Http\Requests\Base\BaseFormRequest;

class LanguageRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->calculateRule([
            'id' => 'nullable|integer',
            'code' => 'required|string|max:2',
            'title' => 'required|string',
            'application' => 'required|string',
            'selected_id' => 'nullable|integer',
        ]);
    }

    public function filters()
    {
        return [
            'id' => 'trim',
            'code' => 'trim|lowercase',
            'title' => 'trim|capitalize',
            'application' => 'trim|lowercase',
        ];
    }
}
