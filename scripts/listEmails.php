<?php 
    include 'dbConnection.php';
                
    $query = mysqli_query($mysql, "SELECT id, email FROM clients"); 

    $html = "
            <table class='table table-hover'>
                <tr>
                    <th>Id</th>
                    <th>E-mail</th>
                </tr>
            ";

    while($result = mysqli_fetch_array($query)) {
       
        $html .= "
                    <tr>
                        <td> {$result['id']} </td>
                        <td> {$result['email']} </td>
                    </tr>
                ";
    
    } 

    $html .= "</table>";

    echo $html;
?>