import { LightningElement,api,track,wire } from 'lwc';
import getUserOnboardInfo from '@salesforce/apex/EMS_EM_CreationOnboard.getUserOnboardInfo'; 
import { getRecord, updateRecord, getFieldValue } from "lightning/uiRecordApi";
import CURRENT_ADDRESS_Line1 from "@salesforce/schema/EMS_EM_Onboarding_Request__c.Current_Address_Line_1__c";

export default class EMS_EM_Onboard_RcordPage extends LightningElement {
    @api recordId;
    @api objectApiName;
    personalEmail;
    Firstname;
    name;
    fathername;
    contactValue;
    mothername;
    contactnumber;
    alternatecontact;
    dateOfWedding;
    dateOfBirth;
    gender;
    maritualStatus;
    spousename;
    status;
    bloodGp;
    adhaarNo;
    panNo;
    passportNo;
    uanNo;
    natioality;
    permanentAddressLine1;
    permanentAddressLine2;
    CurrentAddressLine1;
    CurrentAddressLine2;
    permanentState;
    currentState;
    permanentZip;
    currentZip;
    currentCity;
    PermanentCity;
    displayItemList;
    levelOfEducation;
    levelOfEducation1;
    levelOfEducation2;
    levelOfEducation3;
    levelOfEducation4;
    levelOfEducation5;
    degree;
    degree1;
    degree2;
    degree3;
    degree4;
    degree5;
    fieldOfStudy;
    fieldOfStudy1;
    fieldOfStudy2;
    fieldOfStudy3;
    fieldOfStudy4;
    fieldOfStudy5;
    institutionName;
    institutionName1;
    institutionName2;
    institutionName3;
    institutionName4;
    institutionName5;
    graduationDate;
    graduationDate1;
    graduationDate2;
    graduationDate3;
    graduationDate4;
    graduationDate5;
    jobTitle;
    jobTitle1;
    jobTitle2;
    jobTitle3;
    jobTitle4;
    jobTitle5;
    fromDate;
    fromDate1;
    fromDate2;
    fromDate3;
    fromDate4;
    fromDate5;
    toDate;
    toDate1;
    toDate2;
    toDate3;
    toDate4;
    toDate5;
    PreviousCompanyName;
    PreviousCompanyName1;
    PreviousCompanyName2;
    PreviousCompanyName3;
    PreviousCompanyName4;
    PreviousCompanyName5;
    PreviousCompanyHrMailId;
    certifiationName;
    certifiationName1;
    certifiationName2;
    certifiationName3;
    certifiationName4;
    certifiationName5;
    certifiationName6;
    certifiationName7;
    certifiationName8;
    certifiationName9;
    certifiationName10;
    certifiationName11;
    certifiationName12;
    certifiationName13;
    certifiationName14;
    certifiationName15;
    certifiationName16;
    certifiationName17;
    certifiationName18;
    certifiationName19;
    certifiationName20;
    additionalEducation1=false;
    additionalEducation2=false;
    additionalEducation3=false;
    additionalEducation4=false;
    additionalEducation5=false;
    workExperience1=false;
    OtherCertificationDetails=false;
    OtherCertificationDetails1=false;
    OtherCertificationDetails2=false;
    OtherCertificationDetails3=false;
    OtherCertificationDetails4=false;
    OtherCertificationDetails5=false;
    OtherCertificationDetails6=false;
    OtherCertificationDetails7=false;
    OtherCertificationDetails8=false;
    OtherCertificationDetails9=false;
    OtherCertificationDetails10=false;
    OtherCertificationDetails11=false;
    OtherCertificationDetails12=false;
    OtherCertificationDetails13=false;
    OtherCertificationDetails14=false;
    OtherCertificationDetails15=false;
    OtherCertificationDetails16=false;
    OtherCertificationDetails17=false;
    OtherCertificationDetails18=false;
    OtherCertificationDetails19=false;

    @wire(getRecord, { recordId: "a0E8I000000XwPhUAK", fields: [CURRENT_ADDRESS_Line1] })
    account;
    

