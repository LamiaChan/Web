<form method='post'>

    <select name="manga-site">
        <option value="mangachan">mangachan</option>
        <option value="readmanga">readmanga</option>
    </select>

    <input type="send" name="sender" />
    <input type="submit"> 

</form>

<?php

$title_url = $_POST['sender'];

$manga_site_selector = $_POST['manga-site'];

$file = 'manga_title.txt';

if ($manga_site_selector == 'readmanga'){

        file_put_contents($file, $title_url);

        if (isset($title_url)){

            $command = escapeshellcmd('python readmanga.py ');
            $output = shell_exec($command);

            echo $output;
        }

} else {

        file_put_contents($file, $title_url);

        if (isset($title_url)){

            $command = escapeshellcmd('python mangachan.py ');
            $output = shell_exec($command);

            echo $output;
        }

}
?>