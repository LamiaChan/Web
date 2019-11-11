<!-- test php file -->

<form method='post'>

    <select name="manga-site">
        <option value="mangachan">mangachan</option>
        <option value="readmanga">readmanga</option>
    </select>

    <input type="send" name="sender" />
    <input type="submit"> 

</form>

<?php

require_once(__DIR__.'../../web/core/Manga.php');
$manga = new Manga();

// Доделать
$dirs = $manga->ShowManga();
echo '<form method="post"><select name="manga-dir">';
foreach ($dirs as $value){
    echo '<option value="' . $value . '">' . $value . '</option>';
}
echo '</select>';
echo '<input type="submit"></form>';
// Доделать

if(!empty($_POST))
{
    $manga->DownloadManga();
}




?>