/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
var REG: Function = Laya.ClassUtils.regClass;
export module ui.test {
    export class BackpackUI extends View {
        public static  uiView:any ={"type":"View","props":{"width":640,"height":300},"loadList":[],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(BackpackUI.uiView);
        }
    }
    REG("ui.test.BackpackUI",BackpackUI);
    export class RolePanelUI extends View {
		public sprite:Laya.Sprite;
        public static  uiView:any ={"type":"View","props":{"width":640,"height":300},"compId":2,"child":[{"type":"Sprite","props":{"y":71,"x":98,"width":511,"var":"sprite","texture":"test/b1.png","height":28},"compId":3}],"loadList":["test/b1.png"],"loadList3D":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(RolePanelUI.uiView);
        }
    }
    REG("ui.test.RolePanelUI",RolePanelUI);
    export class TestSceneUI extends Scene {
		public scoreLbl:Laya.Label;
		public tipLbll:Laya.Label;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("test/TestScene");
        }
    }
    REG("ui.test.TestSceneUI",TestSceneUI);
}