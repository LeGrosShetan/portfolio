import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  getCVPDF(){

    var fileURL = "../assets/CV_Maxime_Poiret.pdf";
    window.open(fileURL);
    var a         = document.createElement('a');
    a.href        = fileURL;
    a.target      = '_blank';
    a.download    = 'CV_Maxime_Poiret.pdf';
    document.body.appendChild(a);
    a.click();
  }
}
