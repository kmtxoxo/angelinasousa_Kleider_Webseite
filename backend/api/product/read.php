<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../../config/database.php';
include_once '../../objects/product.php';
 
// instantiate database and product object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$product = new Product($db);
 

// query products
$stmt = null;
if(isset($_GET['groesse']) && isset($_GET['name']) && isset($_GET['kategorie'])) {
	$stmt = $product->readByNameAndGroesse($_GET['name'],
											$_GET['groesse'],
											$_GET['kategorie']);
}
elseif(isset($_GET['name']) && isset($_GET['kategorie'])) {
	$stmt = $product->readByName($_GET['name'],$_GET['kategorie']);
}elseif(isset($_GET['kategorie'])) {
	$stmt = $product->readByKategorie($_GET['kategorie']);
}else{
	$stmt = $product->read();
}
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // products array
    $products_arr=array();
    $products_arr["data"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $product_item=array(
            "artikelnummer" => $artikelnummer,
            "name" => $name,
			"farbe" => $farbe,
			"groesse" => $groesse,
			"material" => $material,
			"hauptbild" => $hauptbild,
			"thumbnail1" => $thumbnail1,
			"thumbnail2" => $thumbnail2,
            "beschreibung" => html_entity_decode($beschreibung),
            "preis" => $preis,
            "kategorie" => $kategorie,
            "kollektion" => $kollektion
        );
 
        array_push($products_arr["data"], $product_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show products data in json format
    echo json_encode($products_arr);
}
 else{ // no products found will be here
 
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no products found
    echo json_encode(
        array("message" => "No products found.")
    );
}
