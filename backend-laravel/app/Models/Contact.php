<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name', 'phone_number', 'latitude', 'longitude',
    ];

    public function userContacts(){
        return $this->belongsToMany(User::class, 'contacts_users', 'contact_id', 'user_id')->withTimeStamps();
    }
}