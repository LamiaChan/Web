<body>
<div class="container">
    
    
    <div style="margin-top:20px;" class="row">
    <!-- print row -->
    <?php 
        $result = $mysqli->query("SELECT * FROM `group` WHERE `id` > 1 AND `relevance` = 1 ORDER BY `position_order`");
        while ($row = $result->fetch_assoc()) {
            echo '
                <div class="col">
                    <div class="card" style="width: 18rem;">
                        <img src="manga_dirs/'. $row[""] .'" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">'. $row[""] .'</h5>
                            </div>
                        </div>
                    </div>
                    ';
        }
    ?>

    <!-- end -->
    </div> 


</div> 

