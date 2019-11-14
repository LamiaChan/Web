<?php

/* Manga class */

class Manga {

    private $title_url;
    private $manga_site_selector;

    function __construct()
    {
        $this->title_url = isset($_POST['sender']) ? $_POST['sender'] : null;
        $this->manga_site_selector = isset($_POST['manga-site']) ? $_POST['manga-site'] : null;
        $this->tosite = isset($_POST['manga-dir']) ? $_POST['manga-dir'] : null;
    }

    // python download function for manga

    function DownloadManga() 
    {
        $pdo = new PDO('mysql:host=localhost;dbname=lamia_chan', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

        if (empty($this->title_url) || empty($this->manga_site_selector)) {
            throw new Exception("Empty Post not allowed");

        } else {

            $file = 'manga_title.txt';
            if ($this->manga_site_selector == 'readmanga'){
                
                $manga_name = explode('/', $this->title_url);
                $manga_name = $manga_name[3];

                $query = $pdo->prepare("INSERT INTO manga_content (manga_site, name, description)
                        VALUES (:manga_site, :name, :description)");
                
                $result = $query->execute([
                    ':manga_site' => $this->manga_site_selector, 
                    ':name' => $manga_name, 
                    ':description' => 'null',
                    ]);
                
                
                    file_put_contents($file, $this->title_url);
                        $command = escapeshellcmd('python readmanga.py ');
                        $output = shell_exec($command);
                        echo $output;
            } else {

                $manga_name = explode('/', $this->title_url);
                $manga_name = $manga_name[3];

                $query = $pdo->prepare("INSERT INTO manga_content (manga_site, name, description)
                        VALUES (:manga_site, :name, :description)");
                
                $result = $query->execute([
                    ':manga_site' => $this->manga_site_selector, 
                    ':name' => $manga_name, 
                    ':description' => 'null',
                    ]);
                    
                    file_put_contents($file, $this->title_url);
                        $command = escapeshellcmd('python mangachan.py ');
                        $output = shell_exec($command);
                        echo $output;
            }

        }
    }

    // show manga

    function ShowDirs($atr="")
    {

        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            $def_dir_sp = explode('\\', __DIR__);
        } else {
            $def_dir_sp = explode('/', __DIR__);
        }
        
        $i = 0;
        $def = '';

        while ($i != (count($def_dir_sp)- 2)){
            $def .= $def_dir_sp[$i];
            $def .= '/';
            $i = $i + 1;
        }

        if ($atr == ""){
            
            $def .= 'manga_dirs/';
        
        } else {

            $def .= 'manga_dirs/';
            $def .= $atr;
        }

        $manga_dirs = [];
        $dir_row = scandir($def);
        foreach($dir_row as $row =>$value){ 
            if(preg_match('/.txt/', $value, $matches)){
                continue;
            } else {
                array_push($manga_dirs, $value);
            }     
        }

        $manga_dirs = array_splice($manga_dirs, 2);

        return $manga_dirs;
        

    }
    
    function ForwardingToSite()
    {
        if (empty($this->tosite)) {
            throw new Exception("Empty Post not allowed");
        } else {
            
            if($this->tosite == 'mangachan' || $this->tosite == 'readmanga'){

                $manga_dirs = $this->ShowDirs($this->tosite);

                
            } else {
                throw new Exception("Site with name: " . $this->tosite . " dosen't exist");
            }
            
        }

        return($manga_dirs);
    }

}