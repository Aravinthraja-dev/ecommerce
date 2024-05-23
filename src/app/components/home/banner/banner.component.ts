import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  imageUrls: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) {
    const imageNames = ['banner1', 'banner2', 'banner3'];
    this.imageUrls = imageNames.map((imageName) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${imageName}.jpg`)
    );
  }

}
