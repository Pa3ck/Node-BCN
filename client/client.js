"use strict";
var soap = require('soap');
var https = require('https');
var constants = require('constants');

class ClientBCN{
/*
    constructor(wsdlFile, mensaje){
        console.log('entra al constructor');
        soap.createClientAsync(wsdlFile).then((client) => {
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

              //Asignar client;
              this.openClient = client;
              this.mensaje = mensaje;

              console.log(this.mensaje);
        }).catch((err) => {
            console.log(err);
        })
    }
*/
/*
    constructor(wsdlFile, msg){
        console.log('entra al constructor 1' + msg);
        soap.createClient(wsdlFile, function(err, client) {
            console.log('create client 2' + msg);
            if(!err){
                console.log('no hay error 3' + msg);
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
            }
            //Asignar client;
            //this.openClient = client;
            //this.mensaje = 'Sync';
            //console.log(this.mensaje + ' 4');
        })
    };
*/
    constructor(name){
        this.name = name;
    };

    static async build(wsdlFile){
        return soap.createClientAsync(wsdlFile).then((client) => {
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

              //Asignar client;
              this.openClient = client;
              this.mensaje = mensaje;

              console.log(this.mensaje);
        }).catch((err) => {
            console.log(err);
        })
    };



    getTcMes(year, month){
        var mesArgs = {Ano: year, Mes: month};
        this.openClient.RecuperaTC_Mes(mesArgs, function(err, result) {
            if(!err){
                return result.RecuperaTC_MesResult.Detalle_TC.Tc;
            }else{
                console.log(err);
            } 
        });
    };

    getTcDia(year, month, day){
        console.log(this.mensaje);
        var diaArgs = {Ano: year, Mes: month, Dia:day};
        this.openClient.RecuperaTC_Dia(diaArgs, function(err, result) {
            if(!err){
                return result.RecuperaTC_DiaResult;
            }else{
                console.log(err);
            } 
        });
    };
}

module.exports = ClientBCN;