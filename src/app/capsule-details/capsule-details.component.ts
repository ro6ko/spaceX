import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription } from 'rxjs';

import { Capsule } from '../core/models/capsule.model';
import { CapsuleService } from '../core/services/capsule.service';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss']
})
export class CapsuleDetailsComponent implements OnInit, OnDestroy {
  capsule: Capsule;
  subscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private capsuleService: CapsuleService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription = this.capsuleService.getCapsule(id).subscribe(
      res => {
        this.capsule = res;
        console.log("capsuleService.getCapsule: ", res)
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
