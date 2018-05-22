import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  ngOnInit() {
  }
  cal_bmi(lbs, ins)
  {
      let h2 = ins * ins;
      let bmi = lbs/h2 * 703;
      let f_bmi = Math.floor(bmi);
      let diff  = bmi - f_bmi;
      diff = diff * 10;
      diff = Math.round(diff);
      if (diff == 10)    // Need to bump up the whole thing instead
      {
        f_bmi += 1;
        diff   = 0;
      }
      let new_bmi = f_bmi + "." + diff;
      return new_bmi;
    }
  compute()
  {
      var f = self.document.forms[0];
      let w = f.wt.value;
      let v = f.htf.value;
      let u = f.hti.value;
      if (!this.chkw(u))
      {
      var ii = 0;
      f.hti.value = 0;
      } else
      {
      let it = f.hti.value*1;
      var ii = it;
      }
      var fi = f.htf.value * 12;
      var i =  f.htf.value * 12 + f.hti.value*1.0;  
      if (!this.chkw(v))
      {
      alert("Please enter a number for your height.");
      f.htf.focus();
      return;
      }
      if (!this.chkw(w))
      {
      alert("Please enter a number for your weight.");
      f.wt.focus();
      return;
      }
      // Perform the calculation
      f.bmi.value = this.cal_bmi(w, i);
      f.bmi.focus();
  }

    chkw(w){
      if (isNaN(parseInt(w))){
        return false;
      } else if (w < 0){
        return false;
      }
      else{
        return true;
      }
    }
}
