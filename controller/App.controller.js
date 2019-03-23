sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function(Controller, JSONModel) {
    "use strict";
    return Controller.extend("tutor.controller.App", {
      onInit: function() {
        var oModel = new JSONModel({
          newOption: {
            sv: "1st"
          }
        });
        this.getView().setModel(oModel);
      },
      onShowHello: function() {
        var firstModel = this.getView().getModel();
        firstModel.setProperty("/newOption/sv", "new!!");
      }
    });
  }
);
