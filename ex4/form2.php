<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Ravit's PHP form</title>
        </head>
    <body>
        <?php
            $name = $_GET["name"]; 
            $color = $_GET["color"]; 
                
             if ($name == "BMW" && $color == "red"){
                echo "<h1>" .$color .$name. "</h1>" ;
                echo "<h2> Good choise! </h2>"  ;
             }
                else
                    echo "<h1>Sorry we dosen't have that in stock </h1>";
        ?>
    </body>
</html>