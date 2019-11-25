<body>
<div class="container">
    
    
    <div style="margin-top:20px;" class="row">
    <!-- print row -->
    <?php 
        $sth = $pdo->prepare("SELECT * FROM manga_content");
        $sth->execute();

        while ($row = $sth->fetch(PDO::FETCH_ASSOC)) {
            echo '
                <div class="col">
                 <a href="#" style="text-decoration:none;color:black;">
                    <div class="card" style="width: 18rem;">
                        <img src="manga_dirs/'. $row["preview_image"] .'" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">'. $row["name"] .'</h5>
                            </div>
                        </div>
                     </a>
                    </div>
                    ';
        }
    ?>

    <!-- end -->
    </div> 


</div> 

