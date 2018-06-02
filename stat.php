<?php
    $str=$_POST['datastream'];
    $dataSet=explode(" ",$str);
    median($dataSet);
    function median($data)
    {
        sort($data);
        //print_r($data);
        $n=count($data);
        if(count($data)%2==0)
        {
            echo $data[($n/2)-1];
        }
        else
        {
            echo $data[ceil($n/2)-1];
        }
    }
?>