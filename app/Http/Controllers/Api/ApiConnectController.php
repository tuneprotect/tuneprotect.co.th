<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Api\Base\BaseApiController;


class ApiConnectController extends BaseApiController
{
    public function myHomeSmartPackage(){
        header('Content-Type: application/json'); // Specify the type of data
        $ch = curl_init('http://10.8.9.2:8002/api/WEBSITE/myHomeSmartPackage'); // Initialise cURL
        //$post = json_encode($post); // Encode the data array into a JSON string
        $authorization = "Authorization: Bearer VFBUV0VCU0lURTpnU01vTENiTjZHUmdFSXo3"; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); // Specify the request method as POST
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $post); // Set the posted fields
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // This will follow any redirects
        $result = curl_exec($ch); // Execute the cURL statement
        curl_close($ch); // Close the cURL connection
        //dd($result);
        return json_encode($result); // Return the received data
      
    }
    public function myHomeSmartPackage1y(){
        header('Content-Type: application/json'); // Specify the type of data
        $ch = curl_init('http://10.8.9.2:8002/api/WEBSITE/myHomeSmartPackage1y'); // Initialise cURL
        //$post = json_encode($post); // Encode the data array into a JSON string
        $authorization = "Authorization: Bearer VFBUV0VCU0lURTpnU01vTENiTjZHUmdFSXo3"; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); // Specify the request method as POST
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $post); // Set the posted fields
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // This will follow any redirects
        $result = curl_exec($ch); // Execute the cURL statement
        curl_close($ch); // Close the cURL connection
        //dd($result);
        return json_encode($result); // Return the received data
      
    }
    public function myHomeSmartPackage3y(){
        header('Content-Type: application/json'); // Specify the type of data
        $ch = curl_init('http://10.8.9.2:8002/api/WEBSITE/myHomeSmartPackage3y'); // Initialise cURL
        //$post = json_encode($post); // Encode the data array into a JSON string
        $authorization = "Authorization: Bearer VFBUV0VCU0lURTpnU01vTENiTjZHUmdFSXo3"; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); // Specify the request method as POST
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $post); // Set the posted fields
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // This will follow any redirects
        $result = curl_exec($ch); // Execute the cURL statement
        curl_close($ch); // Close the cURL connection
        //dd($result);
        return json_encode($result); // Return the received data
      
    }
    public function blockHomePolicy(){
        header('Content-Type: application/json'); // Specify the type of data
        $ch = curl_init('http://10.8.9.2:8002/api/WEBSITE/blockHomePolicy'); // Initialise cURL
        //$post = json_encode($post); // Encode the data array into a JSON string
        $authorization = "Authorization: Bearer VFBUV0VCU0lURTpnU01vTENiTjZHUmdFSXo3"; // Prepare the authorisation token
        //$authorization = "Authorization: Bearer VFBUV0VCU0lURTpUUFRXRUJTSVRFQDEyMw=="; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); // Specify the request method as POST
        //curl_setopt($ch, CURLOPT_POSTFIELDS, $post); // Set the posted fields
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // This will follow any redirects
        $result = curl_exec($ch); // Execute the cURL statement
        curl_close($ch); // Close the cURL connection
        //dd($result);
        return json_encode($result); // Return the received data
      
    }
    public function chkAirAsiaMemberID(){
        header('Content-Type: application/json'); // Specify the type of data
        $ch = curl_init('http://10.8.9.2:8002/api/WEBSITE/AirAsiaValidateMember'); // Initialise cURL
        //$post = json_encode($post); // Encode the data array into a JSON string
        $post = [
            'memberId' => '9999990005235411',
        ];
        $authorization = "Authorization: Bearer VFBUV0VCU0lURTpnU01vTENiTjZHUmdFSXo3"; // Prepare the authorisation token
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json' , $authorization )); // Inject the token into the header
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, 1); // Specify the request method as POST
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post)); // Set the posted fields
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1); // This will follow any redirects
        $result = curl_exec($ch); // Execute the cURL statement
        curl_close($ch); // Close the cURL connection
        //dd($result);
        return json_encode($result); // Return the received data
      
    }
}
