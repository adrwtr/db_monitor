function LerDatabases(
    objMysql,
    objConexao
) {
    var objPromessaDatabaseSchema = objMysql.getDatabasesSchema(objConexao);

    objPromessaDatabaseSchema.then(
        function(arrDatabase) {
            console.log(arrDatabase);
        }
    );
}


module.exports = {
    LerDatabases: LerDatabases
};