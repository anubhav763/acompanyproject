import { LightningElement, wire } from 'lwc';

import { getObjectInfos } from 'lightning/uiObjectInfoApi';  
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

export default class GetObjectInfoDema extends LightningElement {
  
    objectApiNames = [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT];
    objectInfos;
    @wire(getObjectInfos, {objectApiNames: '$objectApiNames'})
    objectInfoHandler({data}){
        if(data){
            console.log(data);
            this.objectInfos = data;
        }
    }
}