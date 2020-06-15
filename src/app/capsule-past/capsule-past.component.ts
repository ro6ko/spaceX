import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Capsule } from '../core/models/capsule.model';
import { CapsuleService } from '../core/services/capsule.service';

@Component({
  selector: 'app-capsule-past',
  templateUrl: './capsule-past.component.html',
  styleUrls: ['./capsule-past.component.scss']
})
export class CapsulePastComponent implements OnInit, OnDestroy {
  subscription: Subscription
  pastCapsules: Capsule[] = [];
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

  dataSource = new MatTableDataSource(this.pastCapsules);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private capsuleService: CapsuleService
  ) { }

  ngOnInit(): void {
    this.getPastCapsules();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPastCapsules(): void {
    this.subscription = this.capsuleService.getPastCapsules().subscribe(
      res => {
        this.pastCapsules = res;
        this.dataSource = new MatTableDataSource(this.pastCapsules);
        this.dataSource.sort = this.sort;
      }
    )
  }

  navigateToDetails(capsule: Capsule): void {
    this.router.navigate(['/capsule-details', capsule.capsule_serial]);
  }
}
