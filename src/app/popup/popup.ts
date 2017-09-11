export class Popup 
{
    public IsShow: boolean;
    public CssClass: string;
    public Message: string;

    constructor(isShow: boolean, cssClass: string = '', message: string = ''){
        this.IsShow = isShow;
        this.CssClass = cssClass;
        this.Message = message;
    }

    destruct(){
        this.IsShow = false;
        this.CssClass = '';
        this.Message = ''; 
    }
}
