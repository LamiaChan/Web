<?php

   namespace Main;
   use PDO;

   class Model {

      public function ApiPdo(){
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
               array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
         return $pdo;
      }

      public function CollectManga($manga_name, $description){ 
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));


         $data = [
            'name'            => $manga_name,
            'description'     => $description,
         ];

         $sql = "INSERT INTO manga_content (name, description) VALUES (:name, :description)";
         $stmt= $pdo->prepare($sql);
         $stmt->execute($data); 
      }

}

 ?>
