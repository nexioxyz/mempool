import { Component } from '@angular/core';
import { Env, StateService } from '../../services/state.service';
import { SeoService } from '../../services/seo.service';
import { OpenGraphService } from '../../services/opengraph.service';

@Component({
  selector: 'app-trademark-policy',
  templateUrl: './trademark-policy.component.html',
  styleUrls: ['./trademark-policy.component.scss']
})
export class TrademarkPolicyComponent {
  officialMempoolSpace = this.stateService.env.OFFICIAL_MEMPOOL_SPACE;

  constructor(
    private stateService: StateService,
    private seoService: SeoService,
    private ogService: OpenGraphService,
  ) { }

  ngOnInit(): void {
    this.seoService.setTitle('Trademark Policy');
    this.seoService.setDescription('An overview of the trademarks registered by Mempool Space K.K. and The Mempool Open Source Project® and what we consider to be lawful usage of those trademarks.');
    this.ogService.setManualOgImage('trademark-policy.jpg');
  }
}
