function execQuery(
    objConexao,
    ds_query,
    fnCallBackResult
) {
    return new Promise(
        function (resolve, reject) {
            objConexao.connect();

            objConexao.query(
                ds_query,
                function (error, arrColunas) {
                    objConexao.end();

                    if (error){
                        reject(error);
                        return;
                    }

                    resolve(
                        fnCallBackResult(
                            arrColunas,
                            resolve,
                            reject
                        )
                    );
                }
            );
        }
    );
}

function getDatabases(objConexao) {
    var ds_query = 'SHOW DATABASES';

    var fnCallBack = function(
        arrValores,
        resolve,
        reject
    ) {
        var arrDatabases  = arrValores.map(
            function(objColuna) {
                return {
                    ds_nome : objColuna.Database
                };
            }
        );

        resolve(arrDatabases);
    }

    return execQuery(
        objConexao,
        ds_query,
        fnCallBack
    );
}

function getDatabasesSchema(objConexao) {
    var ds_query = 'SELECT '
        + 'schema_name ds_data_base'
        + ', default_character_set_name as ds_default_character_set_name '
        + ', default_collation_name as ds_default_collation_name '
        + ' FROM information_schema.schemata;'

    var fnCallBack = function(
        arrValores,
        resolve,
        reject
    ) {
        var arrDatabases  = arrValores.map(
            function(objColuna) {
                return {
                    ds_data_base : objColuna.ds_data_base,
                    ds_default_character_set_name : objColuna.ds_default_character_set_name,
                    ds_default_collation_name : objColuna.ds_default_collation_name
                };
            }
        );

        resolve(arrDatabases);
    }

    return execQuery(
        objConexao,
        ds_query,
        fnCallBack
    );
}

module.exports = {
    getDatabases: getDatabases,
    getDatabasesSchema: getDatabasesSchema
};