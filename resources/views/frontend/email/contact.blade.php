<!DOCTYPE html>
<html lang="{{app()->getLocale()}}">
<head>
    <meta charset="utf-8" />
</head>
<body>


<table>
    @foreach($data as $k => $v)
    <tr>
        <th>{{$k}}</th>
        <td>{{$v}}</td>
    </tr>
    @endforeach
</table>


</body>
</html>
