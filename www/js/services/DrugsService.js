
var drugs = [
  {
    id: 1,
    name: "Losartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  },
  {
    id: 2,
    name: "Valsartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  },
  {
    id: 3,
    name: "Irbesartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  },
  {
    id: 4,
    name: "Candesartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  },
  {
    id: 5,
    name: "Telmisartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  },
  {
    id: 6,
    name: "Olmesartan",
    indications: "",
    counterIndications: "",
    sideEffects: ""
  }];

var dosageEquivalents = [
  {
    drugId: 1,
    dosages: [
      { index: 0, dosage: "25 mg" },
      { index: 1, dosage: "50 mg" },
      { index: 2, dosage: "100 mg" }
    ],
  },
  {
    drugId: 2,
    dosages: [
      { index: 0, dosage: "40 mg" },
      { index: 1, dosage: "80 mg"},
      { index: 2, dosage: "160 mg" }
    ],
  },
  {
    drugId: 3,
    dosages:
    [
      { index: 0, dosage: "75 mg" },
      { index: 1, dosage: "150 mg" },
      { index: 2, dosage: "300 mg"}
    ],
  },
  {
    drugId: 4,
     dosages: [
      { index: 0, dosage: "4 mg" },
      { index: 1, dosage: "8 mg" },
      { index: 2, dosage: "16 mg" }
    ],
  },
  {
    drugId: 5,
     dosages: [
      { index: 0, dosage: "20 mg" },
      { index: 1, dosage: "40 mg" },
      { index: 2, dosage: "40-80 mg" }
    ], 
  },
  {
    drugId: 6,
    dosages:
    [
      { index: 0, dosage: "10 mg" },
      { index: 1, dosage: "20 mg" },
      { index: 2, dosage: "20-40 mg"}
    ],
    
  }];

// service for obtaining information on drugs and doing conversions in treatment
angular.module("calculator.services", []).factory("drugsService", function () {

  var sourceDrug;
  var targetDrug;
  var sourceDrugDosage;

  return {
    getSourceDrugs: function () {
      return drugs;
    },
    getTargetDrugs: function () {
      // return the collection of drugs without the selected source drug
      /*if (sourceDrug === null) {
        return drugs;
      }*/
      return drugs;

     /* return drugs.filter(function (drug) {
        return drug.id !== sourceDrug.id;
      });*/
    },
    getSourceDrug: function(){
      return sourceDrug === undefined ? drugs[0] : sourceDrug;
    },
    setSourceDrug: function (drug) {
      sourceDrug = drug;
    },
    getTargetDrug: function(){
      return targetDrug === undefined ? drugs[0] : targetDrug;
    },
    setTargetDrug: function (drug) {
      targetDrug = drug;
    },
    getSourceDrugDosage: function(){
      return sourceDrugDosage;
    },
    setSourceDrugDosage: function (dosage) {
      sourceDrugDosage = dosage;
    },

    getDrugDosages: function(drug){
      for(i=0; i < dosageEquivalents.length; i++ ){
        if (dosageEquivalents[i].drugId == drug.id){
          return dosageEquivalents[i].dosages;
        }
      }
    },

    getSourceDrugDosages: function(){
      return this.getDrugDosages(this.getSourceDrug());
    }    
  }
});