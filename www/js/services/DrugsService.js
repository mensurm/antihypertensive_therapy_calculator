
var drugs = [
  {
    id: 1,
    name: "Losartan",
    indications: ["Hypertension", "Hypertensive Patients with Left Ventricular Hypertrophy", "Nephropathy in Type 2 Diabetic Patients"],
    counterIndications: ["In patients who are hypersensitive to any component of this product", "For coadministration with aliskiren in patients with diabetes",
"Use of drugs that act on the renin-angiotensin system during the second and third trimesters of pregnancy reduces fetal renal function and increases fetal and neonatal morbidity and death"],
    sideEffects: "",
  },
  {
    id: 2,
    name: "Valsartan",
    indications: ["Treatment of hypertension, to lower blood pressure", "Treatment of heart failure (NYHA class II-IV)", "Post myocardial infarction"],
    counterIndications: ["Do not use in patients with known hypersensitivity to any component", "Use of drugs that act on the renin-angiotensin system during the second and third trimesters of pregnancy reduces fetal renal function and increases fetal and neonatal morbidity and death",
                        "Do not coadminister aliskiren with Diovan in patients with diabetes"],
    sideEffects: ""
  },
  {
    id: 3,
    name: "Irbesartan",
    indications: ["Aprovel is indicated in adults for the treatment of essential hypertension",
                  "It is also indicated for the treatment of renal disease in adult patients with hypertension and type 2 diabetes mellitus as part of an antihypertensive medicinal product regimen"],
    counterIndications: ["Hypersensitivity to the active substance", "Second and third trimesters of pregnancy", 
                        "The concomitant use of Aprovel with aliskiren-containing products is contraindicated in patients with diabetes mellitus or renal impairment"],
    sideEffects: ""
  },
  {
    id: 4,
    name: "Candesartan",
    indications: ["Hypertension", "Heart failure"],
    counterIndications: ["ATACAND is contraindicated in patients who are hypersensitive to candesartan",
                        "Do not co-administer aliskiren with ATACAND in patients with diabetes",
                        "Use of drugs that act on the renin-angiotensin system during the second and third trimesters of pregnancy reduces fetal renal function and increases fetal and neonatal morbidity and death"],
    sideEffects: ""
  },
  {
    id: 5,
    name: "Telmisartan",
    indications: ["Hypetension", "Cardiovascular Risk Reduction"],
    counterIndications: ["MICARDIS is contraindicated in patients with known hypersensitivity (e.g., anaphylaxis or angioedema) to telmisartan or any other component of this product",
                        "Do not co-administer aliskiren with MICARDIS in patients with diabetes",
                        "Use of drugs that act on the renin-angiotensin system during the second and third trimesters of pregnancy reduces fetal renal \
                        function and increases fetal and neonatal morbidity and death. Resulting oligohydramnios can be associated with fetal lung \
                        hypoplasia and skeletal deformations. Potential neonatal adverse effects include skull hypoplasia, anuria, hypotension, renal failure, and death"],
    sideEffects: ""
  },
  {
    id: 6,
    name: "Olmesartan",
    indications: ["Hypertension"],
    counterIndications: ["Do not co-administer aliskiren with Benicar in patients with diabetes",
                        "Pregnancy Category D",
                        "Use of drugs that act on the renin-angiotensin system during the second and third trimesters of pregnancy reduces \
                        fetal renal function and increases fetal and neonatal morbidity and death"],
    sideEffects: ""
  }];

var drugDosages = [
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

  var sourceDrug = null;
  var targetDrug  = null;
  var sourceDrugDosage = null;

  return {
    getSourceDrugs: function () {
      return drugs;
    },
    getTargetDrugs: function () {
      if (sourceDrug === null){
        return drugs;
      }
        return drugs.filter(function (drug) {
          return drug.id !== sourceDrug.id;
      });
    },

    getSourceDrug: function(){
      return sourceDrug;
    },
    setSourceDrug: function (drug) {
      sourceDrug = drug;
      targetDrug = this.getTargetDrugs[0];
    },
    getTargetDrug: function(){
      return targetDrug;
    },
    setTargetDrug: function (drug) {
      targetDrug = drug;
    },
    getSourceDrugDosage: function(){
      if (sourceDrugDosage !== null){
        return sourceDrugDosage;
      } 
      else {
        return this.getDrugDosages(this.getSourceDrug())[0];
      } 
    },
    setSourceDrugDosage: function (dosage) {
      sourceDrugDosage = dosage;
    },

    getDrugDosages: function(drug){
      for(i=0; i < drugDosages.length; i++ ){
        if (drugDosages[i].drugId == drug.id){
          return drugDosages[i].dosages;
        }
      }
    },

    getSourceDrugDosages: function(){
      return this.getDrugDosages(this.getSourceDrug());
    },

    getTargetDrugDosage: function(){
      var sourceDrugDosage = this.getSourceDrugDosage();
      var targetDrug = this.getTargetDrug();
      
      var targetDrugDosages = this.getDrugDosages(targetDrug);
      return targetDrugDosages[sourceDrugDosage.index];
    }   
  }
});