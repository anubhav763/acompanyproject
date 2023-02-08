import { LightningElement } from 'lwc';
import APP_LOGO from '@salesforce/resourceUrl/logo';

import MOMENT from '@salesforce/resourceUrl/moment';
import {loadScript} from 'lightning/platformResourceLoader';

import ANIMATE from '@salesforce/resourceUrl/animate';
import {loadStyle} from 'lightning/platformResourceLoader';

import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne';

import hasViewAllData from '@salesforce/userPermission/ViewAllData';

export default class StaticResourceImport extends LightningElement {
    // for displaying image from static resources
    applogo = APP_LOGO;

    description_one = DESCRIPTION_ONE

    get hasViewAllDataAvailable(){
        return hasViewAllData;
    }

    currentDate;
    isLoaded = false;
    //because we want to make sure our component loaded successfully. we've to user renderedCallback()
    renderedCallback(){
        if(this.isLoaded){
            return
        } else {
            Promise.all([
                loadStyle(this, ANIMATE+'/animate/animate.min.css'),
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{
                this.setDateOnScreen();
            // }).catch(error=>{
            //     console.error(error);
            })
            this.isLoaded = true;
        }
    }

    setDateOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
    
}