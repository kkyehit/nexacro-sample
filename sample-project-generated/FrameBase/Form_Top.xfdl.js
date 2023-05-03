(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Menu("Menu00","160","0","439","51",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_captioncolumn("captioncolumn");
            obj.set_checkboxcolumn("checkboxcolumn");
            obj.set_enablecolumn("enablecolumn");
            obj.set_hotkeycolumn("hotkeycolumn");
            obj.set_iconcolumn("iconcolumn");
            obj.set_idcolumn("idcolumn");
            obj.set_levelcolumn("levelcolumn");
            obj.set_userdatacolumn("userdatacolumn");
            var Menu00_innerdataset = new nexacro.NormalDataset("Menu00_innerdataset", obj);
            Menu00_innerdataset._setContents("<ColumnInfo><Column id=\"captioncolumn\" size=\"256\"/><Column id=\"checkboxcolumn\" size=\"256\"/><Column id=\"enablecolumn\" size=\"256\"/><Column id=\"hotkeycolumn\" size=\"256\"/><Column id=\"iconcolumn\" size=\"256\"/><Column id=\"idcolumn\" size=\"256\"/><Column id=\"levelcolumn\" size=\"256\"/><Column id=\"userdatacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"captioncolumn\">Menu1</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Item1</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">subItem1</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">subItem2</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">Item2</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">subItem1</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">subItem2</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">Menu2</Col><Col id=\"levelcolumn\">0</Col></Row><Row><Col id=\"captioncolumn\">Item1</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">subItem1</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">subItem2</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">Item2</Col><Col id=\"levelcolumn\">1</Col></Row><Row><Col id=\"captioncolumn\">subItem1</Col><Col id=\"levelcolumn\">2</Col></Row><Row><Col id=\"captioncolumn\">subItem2</Col><Col id=\"levelcolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(Menu00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Static("Logo","3","1","153","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Nexacro Sample");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,50,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {
        this.objApp = nexacro.getApplication()

        this.Menu00_onmenuclick = function(obj,e)
        {
            trace(this.objApp.WorkFrame)
        	var objStatic = this.objApp.WorkFrame.form.Tab00.Tabpage2.form.Static00

        	trace("clicked menu item: " + obj.id + ", ")
        	objStatic.set_text(obj.id)
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Menu00.addEventHandler("onmenuclick",this.Menu00_onmenuclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
