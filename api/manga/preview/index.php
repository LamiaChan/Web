<?php

include '../../../LoadClass.php';

function show($id, $pdo){

    $data = ['id' => $id];

    $sth = $pdo->prepare("SELECT * FROM manga_content WHERE id = :id ");
    $sth->execute($data);


        while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
            $pdo_result = array(
                'id'            => $row['id'], 
                'name'          => $row['name'], 
                'description'   => $row['description']
            );
        }

    return json_encode($pdo_result);
}

$id     = $_GET['id'];
$pdo    = $model->ApiPdo();

$result = show($id, $pdo);

echo $result;
