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
if(!empty($_POST))
{
    $manga->DownloadManga();
}

?>