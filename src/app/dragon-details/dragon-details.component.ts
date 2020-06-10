import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Dragon } from '../core/models/dragon.model';
import { DragonService } from '../core/services/dragon.service';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss']
})
export class DragonDetailsComponent implements OnInit {
  dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dragonService: DragonService
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(id).subscribe(
      res => {
        this.dragon = res;
        console.log("dragonService.getDragon: ", res)
      }
    )
  }
  
  goBack(): void {
    this.location.back();
  }

}
