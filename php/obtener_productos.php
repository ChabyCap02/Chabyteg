
<?php


$inc = include('conexion.php');
if($inc){
    $consulta = 'SELECT * from products';
    $resultado = mysqli_query($conex,$consulta);

    $products = array();

    if ($resultado->num_rows > 0) {
        while($row = $resultado->fetch_assoc()) {
            $products[] = $row;
        };
    };

    echo json_encode($products);
    
};
?>

<script src="main.js"></script>
