<?php

   namespace Main;
   use PDO;

   class Model {

      public function CollectManga($manga_url){
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

         chdir('main');

         $fp = fopen('manga_title.txt', 'w');

         fwrite($fp, $manga_url);

         $command = shell_exec('python readmanga.py');
         echo $command;

         $manga_name = explode('/', $manga_url);
         $description = '';

         $data = [
            'name' => $manga_name,
            'description' => $description,
            #'image' => $img,
        ];

        $sql = "INSERT INTO manga_content (name, description) VALUES (:name, :description)";
        $stmt= $pdo->prepare($sql);
        $stmt->execute($data);
      }

}

 ?>
