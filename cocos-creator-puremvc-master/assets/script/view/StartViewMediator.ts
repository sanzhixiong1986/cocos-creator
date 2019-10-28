import GameProxy from "../model/GameProxy";

export default class StartViewMediator extends puremvc.Mediator implements puremvc.IMediator {
    public static NAME: string = "StartViewMediator";

    //构造函数的监听(参数是视图对对象)
    public constructor(viewComponent: any) {
        super(StartViewMediator.NAME, viewComponent);
    }

    //事件监听
    public listNotificationInterests(): string[] {
        return [];
    }

    //监听事件给出结果
    public handleNotification(notification: puremvc.INotification): void {
        const data = notification.getBody();
        switch (notification.getName()) {

        }
    }

    //渲染操作
    public onRegister(): void {
        this.viewComponent.testButton.node.on('click', (event) => {
            cc.log('click.');

            const gameProxy: GameProxy = <GameProxy>this.facade.retrieveProxy(GameProxy.NAME);
            gameProxy.fetchTest();
        });
    }

    public onRemove(): void {

    }
}