<?php

   namespace Main;
   use PDO;

   class Model {

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
            'dir'             => $manga_name[3],
            'preview_image'   => $img,
        ];

        print_r($manga_name);
        
        $sql = "INSERT INTO manga_content (name, description) VALUES (:name, :description)";
        $stmt= $pdo->prepare($sql);
        $stmt->execute($data);
      }

      public function CollectManga($manga_name, $description, $preview_image){ 
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

         $dir = str_replace(" ", "_", $manga_name);

         $data = [
            'name'            => $manga_name,
            'description'     => $description,
            'dir'             => $dir,
            'preview_image'   => $img,
         ];
         echo '<pre>';
         print_r($data);
         echo '</pre>';
         /*
         $sql = "INSERT INTO manga_content (name, description, dir, preview_image) VALUES (:name, :description, :dir, :preview_image)";
         $stmt= $pdo->prepare($sql);
         $stmt->execute($data); */
      }

}

 ?>
