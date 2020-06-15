import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Capsule } from '../core/models/capsule.model';
import { CapsuleService } from '../core/services/capsule.service';

@Component({
  selector: 'app-capsule-upcoming',
  templateUrl: './capsule-upcoming.component.html',
  styleUrls: ['./capsule-upcoming.component.scss']
})
export class CapsuleUpcomingComponent implements OnInit, OnDestroy {
  subscription: Subscription
  upcomingCapsules: Capsule[] = [];
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

  dataSource = new MatTableDataSource(this.upcomingCapsules);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private capsuleService: CapsuleService
  ) { }

  ngOnInit(): void {
    this.getUpcomingCapsules();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getUpcomingCapsules(): void {
    this.subscription = this.capsuleService.getUpcomingCapsules().subscribe(
      res => {
        this.upcomingCapsules = res;
        this.dataSource = new MatTableDataSource(this.upcomingCapsules);
        this.dataSource.sort = this.sort;
      }
    )
  }

  navigateToDetails(capsule: Capsule): void {
    this.router.navigate(['/capsule-details', capsule.capsule_serial]);
  }
}
