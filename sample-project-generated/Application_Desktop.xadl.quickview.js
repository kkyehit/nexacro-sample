(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset

            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("MidLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.VFrameSet00 = ""
        this.TopFrame = ""
        this.HFrameSet00 = ""
        this.LeftFrame = ""
        this.WorkFrame = ""
        this.BottomFrame = ""

        this.objApp = nexacro.getApplication();

        this.Environment_onload = function(obj,e)
        {
            trace(nexacro.getApplication().all['Variable0']); //undefined
        }

        this.Application_onload = function(obj,e)
        {
            this.VFrameSet00 = this.mainframe.VFrameSet00;
        	this.TopFrame = this.VFrameSet00.TopFrame;
        	this.HFrameSet00 = this.VFrameSet00.HFrameSet00;
        	this.LeftFrame = this.HFrameSet00.LeftFrame;
        	this.WorkFrame = this.HFrameSet00.WorkFrame;
        	this.BottomFrame = this.VFrameSet00.BottomFrame;
        }
        });
		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();