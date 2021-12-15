import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public image: string = '../../assets/img/Rubis.png'
  private pair: boolean = true

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (this.dataService.subsPassScreenshot == undefined) {
      this.dataService.subsPassScreenshot = this.dataService.
        invokePassScreenshotFunction.subscribe((img: string) => {
          setTimeout(() => {
            let doc = document.createElement('img')
            doc.src = img
            doc.style.height = '100%'
            doc.style.width = '100%'
            doc.style.objectFit = 'cover'
            doc.style.alignSelf = 'center'
            document.getElementById('img')!.appendChild(doc)
          }, 1)
        });
    }
  }


  downloadPDF() {

    if (this.pair == true) {
      let data = document.getElementById('htmlPDF')!;
      document.getElementById('cont')!.style.display = 'none'
      document.getElementById('header')!.style.display = 'none'
      data.style.display = "flex"

      html2canvas(data).then(canvas => {

        let docWidth = 212;
        let scrnHeight = screen.availHeight - ((screen.availHeight / 100) * 10)
        let docHeight = ((scrnHeight * docWidth) / screen.availWidth);

        const contentDataURL = canvas.toDataURL('image/png')
        let doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

        doc.save('Bijoux.pdf');
      });
      data.style.display = "none"
      document.getElementById('cont')!.style.display = 'inline'
      document.getElementById('header')!.style.display = 'inline'
      this.pair = false
    } else {
      this.pair = true
    }
  }

}

