<?php

namespace App\Http\Requests;

use App\Http\Requests\Base\BaseFormRequest;

class UserRequest extends BaseFormRequest
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
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'username' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:50' . ($this->get('password_confirmation') ? '|confirmed' : ''),
            'role' => 'nullable',
            'channel' => 'string',
            'fbAccessToken' => 'string',
            'selected_id' => 'filled',
        ]);
    }
}
