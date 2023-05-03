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
        this.LoginFrame = ""
        this.objApp = nexacro.getApplication();

        this.Application_onload = function(obj,e)
        {
            this.VFrameSet00 = this.mainframe.VFrameSet00;
        	this.TopFrame = this.mainframe.VFrameSet00.TopFrame;
        	this.HFrameSet00 = this.mainframe.VFrameSet00.HFrameSet00;
        	this.LeftFrame = this.mainframe.VFrameSet00.HFrameSet00.LeftFrame;
        	this.WorkFrame = this.mainframe.VFrameSet00.HFrameSet00.WorkFrame;
        	this.BottomFrame = this.mainframe.VFrameSet00.BottomFrame;
        	this.LoginFrame = this.mainframe.VFrameSet00.LoginFrame;

        	this.trace(this.VFrameSet00)
        }

        this.logout = function ()
        {
        	var childFrame = new nexacro.ChildFrame("LoginFrame", "absolute", 0, 0, 500, 500, null, null, this.mainframe.VFrameSet00);
        	childFrame.set_showtitlebar(false); // 타이틀 바를 보이지 않도록 설정
        	childFrame.set_formurl("FrameBase::Form_Login.xfdl"); // ChildFrame에 표시할 Form의 URL을 설정
        	childFrame.show(); // ChildFrame을 보이도록 함
        	this.mainframe.VFrameSet00.addChild("LoginFrame", childFrame);
        	trace(this.mainframe.VFrameSet00.childFrame)
        };
        });
		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
