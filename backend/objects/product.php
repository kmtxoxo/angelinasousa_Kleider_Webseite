<?php
class Product{
 
    // database connection and table name
    private $conn;
    private $table_name = "kleid";
 
    // object properties
    public $artikelnummer;
    public $name;
    public $preis;
    public $farbe;
    public $groesse;
    public $beschreibung;
    public $material;
	public $hauptbild;
	public $thumbnail1;
	public $thumbnail2;
	public $kollektion;
	public $kategorie;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
	// read products
function read(){
 
    // select all query
    $query = "SELECT
                *
            FROM
                " . $this->table_name . " GROUP BY NAME";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}

function readByKategorie($produktKategorie){
 
    // select all query
    $query = "SELECT
                *
            FROM
                " . $this->table_name . "
			WHERE kategorie = :produktKategorie GROUP BY NAME";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute([':produktKategorie' => $produktKategorie]);
 
    return $stmt;
}

function readByName($produktName,$produktKategorie){
 
    // select all query
    $query = "SELECT
                *
            FROM
                " . $this->table_name . "
			WHERE
				kategorie = :produktKategorie
			AND
				name = :produktName GROUP BY GROESSE";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute([':produktName' => $produktName, ':produktKategorie' => $produktKategorie]);
 
    return $stmt;
}
function readByGroesseAndName($produktName,$produktGroesse,$produktKategorie){
 
    // select all query
    $query = "SELECT
                *
            FROM
                " . $this->table_name . "
			WHERE
				kategorie = :produktKategorie
			AND
				name = :produktName
			AND
				groesse = :produktGroesse GROUP BY NAME";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute([':produktName' => $produktName, ':produktKategorie' => $produktKategorie, ':produktGroesse' => $produktGroesse]);
 
    return $stmt;
}
}