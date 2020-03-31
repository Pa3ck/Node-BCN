
var localWsdl = './ServicioTC.wsdl';

var soap = require('soap');
var https = require('https');
var constants = require('constants');

var localWsdl = './ServicioTC.wsdl';

soap.createClientAsync(localWsdl).then((client) => {
    client.setSecurity({
        addOptions: function(options) {
            options.rejectUnauthorized = false;
            options.secureOptions = constants.SSL_OP_NO_TLSv1_2;
            options.strictSSL = false;
            options.agent = new https.Agent(options);
        },
        toXML: function() {
          return '';
        }
      });

      var mesArgs = {Ano: 2020, Mes: 3};
        client.RecuperaTC_Mes(mesArgs, function(err, result) {
            if(!err){
                console.log(result.RecuperaTC_MesResult.Detalle_TC.Tc)
            }else{
                console.log(err);
            } 
        });

        var diaArgs = {Ano: 2020, Mes: 3, Dia:31};
        client.RecuperaTC_Dia(diaArgs, function(err, result) {
            if(!err){
                console.log(result.RecuperaTC_DiaResult);
            }else{
                console.log(err);
            } 
        });

}).catch((err) => {
    console.log(err);
})
