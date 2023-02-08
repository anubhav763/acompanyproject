({
    onLoad : function(component, event, helper) {
        var myPageReference = component.get("v.pageReference");
        var id = myPageReference.state.c__id;
        component.set("v.id",id);
    }
})
