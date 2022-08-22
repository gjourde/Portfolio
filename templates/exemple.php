<?php
// Création de la connection
try
{
    $db = new PDO(
        'mysql:host=localhost;dbname=portfolio;charset=utf8',
        'root',
        'root',
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
    );
    
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
?>

<?php
// On récupère tout le contenu de la table recipes
$sqlQuery = 'SELECT * FROM skills';
$skillsStatement = $db->prepare($sqlQuery);
$skillsStatement->execute();
$skills = $skillsStatement->fetchAll();
// On affiche chaque recette une à une
foreach ($skills as $skill) {
?>
<p>
    <?php echo $skill['skill_name']; ?>
</p>
<p>
    <?php echo $skill['skill_lvl']; ?>
</p>
<?php
}
?> 