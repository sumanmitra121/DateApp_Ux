import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { member } from 'src/Model/member';
import { UtilityService } from 'src/utilyT/-utility.service';
import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';
@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {
  member:member;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  constructor(private utilyT:UtilityService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadmember();
    this.galleryOptions = [
      {
        width: '400px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 100,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }]
  }
   loadmember(){
     this.utilyT._memberByname('users',this.route.snapshot.paramMap.get('_u_name')).subscribe(member => {
       this.member =member;
       this.galleryImages = this.getImages();
     })
   }
   getImages():NgxGalleryImage[]{
   const imageUrls = [];
    for(const photo of this.member.photos){
      imageUrls.push({
        small:photo?.url,
        medium:photo?.url,
        big:photo?.url
      });
    }
    return imageUrls;
   }
}
