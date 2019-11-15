<?php

   namespace Main;
   use PDO;

   class Model {

      public function CollectMangaUsingParser($manga_url){
         $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

         chdir('main');

         var_dump($manga_url);

         $fp = fopen('manga_title.txt', 'w');

         fwrite($fp, $manga_url);

         $manga_name = explode('/', $manga_url);
         $description = '';

         $manga_domain = explode('.', $manga_name[2]);

         if ($manga_domain[0][2] == 'readmanga'){

            $command = shell_exec('python readmanga.py');
            echo $command;

         }

         if ($manga_domain[0][2] == 'mangachan'){
            
            $command = shell_exec('python mangachan.py');
            echo $command;
         }

         $data = [
            'name' => $manga_name[3],
            'description' => $description,
            #'image' => $img,
        ];

        $sql = "INSERT INTO manga_content (name, description) VALUES (:name, :description)";
        $stmt= $pdo->prepare($sql);
        $stmt->execute($data);
      }

}

 ?>
