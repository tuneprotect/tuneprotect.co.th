<?php

namespace App\Http\Requests;

use App\Http\Requests\Base\BaseFormRequest;

class PartnerRequest extends BaseFormRequest
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
            'enable' => 'nullable|boolean',
            'mark_delete' => 'nullable|boolean',
            'start_date' => 'nullable|date',
            'end_date' => 'nullable|date',
            'website' => 'nullable|string',
            'publish' => 'nullable|boolean',
            's_order' => 'nullable|string',
            'tel' => 'nullable|string',
            'province' => 'nullable|string',
            'location' => 'nullable|string',
            'partner_language' => 'nullable|array',
            'locales' => 'array',
            'order_data' => 'array',
            'selected_id' => 'filled',
            'order_by' => 'filled'
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
