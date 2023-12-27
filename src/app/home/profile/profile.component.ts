import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
  
export class ProfileComponent implements OnInit, OnChanges  {
  

  public titleEnglish: string = "Information";
  //public subtitleEnglish: string = "SUB TITLE";
  
  public titleEspanol: string = 'Información';  
  //public subtitleEspanol: string = 'SUB TITULO';


  public title = this.titleEnglish;
  //public subtitle = this.subtitleEnglish;


  // You can use a HTML tags in 'data'
  public profileEnglish: any =
    {
      title: 'ABOUT ME:', data: "<p>Finishing my last year of bachellor's degree in Computer Science"
      + '<BR> Information Technologies track within the bachellors degree. </p>',
      contact: 'CONTACT', sp: 'SOCIAL PROFILES'
    };
  
    public profileEspanol: any =
      {
        
        title: 'ACERCA DE MI:', data: '<p>Ingeniero informático, loco por comerme el mundo.'
        + '<BR><br>Mirando retroactivamente, desde niño, tuve intereses muy distintos a mis compañeros, y eso me llevó a amar de forma acérrima el mundo de la ciencia.'
        +'<BR><br> La informática, per se, es fascinante. Solo hay un requisito, salirse de la caja, y por ende, ser creativo.'
        +'<BR><br>Mi mayor deleite consiste en mezclar idéas, disciplinas, pensamientos, tratando siempre, de ver el nexo en común, para crear cosas maravillosas.'
        +'<br><br>El único límite, es ilusorio, algo que sin mayor dilación recáe sobre nosotros, sin que apenas nos demos cuenta.</p>',
        contact: 'CONTACTO', sp: 'PERFILES'
      };
  
  public profile = this.profileEnglish;
  @Input() Spanish: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (!this.Spanish) {
      this.title = this.titleEnglish;
      //this.subtitle = this.subtitleEnglish;
      this.profile = this.profileEnglish;
    } else {
      this.title = this.titleEspanol;
      //this.subtitle = this.subtitleEspanol;
      this.profile = this.profileEspanol;
    }
  }


}
