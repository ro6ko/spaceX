import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Capsule } from '../core/models/capsule.model';
import { CapsuleService } from '../core/services/capsule.service';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss']
})
export class CapsuleDetailsComponent implements OnInit {
  capsule: Capsule;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private capsuleService: CapsuleService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.capsuleService.getCapsule(id).subscribe(
      res => {
        this.capsule = res;
        console.log("capsuleService.getCapsule: ", res)
      }
    )
  }
  
  goBack(): void {
    this.location.back();
  }

}
