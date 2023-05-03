(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Left");
            this.set_titletext("Form_Left");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","5","383","190","74",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Logout");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,570,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Left.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.TopFrame = ""
        this.HFrameSet00 = ""
        this.BottomFrame = ""
        this.LoginFrame = ""


        this.Button00_onclick = function(obj,e)
        {
        	this.TopFrame.set_visible(false)
        	this.HFrameSet00.set_visible(false)
        	this.BottomFrame.set_visible(false)

        	this.objApp.logout()
        };


        this.Form_Left_onload = function(obj,e)
        {
        	this.TopFrame = this.objApp.mainframe.VFrameSet00.TopFrame;
        	this.HFrameSet00 = this.objApp.mainframe.VFrameSet00.HFrameSet00;
        	this.BottomFrame = this.objApp.mainframe.VFrameSet00.BottomFrame;
        	this.LoginFrame = this.objApp.mainframe.VFrameSet00.LoginFrame;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Left_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
