import { Component, OnInit } from '@angular/core';

import { Capsule } from '../models/capsule.service';
import { CapsuleService } from '../services/capsule.service';

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.scss']
})
export class CapsuleListComponent implements OnInit {
  capsules: Capsule[];
  displayedColumns: string[] = [
    'capsule_serial',
    // 'capsule_id',
    // 'status',
    'original_launch',
    'original_launch_unix',
    // 'missions',
    'landings',
    // 'type',
    'details',
    'reuse_count'
  ];
  dataSource = this.capsules;

  constructor(private capsuleService: CapsuleService) { }

  ngOnInit(): void {
    this.capsuleService.getCapsules().subscribe(
      res => {
        this.dataSource = res;
        console.log("capsuleService.getCapsules: ", res)
      }
    )
  }

}
