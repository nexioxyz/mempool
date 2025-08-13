import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesApiServices } from '../../../services/services-api.service';

export type AccelerationStats = {
  totalRequested: number;
  totalBidBoost: number;
  successRate: number;
  totalVsize: number;
}

@Component({
  selector: 'app-acceleration-stats',
  templateUrl: './acceleration-stats.component.html',
  styleUrls: ['./acceleration-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccelerationStatsComponent implements OnInit, OnChanges {
  @Input() timespan: '3d' | '1w' | '1m' = '1w';
  accelerationStats$: Observable<AccelerationStats>;
  blocksInPeriod: number = 7 * 144;

  constructor(
    private servicesApiService: ServicesApiServices
  ) { }

  ngOnInit(): void {
    this.updateStats();
  }

  ngOnChanges(): void {
    this.updateStats();
  }

  updateStats(): void {
    this.accelerationStats$ = this.servicesApiService.getAccelerationStats$({ timeframe: this.timespan });
    switch (this.timespan) {
      case '3d':
        this.blocksInPeriod = 3 * 144;
        break;
      case '1w':
        this.blocksInPeriod = 7 * 144;
        break;
      case '1m':
        this.blocksInPeriod = 30 * 144;
        break;
    }
  }
}
