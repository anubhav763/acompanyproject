import { LightningElement } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class RecordFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fieldsName = [NAME_FIELD, ANNUAL_REVENUE_FIELD, TYPE_FIELD, INDUSTRY_FIELD, RATING_FIELD];

    successHandler(event){
        console.log(event.detail.id);
        const toastEvent = new ShowToastEvent({
            title: "Account Created",
            message: "Record Id"+ event.detail.id,
            variant: "success"
        })
        this.dispatchEvent(toastEvent);
    }
}