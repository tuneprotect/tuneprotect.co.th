<?php

namespace App\Http\Requests;

use App\Http\Requests\Base\BaseFormRequest;

class WebContentRequest extends BaseFormRequest
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
            'type_id' => 'required|string',
            'cat_id' => 'nullable|integer',
            'pic' => 'nullable|string',
            'pic_mobile' => 'nullable|string',
            'pic_en' => 'nullable|string',
            'pic_mobile_en' => 'nullable|string',
            'parent_id' => 'nullable|integer',
            'code' => 'nullable|string',
            'friendly_url' => 'nullable|string',
            'og_image' => 'nullable|string',
            'enable' => 'nullable|boolean',
            'home' => 'nullable|boolean',
            'mark_delete' => 'nullable|boolean',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'publish' => 'nullable|boolean',
            'action_date' => 'nullable|date',
            'action_link' => 'nullable|string',
            'is_race' =>'nullable|boolean',
            'distance' => 'nullable|integer',
            'video_link' => 'nullable|string',
            's_order' => 'nullable|string',
            'locales' => 'array',
            'order_data' => 'array',
            'selected_id' => 'filled',
            'order_by' => 'filled',
            'tag' => 'filled',
            'package_header' => 'filled',
            'package_value' => 'filled',
            'package_price' => 'filled',
        ]);
    }

    public function messages()
    {
        return [
//            'first_name.required' => 'First name is required',
//            'last_name.required' => 'Last name is required',
//            'email.email' => 'Wrong Email format',
//            'old_password.required' => 'OPd password is required',
//            'password.required' => 'Password is required',
//            'password.min' => 'Password too short',
//            'password.max' => 'Password too long',
//            'password.confirmed' => 'Password mismatch',
//            'token.required' => 'Token is required',
        ];
    }

//    public function filters()
//    {
//        return [
//            'id' => 'trim',
//            'type_id' => 'trim',
//            'cat_id' => 'trim',
//            'pic_mobile' => 'trim',
//            'parent_id' => 'trim',
//            'link' => 'trim|lowercase',
//            'og_image' => 'trim',
//            'start_date' => 'trim',
//            'end_date' => 'trim',
//        ];
//    }
}
