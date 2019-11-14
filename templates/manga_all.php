<?php 
    if ($manga_elms == NULL) {

        include MAIN.'/templates/404_error.php';

    } else {

        echo '<pre>'; 
        print_r($manga_elms); 
        echo '</pre>';
        
    } 
?>