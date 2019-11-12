<!-- test php file -->
<?php

require_once(__DIR__.'../../web/core/Manga.php');

$manga = new Manga();

$dirs = $manga->ShowDirs('wolf_and_spice/');

echo '<form method="post"><select name="manga-dir">';
foreach ($dirs as $value){
    echo '<option value="' . $value . '">' . $value . '</option>';
}
echo '</select>';
echo '<input type="submit"></form>';

if(!empty($_POST))
{
    $manga->ForwardingToSite();
}




?>