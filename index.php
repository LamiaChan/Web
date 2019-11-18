<form method='post'>

    <input type="text" name="manga_name">
    
    <br> <br>
    
    <input type="text" name="description">

    <br> <br>

    <input type="submit"> 

</form>

<?php

include 'LoadClass.php';

if(!empty($_POST))
{
    $view->AddManga();
}

?>