import { Component, OnInit } from '@angular/core';

interface IMenuList {
  tabName: string;
  description: string;
}

@Component({
  selector: 'app-documentation-home',
  templateUrl: './documentation-home.component.html',
  styleUrls: ['./documentation-home.component.scss'],
})
export class DocumentationHomeComponent implements OnInit {
  logo = '../../../../assets/images/logo.png';

  menuList: IMenuList[] = [
    { tabName: 'Installation', description: 'Installation description' },
    { tabName: 'Menu', description: 'Menu description' },
    { tabName: 'Slider', description: 'Slide description' },
    { tabName: 'Banner', description: 'Banner description' },
    { tabName: 'Map', description: 'Map description' },
  ];
  activeTab = this.menuList[0];

  // installation
  installationHtmlContent = 
  ` # Instll Nodejs
  https://nodejs.org/en/

  # Open Nodejs Terminal
  # Install Angular Cli
  npm i -g @angular/cli
  
  # download the code or clone the repo from github
  git clone https://github.com/Proplus-admin/ProPlus-UI.git
  
  # change directory
  cd ProPlus-UI
  
  # install the repo with npm
  npm install
  
  # start the server
  npm start`;

  // slider
  images = [
    { image: '../../../../../assets/images/view1.jpg' },
    { image: '../../../../../assets/images/view2.jpg' },
    { image: '../../../../../assets/images/view3.jpg' },
    { image: '../../../../../assets/images/view4.jpg' },
    { image: '../../../../../assets/images/view5.jpg' },
    { image: '../../../../../assets/images/view6.jpg' },
    { image: '../../../../../assets/images/view7.jpg' },
    { image: '../../../../../assets/images/view8.jpg' },
    { image: '../../../../../assets/images/view9.jpg' },
    { image: '../../../../../assets/images/view10.jpg' },
    { image: '../../../../../assets/images/view11.jpg' },
    { image: '../../../../../assets/images/view12.jpg' },
  ];
  sliderHtmlContent = 
  ` # Find the component and replace the latitude and longitude 
  <app-slider [images]="images" [caption]="true" [randomTrans]="true"></app-slider>
  
    # images list
    images = [
      { image: '../../../../../assets/images/view1.jpg' },
      { image: '../../../../../assets/images/view2.jpg' },
      { image: '../../../../../assets/images/view3.jpg' },
      { image: '../../../../../assets/images/view4.jpg' },
      { image: '../../../../../assets/images/view5.jpg' },
      { image: '../../../../../assets/images/view6.jpg' },
      { image: '../../../../../assets/images/view7.jpg' },
      { image: '../../../../../assets/images/view8.jpg' },
      { image: '../../../../../assets/images/view9.jpg' },
      { image: '../../../../../assets/images/view10.jpg' },
      { image: '../../../../../assets/images/view11.jpg' },
      { image: '../../../../../assets/images/view12.jpg' },
    ];`;

  // map
  mapValue = {
    latitude: 19.300249,
    longitude: -81.375999,
  }
  loadMap = true;

  mapHtmlContent = 
  ` # Find the component and replace the latitude and longitude
  <app-map-box [lat]="19.300249" [long]="-81.375999"></app-map-box>`;

  constructor() { }

  ngOnInit(): void {
    document.querySelectorAll('link, style').forEach((htmlElement) => {
      window.document.head.appendChild(htmlElement.cloneNode(true));
    });
  }

  selectTab(menu: IMenuList): void {
    this.activeTab = menu;
  }

  // map
  refreshMap(): void {
    this.loadMap = false;
    setTimeout(() => {
      this.loadMap = true;
    }, 100);
  }

}
