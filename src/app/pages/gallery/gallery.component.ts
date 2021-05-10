import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  galleryImages: string[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.galleryImages = [
      '/assets/gallery/Apark1.jpg',
      '/assets/gallery/Apark2.jpg',
      '/assets/gallery/Apark3.jpg',
      '/assets/gallery/Apark4.jpg',
      '/assets/gallery/Apark5.jpg',
      '/assets/gallery/Apark6.jpg',
      '/assets/gallery/Apark7.jpg',
      '/assets/gallery/Apark8.jpg',
    ];
  }

  openImageDialog(image: string) {
    this.dialog.open(DialogDataExampleDialog, {
      width: '60%',
      data: {
        imageUrl: image,
      },
    });
  }
}

@Component({
  template: `
    <div mat-dialog-content>
      <img src="{{ data.imageUrl }}" class="img img-fluid rounded" />
    </div>
  `,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
