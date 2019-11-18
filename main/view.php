<?php

   namespace Main;
   use PDO;
   use exception;

   class View extends Controller {

    public function MainPage($usr_stat){
        if ($usr_stat == NULL || $usr_stat == ''){
            include MAIN.'/templates/main_page_visitor.php';
        } else {
            include MAIN.'/templates/main_page.php';
        }
    }

    public function AllManga(){
        $manga_elms = [];

        $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        $result = $pdo->query("SELECT * FROM `manga_content`");

        if ($result == TRUE){
            while ($row = $result->fetch()) {
                array_push($manga_elms, [
                    'title' => $row['name'], 
                    'description' => $row['description'],
                    ]);
            }

            include MAIN.'/templates/manga_all.php';
        }
    }

    public function MangaDetail($manga_name){
        $manga_elms = [];

        $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '',
                     array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        $result = $pdo->prepare("SELECT * FROM `manga_content` WHERE name = :name");

        $result->execute(['name' => $manga_name]);

        if ($result == TRUE){
            while($row = $result->fetch()){
                array_push($manga_elms, [
                    'title' => $row['name'], 
                    'description' => $row['description'],
                    ]);

            }

            include MAIN.'/templates/manga_detail.php';

        } else {
            throw new Exception("Manga Not Found");
        }

    }
    public function AddManga() {
        include MAIN.'/templates/add_manga.php';

        $controller = new Controller;

        $controller->AddManga();
    }
}

 ?>
