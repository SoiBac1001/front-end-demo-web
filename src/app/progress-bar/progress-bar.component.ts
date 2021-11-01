import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  constructor() {
    // console.log({backgroundColor: this.backgroundColor, progressColor: this.progressColor, progress: this.progress});
  }

  @Input() backgroundColor: string;
  @Input('progress-color') progressColor: string;
  // @Input() progress = 0;
     set progress(val: number) {
        // validate val
        console.log(val);
        if(typeof val !== 'number'){
            let _progress = Number(val);
            if(Number.isNaN(_progress)) {
                this.$progress = 0;
            } else {
                this.$progress = _progress;
            }
        } else {
            this.$progress = val;
        }

    };

  private $progress = 20;

    @Input()  get progress() {
        return this.$progress;
    };

  ngOnInit() {
    console.log(
        'onInit', {
          backgroundColor: this.backgroundColor,
          progressColor: this.progressColor,
          progress: this.progress
        }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*console.log(
        'onChanges', {
          backgroundColor: this.backgroundColor,
          progressColor: this.progressColor,
          progress: this.progress
        }
    );*/

    if ('progress' in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 50;
        } else {
          this.progress = progress;
        }
      }
    }
  }

}
