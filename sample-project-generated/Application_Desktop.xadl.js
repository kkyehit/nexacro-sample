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
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("50,*,100");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("200,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",frame2);
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("false");
            frame2.addChild(frame4.name, frame4);
            frame4.set_formurl("FrameBase::Form_Work.xfdl");


            var frame5 = new ChildFrame("BottomFrame",null,null,null,null,null,null,"FrameBase::Form_Bottom.xfdl",frame0);
            frame5.set_showtitlebar("false");
            frame5.set_showstatusbar("false");
            frame0.addChild(frame5.name, frame5);
            frame5.set_formurl("FrameBase::Form_Bottom.xfdl");


            var frame6 = new ChildFrame("LoginFrame",null,null,null,null,null,null,"FrameBase::Form_Login.xfdl",frame0);
            frame6.set_showtitlebar("false");
            frame0.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Form_Login.xfdl");
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
