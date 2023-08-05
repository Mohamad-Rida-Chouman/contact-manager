<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|string',
            'phone_number'=>'required|unique:contacts,phone_number|numeric',
            'latitude'=>'numeric',
            'longitude'=>'numeric',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),500);
        }

        $contact = Contact::create($request->all());
        return response()->json($contact, 200);
    }

    public function show(Contact $contact)
    {
        return response()->json($contact, 200);
    }

    public function update(Request $request, Contact $contact)
    {
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'phone_number' => 'required|unique:contacts,numeric',
            'latitude' => 'decimal',
            'longitude' => 'decimal',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(), 500);
        }

        $contact = Contact::create($request->all());
        return response()->json($contact, 200);
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return response()->json('', 200);
    }

    public function assignToUser(Request $request, Contact $contact){
        $userId = $request->get('user_id');
        if($userId){
            $contact->userContacts()->sync($userId);
        }
    }
}