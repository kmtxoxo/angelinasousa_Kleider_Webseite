import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  whiteFBimg: any;
  coloredFBimg: any;
  whiteIGimg: any;
  coloredIGimg: any;
  facebookImgSrc: any;
  instagramImgSrc: any;
  constructor() {
    this.coloredFBimg = '../../assets/img/logos/fb-logo-bunt.png';
    this.coloredIGimg = '../../assets/img/logos/ig-logo-bunt.png';
    this.whiteFBimg = '../../assets/img/logos/fb-logo.png';
    this.whiteIGimg = '../../assets/img/logos/ig-logo.png';

    this.facebookImgSrc = this.whiteFBimg;
    this.instagramImgSrc = this.whiteIGimg;
  }

  ngOnInit() {
  }

  OnFacebookHover() {
    this.facebookImgSrc = this.coloredFBimg;
  }

  OnFacebookHoverOut() {
    this.facebookImgSrc = this.whiteFBimg;
  }

  OnInstagramHover() {
   this.instagramImgSrc = this.coloredIGimg;
  }

  OnInstagramHoverOut() {
    this.instagramImgSrc = this.whiteIGimg;
  }
}
