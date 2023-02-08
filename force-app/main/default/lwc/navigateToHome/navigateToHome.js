import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';

export default class NavigateToHome extends NavigationMixin(LightningElement) {

    // @api recordId; import api above with LightningElement
    navigateToHomeHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName: 'home'
            }
        })
    }

    navigateToChatterHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes:{
                pageName: 'chatter'
            }
        })
    }

    navigateToNewRecordHandler(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewRecordWithDefaultValueHandler(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'First Name',
            LastName: 'Last Name',
            LeadSource: 'Other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state:{
                defaultFieldValues: defaultValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state:{
                filterName: 'Recent'
            }
        })
    }

    navigateToFile(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes:{
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        })
    }

    navigateToViewRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                recordId: '0031m00000Qx2IhAAJ', // 'this.recordId'
                objectApiName: 'Contact',
                actionName: 'view',
            }
        })
    }

    navigateToEditRecord(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes:{
                objectApiName: 'Contact',
                actionName: 'edit',
                recordId: '0031m00000Qx2IhAAJ'
            }
        })
    }

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes:{
                apiName: 'Session_18'
            }
        })
    }

    navigateToRecordRelationshipPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes:{
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view',
                recordId: '0011m00000eA3WsAAK'
            }
        })
    }

    navigateToExternalWebPage(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url: 'https://www.infosys.com/'
            }
        })
    }

    navigateToLWC(){
        var definition = {
            componentDef: 'c:componentForNavigation'
        }
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url: '/one/one.app#'+btoa(JSON.stringify(definition))
            }
        })
    }

    navigateToAURA(){
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes:{
                componentName: 'c__auraComponentForNavigation'
            },
            state:{
                "c__id": "IOBHGWSR345IHUY678"
            }
        })
    }

    navigateToVFPAGE(){
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes:{
                url: '/apex/testVisualforcePage'
            }
        }).then(generateUrl=>{
            console.log(generateUrl);
            window.open(generateUrl, "_blank");
        })
    }
}