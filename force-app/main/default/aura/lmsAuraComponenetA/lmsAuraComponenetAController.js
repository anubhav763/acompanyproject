({
    handleMessage : function(component, message) {
        if(message!=null && message.getParam("lmsData")!= null){
            component.set("v.messageReceived", message.getParam("lmsData").value);
        }
    },
    inputHanlder : function(component, event) {
        console.log(event.target.value);
        console.log("v.messageValue", event.target.value);
    },
    publishMessage : function(component) {
        let msg = component.get("v.messageValue");
        let message={
            lmsData:{
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message);
    }
})
