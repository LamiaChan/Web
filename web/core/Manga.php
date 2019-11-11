<?php

/* Manga class */

class Manga {

    private $title_url;
    private $manga_site_selector;

    function __construct()
    {
        $this->title_url = isset($_POST['sender']) ? $_POST['sender'] : null;
        $this->manga_site_selector = isset($_POST['manga-site']) ? $_POST['manga-site'] : null;
    }

    // python download function for manga

    function DownloadManga() 
    {

        if (empty($this->title_url) || empty($this->manga_site_selector)) {
            throw new Exception("Empty Post not allowed");

        } else {

            $file = 'manga_title.txt';
            if ($this->manga_site_selector == 'readmanga'){
                    file_put_contents($file, $this->title_url);
                        $command = escapeshellcmd('python readmanga.py ');
                        $output = shell_exec($command);
                        echo $output;
            } else {
                    file_put_contents($file, $this->title_url);
                        $command = escapeshellcmd('python mangachan.py ');
                        $output = shell_exec($command);
                        echo $output;
            }

        }
    }

    // show manga

    function ShowManga()
    {
        $command = escapeshellcmd('python MangaDirs.py');
        $output = shell_exec($command);
        echo $output;
        
    }

    

}