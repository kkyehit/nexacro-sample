(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","0","0","433","113",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Login");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Login.xfdl", function() {
        this.objApp = nexacro.getApplication();
        this.TopFrame = ""
        this.HFrameSet00 = ""
        this.BottomFrame = ""
        this.LoginFrame = ""


        this.Button00_onclick = function(obj,e)
        {
        	this.close();

        	this.TopFrame.set_visible(true)
        	this.HFrameSet00.set_visible(true)
        	this.BottomFrame.set_visible(true)

        };

        this.Form_Login_onload = function(obj,e)
        {
        	this.TopFrame = this.objApp.mainframe.VFrameSet00.TopFrame;
        	this.HFrameSet00 = this.objApp.mainframe.VFrameSet00.HFrameSet00;
        	this.LeftFrame = this.objApp.mainframe.VFrameSet00.HFrameSet00.LeftFrame;
        	this.BottomFrame = this.objApp.mainframe.VFrameSet00.BottomFrame;
        	this.LoginFrame = this.objApp.mainframe.VFrameSet00.LoginFrame;

        	this.TopFrame.set_visible(false)
        	this.HFrameSet00.set_visible(false)
        	this.BottomFrame.set_visible(false)
        	var width = this.objApp.mainframe.width;
        	var height = this.objApp.mainframe.height;

        	trace('witdh : ' + width + 'height : ' + height )
        	this.move(0, 0, width, height);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Login_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
