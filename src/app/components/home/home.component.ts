import {Component, HostListener, OnInit} from '@angular/core';
import {base64PDF} from "../../../assets/cv";

export interface Data{
  src: string;
  title: string;
  alt: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  breakpoint: number = 3;
  tileList: Data[] = [
    {src: './assets/imgs/icons8-html-5-48.png', title: 'HTML5', alt: 'HTML5'},
    {src: './assets/imgs/icons8-css3-48.png', title: 'CSS3', alt: 'CSS3'},
    {src: './assets/imgs/icons8-javascript-48.png', title: 'JavaScript', alt: 'JavaScript'},
    {src: './assets/imgs/Typescript_logo_2020.svg.png', title: 'TypeScript', alt: 'TypeScrpit'},
    {src: './assets/imgs/icons8-java-48.png', title: 'Java', alt: 'Java'},
    {src: './assets/imgs/icons8-angular-24.png', title: 'Angular', alt: 'Angular'},
    {src: './assets/imgs/icons8-bootstrap-48.png', title: 'Bootstrap', alt: 'Bootstrap'},
    {src: './assets/imgs/spring-boot-logo.png', title: 'SpringBoot', alt: 'SpringBoot'},
    {src: './assets/imgs/git.png', title: 'Git', alt: 'Git'}

  ];
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(event?.target?.innerWidth <= 980)
      this.breakpoint = 2

    if(event.target?.innerWidth > 980)
      this.breakpoint = 3
  }
  constructor() { }

  ngOnInit() {
    if(window.innerWidth <= 980)
      this.breakpoint = 2

    if(window.innerWidth > 980)
      this.breakpoint = 3
  }

  openCV(): void{
    const byteCharacters = atob(base64PDF.file.data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new Blob([byteArray], { type: 'application/pdf;base64' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
    setTimeout(() => {
      window.document.title = 'asas';
    }, 10)
  }


  scroll(e: HTMLElement): void{
    e.scrollIntoView();
  }

}
