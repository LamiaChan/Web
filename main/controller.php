<?php

   namespace Main;

   use exception;


   class Controller extends Model{

      private $name;
      private $description;

      function __construct(){
         $this->name             = isset($_POST['manga_name']) ? $_POST['manga_name'] : null;
         $this->description      = isset($_POST['description']) ? $_POST['description'] : null;
      }

      public function AddManga(){
         $manga_content = [];

         if (empty($this->name)){
            
            throw new Exception("Empty Post not allowed. Manga name is empty");

         } else {
            array_push($manga_content, $this->name);
         }

         if (empty($this->description)){

            throw new Exception("Empty Post not allowed. Description is empty");
         
         } else {
            array_push($manga_content, $this->description);
         }

         //mkdir(MAIN. '/manga_dirs/'. str_replace(" ", "_", $this->name), 0777);

         $model = new Model;

         $model->CollectManga($manga_content[0], $manga_content[1]);
         
      }

}

 ?>
