const {ccclass, property} = cc._decorator;
import AppFacade from '../../AppFacade';
import StartViewMediator from '../StartViewMediator';

@ccclass
export default class StartView extends cc.Component {
    @property(cc.Button) //创建类型
    testButton: cc.Button = null;
    // onLoad () {}

    /**=开始事件=*/
    public start () {
        //注册事件
        AppFacade.getInstance().registerMediator(new StartViewMediator(this));
    }

    // update (dt) {}

    //销毁事件
    public onDestroy() {
        
        AppFacade.getInstance().removeMediator(StartViewMediator.NAME);
    }
}
