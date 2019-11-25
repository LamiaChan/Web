<?php

   namespace Main;

   use exception;


   class Controller extends Model {

      private $name;
      private $description;
      private $img;

      function __construct(){
         $this->name             = isset($_POST['manga_name']) ? $_POST['manga_name'] : null;
         $this->description      = isset($_POST['description']) ? $_POST['description'] : null;
         $this->image_contaner   = isset($_POST['image_contaner']) ? $_POST['image_contaner']: null;
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

         if (empty($this->image_contaner)){

            throw new Exception("Empty Post not allowed. Preview Image is empty");
         
         } else {


            array_push($manga_content, $this->image_contaner);
         }

         $model = new Model;

         $model->CollectManga($manga_content[0], $manga_content[1], $manga_content[2]);
         
      }

}

 ?>