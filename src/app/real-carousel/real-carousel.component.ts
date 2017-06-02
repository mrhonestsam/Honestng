import { Component,Input, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-real-carousel',
  templateUrl: './real-carousel.component.html',
  styleUrls: ['./real-carousel.component.scss']
})
export class RealCarouselComponent implements OnInit {                                                     
  @Input() items: any[];                                                                                                   
                                 //項目數量
  @Input() itemSpan:number =10;                                   //項目的間隔
  @Input()  isHorizontal:boolean=false;                           //carousel水平或垂直
  @Input()  panelSize:number=180;                             //panel的  寬或高

  private panelCount:number;
  private element:any;                                                              //carousel元件
  private rotation:any=0;                                                           //切換項目時所需變換的z 軸向量
  private totalPanelCount:any=12;                                                   //項目的最多數量
  private theta:any;      
  private radius:any;                                                               //每個項目的角度   360/項目數量
  private currentDisplay:number=0;                                                  //目前顯示的項目
  private rotateFx:string= this.isHorizontal?"rotateX":"rotateY";   
  
  constructor() { }

  ngOnInit() {

    this.panelCount=this.items.length;
  }
  ngAfterViewInit(){
    this.rotateFx= this.isHorizontal?"rotateX":"rotateY"; 
    this.rotate();
  }
  public rotate(){                                                   //旋轉事件
    this.setfigure();
                                            //重新設定figure的style
    this.element  = document.getElementById("carousel");                                  //從dom取得carousel
    this.panelSize =this.isHorizontal?this.element.children[0]['offsetHeight']:this.element.children[0]['offsetWidth'];   
    this.theta = (360/this.panelCount);                
    this.radius = Math.round( ( this.panelSize / 2) / Math.tan( Math.PI / this.panelCount ) );       //計算半徑                                               //計算要轉的角度 
    this.rotation = Math.round( this.currentDisplay ) * this.theta;                            //的角度
    this.element.style.transform=`${this.rotateFx}(-${this.rotation}deg) translateZ(-0px)`;             //設定css transform讓它旋轉
    this.currentDisplay++;                                                   //將目前顯示的項目回寫
  }

  public setfigure(){
    this.element  = document.getElementById("carousel");                                             //從dom取得carousel
    this.panelSize =this.isHorizontal?this.element.children[0]['offsetHeight']:this.element.children[0]['offsetWidth']; 
    this.theta = 360 / this.panelCount;
    this.radius = Math.round( ( this.panelSize/2) / Math.tan( Math.PI / this.panelCount ) ); 
    for(let i =0;i<this.element.children.length;i++)
    {
      let panel =<HTMLElement> this.element.children[i];
      if(i<this.panelCount){
              panel.style.opacity ="1";
              panel.style.transform=`${this.rotateFx}(${(i*this.theta)}deg) translateZ(${this.radius+this.itemSpan*2}px)`;
              if( i==(this.currentDisplay)%this.panelCount){
                panel.classList.add("nowdisplay");
                panel.classList.remove("notdisplay");
              }
              else{
                panel.classList.add("notdisplay");
                panel.classList.remove("nowdisplay");
              }
      }
      else{
        panel.style.display=`none`;
        panel.style.transform=`none`;
      }
    }
    this.element.style.transition="transform 1s";                                                    //這定轉動動畫時間1s
    console.log(this.rotateFx);
    
    this.rotateFx=="rotateX"?document.getElementById("container").style.marginTop=`${this.radius}px`
                            :document.getElementById("container").style.marginLeft=`${this.radius}px`;
  }

}


