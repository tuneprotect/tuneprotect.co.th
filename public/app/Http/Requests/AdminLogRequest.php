<?php

namespace App\Http\Requests;

use App\Http\Requests\Base\BaseFormRequest;

class AdminLogRequest extends BaseFormRequest
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
            'action' => 'required|string',
            'description' => 'required|string',
            'user' => 'nullable|string',
            'admin_id' => 'nullable|integer',
            'data' => 'nullable|JSON',
            'filter' => 'array',
            'orderBy' => 'array',
            'page' => 'integer',
            'rowPerPage' => 'integer'
        ]);
    }

    public function filters()
    {
        return [
            'id' => 'trim',
            'action' => 'trim|capitalize',
            'description' => 'trim',
            'user' => 'trim|capitalize',
            'admin_id' => 'trim',
        ];
    }
}