    get currentaddressline1() {
       console.log('this.account.data--->'+this.account.data);

       return getFieldValue(this.account.data, CURRENT_ADDRESS_Line1);
   }

  
    connectedCallback(){
        getUserOnboardInfo({recordId :this.recordId}).then( result => {
            console.log('result'+result);
            console.log('result'+JSON.stringify(result));
            this.displayItemList = JSON.parse(JSON.stringify(result));
           const employye = result;
           console.log('employye.LastName'+employye.EMS_EM_Last_Name__c); 
           this.Firstname=result.EMS_EM_First_Name__c;         
           this.name = result.EMS_EM_Last_Name__c;
           this.fathername=result.EMS_EM_Father__c;
           this.mothername=result.EMS_EM_Mother__c;
           this.contactnumber=result.Phone_Number__c;
           this.personalEmail=result.EMS_EM_Personal_Email__c;
           this.alternatecontact=result.EMS_EM_Phone_Number__c;
           this.dateOfWedding=result.EMS_EM_DOW__c;
           this.dateOfBirth=result.EMS_EM_DOB__c;
           this.gender=result.EMS_EM_Gender__c;
           this.maritualStatus=result.EMS_EM_Mstatus__c;
           this.spousename=result.EMS_EM_Spouse__c;
           this.status=result.Status__c;
           this.bloodGp=result.EMS_EM_BG__c;
           this.adhaarNo=result.EMS_EM_AadhaarNo__c;
           this.panNo=result.EMS_EM_PanNo__c;
           this.passportNo=result.EMS_EM_PassportNo__c;
           this.CurrentAddressLine1=result.Current_Address_Line_1__c;
           console.log( this.CurrentAddressLine1);
           this.CurrentAddressLine2=employye.Current_Address_Line_2__c;
           this.currentState=employye.EMS_EM_CA_State__c;
           this.currentZip=employye.EMS_EM_CA_Zip__c;
           this.permanentAddressLine1=result.Permanent_Address_Line_1__c;
           this.permanentAddressLine2=result.Permanent_Address_Line_2__c;
           this.permanentState=result.EMS_EM_PA_State__c;
           this.permanentZip=result.EMS_EM_PA_Zip__c;
           this.natioality=result.EMS_EM_Nationality__c;
           this.uanNo=result.EMS_EM_UAN_Number__c;
           this.currentCity=result.EMS_EM_CA_City__c;
           this.PermanentCity=result.EMS_EM_PA_City__c;
           this.levelOfEducation=result.EMS_EM_Education__c;
           this.levelOfEducation1=result.EMS_EM_Education1__c;
           this.levelOfEducation2=result.EMS_EM_Education2__c;
           this.levelOfEducation3=result.EMS_EM_Education3__c;
           this.levelOfEducation4=result.EMS_EM_Education4__c;
           this.levelOfEducation5=result.EMS_EM_Education5__c;
           this.degree=result.EMS_EM_Degree__c;
           this.degree1=result.EMS_EM_Degree1__c;
           this.degree2=result.EMS_EM_Degree2__c;
           this.degree3=result.EMS_EM_Degree3__c;
           this.degree4=result.EMS_EM_Degree4__c;
           this.degree5=result.EMS_EM_Degree5__c;
           this.fieldOfStudy=result.EMS_EM_Field_of_Study__c;
           this.fieldOfStudy1=result.EMS_EM_Field_of_Study1__c;
           this.fieldOfStudy2=result.EMS_EM_Field_of_Study2__c;
           this.fieldOfStudy3=result.EMS_EM_Field_of_Study3__c;
           this.fieldOfStudy4=result.EMS_EM_Field_of_Study4__c;
           this.fieldOfStudy5=result.EMS_EM_Field_of_Study5__c;
            this.institutionName=result.EMS_EM_IName__c;
            this.institutionName1=result.EMS_EM_IName1__c;
            this.institutionName2=result.EMS_EM_IName2__c;
            this.institutionName3=result.EMS_EM_IName3__c;
            this.institutionName4=result.EMS_EM_IName4__c;
            this.institutionName5=result.EMS_EM_IName5__c;
            this.graduationDate=result.EMS_EM_GDate__c;
            this.graduationDate1=result.EMS_EM_GDate1__c;
            this.graduationDate2=result.EMS_EM_GDate2__c;
            this.graduationDate3=result.EMS_EM_GDate3__c;
            this.graduationDate4=result.EMS_EM_GDate4__c;
            this.graduationDate5=result.EMS_EM_GDate5__c;
            this.jobTitle=result.EMS_EM_Job_Title__c;
            this.jobTitle1=result.EMS_EM_Job_Title1__c;
            this.jobTitle2=result.EMS_EM_Job_Title2__c;
            this.jobTitle3=result.EMS_EM_Job_Title3__c;
            this.jobTitle4=result.EMS_EM_Job_Title4__c;
            this.jobTitle5=result.EMS_EM_Job_Title5__c;
            this.fromDate=result.EMS_EM_From_Date__c;
            this.fromDate1=result.EMS_EM_From_Date1__c;
            this.fromDate2=result.EMS_EM_From_Date2__c;
            this.fromDate3=result.EMS_EM_From_Date3__c;
            this.fromDate4=result.EMS_EM_From_Date4__c;
            this.fromDate5=result.EMS_EM_From_Date5__c;
            this.toDate=result.EMS_EM_To_Date__c;
            this.toDate1=result.EMS_EM_To_Date1__c;
            this.toDate2=result.EMS_EM_To_Date2__c;
            this.toDate3=result.EMS_EM_To_Date3__c;
            this.toDate4=result.EMS_EM_To_Date4__c;
            this.toDate5=result.EMS_EM_To_Date5__c;
            this.PreviousCompanyName=result.EMS_EM_Previous_Company_Name__c;
            this.PreviousCompanyName1=result.EMS_EM_Previous_Company_Name1__c;
            this.PreviousCompanyName2=result.EMS_EM_Previous_Company_Name2__c;
            this.PreviousCompanyName3=result.EMS_EM_Previous_Company_Name3__c;
            this.PreviousCompanyName5=result.EMS_EM_Previous_Company_Name4__c;
            this.PreviousCompanyName5=result.EMS_EM_Previous_Company_Name5__c;
             this.PreviousCompanyHrMailId=result.EMS_EM_Previous_Company_HR_EmailId__c;
            this.certifiationName=result.EMS_EM_Certification_Name__c;
            this.certifiationName1=result.EMS_EM_Certification_Name1__c;
            this.certifiationName2=result.EMS_EM_Certification_Name2__c;
            this.certifiationName3=result.EMS_EM_Certification_Name3__c;
            this.certifiationName4=result.EMS_EM_Certification_Name4__c;
            this.certifiationName5=result.EMS_EM_Certification_Name5__c;
            this.certifiationName6=result.EMS_EM_Certification_Name6__c;
            this.certifiationName7=result.EMS_EM_Certification_Name7__c;
            this.certifiationName8=result.EMS_EM_Certification_Name8__c;
            this.certifiationName9=result.EMS_EM_Certification_Name9__c;
            this.certifiationName10=result.EMS_EM_Certification_Name10__c;
            this.certifiationName11=result.EMS_EM_Certification_Name11__c;
            this.certifiationName12=result.EMS_EM_Certification_Name12__c;
            this.certifiationName13=result.EMS_EM_Certification_Name13__c;
            this.certifiationName14=result.EMS_EM_Certification_Name14__c;
            this.certifiationName15=result.EMS_EM_Certification_Name15__c;
            this.certifiationName16=result.EMS_EM_Certification_Name16__c;
            this.certifiationName17=result.EMS_EM_Certification_Name17__c;
            this.certifiationName18=result.EMS_EM_Certification_Name18__c;
            this.certifiationName19=result.EMS_EM_Certification_Name19__c;

           this.OtherCertificationDetails=this.certifiationName!=null ?true:false;  
           this.OtherCertificationDetails1=this.certifiationName1!=null ?true:false;
           this.OtherCertificationDetails2=this.certifiationName2!=null ?true:false;
           this.OtherCertificationDetails3=this.certifiationName3!=null ?true:false;
           this.OtherCertificationDetails4=this.certifiationName4!=null ?true:false;
           this.OtherCertificationDetails5=this.certifiationName5!=null ?true:false;
           this.OtherCertificationDetails6=this.certifiationName6!=null ?true:false;
           this.OtherCertificationDetails7=this.certifiationName7!=null ?true:false;
           this.OtherCertificationDetails8=this.certifiationName8!=null ?true:false;
           this.OtherCertificationDetails9=this.certifiationName9!=null ?true:false;
           this.OtherCertificationDetails10=this.certifiationName10!=null ?true:false;
           this.OtherCertificationDetails11=this.certifiationName11!=null ?true:false;
           this.OtherCertificationDetails12=this.certifiationName12!=null ?true:false;
           this.OtherCertificationDetails13=this.certifiationName13!=null ?true:false;
           this.OtherCertificationDetails14=this.certifiationName14!=null ?true:false;
           this.OtherCertificationDetails15=this.certifiationName15!=null ?true:false;
           this.OtherCertificationDetails16=this.certifiationName16!=null ?true:false;
           this.OtherCertificationDetails17=this.certifiationName17!=null ?true:false;
           this.OtherCertificationDetails18=this.certifiationName18!=null ?true:false;
           this.OtherCertificationDetails19=this.certifiationName19!=null ?true:false;


          this.additionalEducation1 = this.levelOfEducation1!=null || this.degree1!=null || this.fieldOfStudy1!=null || this.institutionName1!=null || this.graduationDate1!=null ? true:false;
          this.additionalEducation2 = this.levelOfEducation2!=null || this.degree2!=null || this.fieldOfStudy2!=null || this.institutionName2!=null || this.graduationDate2!=null ? true:false;
          this.additionalEducation3 = this.levelOfEducation3!=null || this.degree3!=null || this.fieldOfStudy3!=null || this.institutionName3!=null || this.graduationDate3!=null ? true:false;
          this.additionalEducation4= this.levelOfEducation4!=null || this.degree4!=null || this.fieldOfStudy4!=null || this.institutionName4!=null || this.graduationDate4!=null ? true:false;
          this.additionalEducation5 = this.levelOfEducation5!=null || this.degree5!=null || this.fieldOfStudy5!=null || this.institutionName5!=null || this.graduationDate5!=null ? true:false;

           this.workExperience1=this.jobTitle1!=null || this.fromDate1!=null || this.toDate1!=null || this.PreviousCompanyName1 ?true:false;
           this.workExperience2=this.jobTitle2!=null || this.fromDate2!=null || this.toDate2!=null || this.PreviousCompanyName2 ?true:false;
           this.workExperience3=this.jobTitle3!=null || this.fromDate3!=null || this.toDate3!=null || this.PreviousCompanyName3 ?true:false;
           this.workExperience4=this.jobTitle4!=null || this.fromDate4!=null || this.toDate4!=null || this.PreviousCompanyName4 ?true:false;
           this.workExperience5=this.jobTitle5!=null || this.fromDate5!=null || this.toDate5!=null || this.PreviousCompanyName5 ?true:false;

        }).catch(err => {
            console.log(err);
        
        });
    }
}