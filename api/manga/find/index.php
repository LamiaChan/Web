<?php

include '../../../LoadClass.php';

function show($search, $pdo){

    $data = ['search' => '%'. $search .'%'];

    $sth = $pdo->prepare("SELECT * FROM manga_content WHERE name LIKE :search ORDER BY id");
    $sth->execute($data);
    
    $pdo_result = [];

        while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
            $row_selection = array(
                'id'            => $row['id'], 
                'name'          => $row['name'], 
                'description'   => $row['description'],
            );
            array_push($pdo_result, $row_selection);
        }
    return json_encode($pdo_result);
}

$search     = $_GET['search'];
$pdo    = $model->ApiPdo();

$result = show($search, $pdo);

print_r($result);

