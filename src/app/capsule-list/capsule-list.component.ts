import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Capsule } from '../core/models/capsule.model';
import { CapsuleService } from '../core/services/capsule.service';

@Component({
  selector: 'app-capsule-list',
  templateUrl: './capsule-list.component.html',
  styleUrls: ['./capsule-list.component.scss']
})
export class CapsuleListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  allCapsules: Capsule[] = [];
  displayedColumns: string[] = [
    'capsule_serial',
    'capsule_id',
    'status',
    'original_launch',
    'original_launch_unix',
    'landings',
    'type',
    'details',
    'reuse_count'
  ];

  dataSource = new MatTableDataSource(this.allCapsules);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private capsuleService: CapsuleService
  ) { }

  ngOnInit(): void {
    this.getAllCapsules();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllCapsules(): void {
    this.subscription = this.capsuleService.getAllCapsules().subscribe(
      res => {
        this.allCapsules = res;
        console.log("capsuleService.getCapsules: ", res)
        this.dataSource = new MatTableDataSource(this.allCapsules);
        this.dataSource.sort = this.sort;
        console.log("dataSource: ", this.dataSource)
      }
    )
  }

  navigateToDetails(capsule: Capsule): void {
    this.router.navigate(['/capsule-details', capsule.capsule_serial]);
  }
}
