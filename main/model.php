<?php

   namespace Main;
   use PDO;

   class Model {

      public function ApiPdo(){
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
               array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
         return $pdo;
      }

      public function CollectMangaUsingParser($manga_url){
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

         chdir('main');

         $fp = fopen('manga_title.txt', 'w');

         fwrite($fp, $manga_url);

         $manga_name = explode('/', $manga_url);
         $description = '';

         if ($manga_name[2] == 'readmanga.me'){

            $command = shell_exec('python readmanga.py');
            echo $command;

         }

         if ($manga_name[2] == 'manga-chan.me'){
            
            $command = shell_exec('python mangachan.py');
            echo $command;
         }

         $data = [
            'name'            => $manga_name[3],
            'description'     => $description,
            'preview_image'   => $img,
        ];

        //TODO доделать preview_image
        
        $sql = "INSERT INTO manga_content (name, description, preview_image) VALUES (:name, :description, :preview_image)";
        $stmt= $pdo->prepare($sql);
        $stmt->execute($data);
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
